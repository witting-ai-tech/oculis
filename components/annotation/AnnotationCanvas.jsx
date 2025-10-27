import {
  useState,
  useRef,
  useLayoutEffect,
  useEffect,
  useCallback,
} from "react";
import Image from "next/image";
import { Plus, Minus, Undo, Redo, RotateCcw } from "lucide-react";
import { Tip } from "../Tip";
import CanvasShapes from "./CanvasShapes";
import EditLabel from "@/components/forms/EditLabel";

export default function AnnotationCanvas({
  imageSrc,
  tool,
  selectedColor,
  onSelect,
  rects,
  setRects,
  paths,
  setPaths,
  polygons,
  setPolygons,
  showControls = true,
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const zoomLayerRef = useRef(null);

  const [canvasSize, setCanvasSize] = useState({ width: 1, height: 1 });
  // const [rects, setRects] = useState([]);
  // const [paths, setPaths] = useState([]);
  // const [polygons, setPolygons] = useState([]);

  const [drawingRect, setDrawingRect] = useState(null);
  const [currentPath, setCurrentPath] = useState([]);
  const [drawingPath, setDrawingPath] = useState(false);
  const [currentPolygon, setCurrentPolygon] = useState([]);
  const [draggingVertex, setDraggingVertex] = useState(null);
  const [draggingShape, setDraggingShape] = useState(null); // { type: "rect" | "polygon", index, start }

  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  const rectsRef = useRef(rects);
  const pathsRef = useRef(paths);
  const ignoreClickRef = useRef(false);

  const polygonsRef = useRef(polygons);

  useEffect(() => {
    rectsRef.current = rects;
    pathsRef.current = paths;
    polygonsRef.current = polygons;
  }, [rects, paths, polygons]);

  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const panStartRef = useRef({ x: 0, y: 0 });

  const getCursor = () => {
    switch (tool) {
      case "rect":
        return "crosshair";
      case "brush":
        return "url('/brush.svg'), crosshair";
      case "pen":
        return "url('/pen.svg'), crosshair";
      case "move":
        return isPanning ? "grabbing" : "grab";
      default:
        return "default";
    }
  };

  const getRelativePoint = (e) => {
    const bounds = zoomLayerRef.current.getBoundingClientRect();
    const clientX = e.touches?.[0]?.clientX ?? e.clientX;
    const clientY = e.touches?.[0]?.clientY ?? e.clientY;
    return {
      x: (clientX - bounds.left - offset.x) / zoom,
      y: (clientY - bounds.top - offset.y) / zoom,
    };
  };

  const normalizePoint = (pt) => ({
    x: Math.max(0, Math.min(pt.x / canvasSize.width, 1)),
    y: Math.max(0, Math.min(pt.y / canvasSize.height, 1)),
  });

  const denormalizePoint = (pt) => ({
    x: pt.x * canvasSize.width,
    y: pt.y * canvasSize.height,
  });

  const pushState = (nextRects, nextPaths, nextPolygons) => {
    setUndoStack((prev) => [
      ...prev,
      {
        rects: [...rectsRef.current],
        paths: [...pathsRef.current],
        polygons: [...polygonsRef.current],
      },
    ]);
    setRedoStack([]);

    // 🟢 Ensure refs are in sync before setting new state
    rectsRef.current = nextRects;
    pathsRef.current = nextPaths;
    polygonsRef.current = nextPolygons;

    setRects(nextRects);
    setPaths(nextPaths);
    setPolygons(nextPolygons);
  };
  const handleUndo = useCallback(() => {
    if (undoStack.length === 0) return;
    console.log("Undoing last action");
    const last = undoStack[undoStack.length - 1];
    setRedoStack((r) => [
      ...r,
      {
        rects: [...rects],
        paths: [...paths],
        polygons: [...polygons],
      },
    ]);
    console.log("Redo Stack:", redoStack);
    setRects(last.rects);
    setPaths(last.paths);
    setPolygons(last.polygons);
    setUndoStack((u) => u.slice(0, -1));
  }, [undoStack, rects, paths, polygons]);

  const handleRedo = useCallback(() => {
    if (redoStack.length === 0) return;
    console.log("redo last action");
    const next = redoStack[redoStack.length - 1];
    setUndoStack((u) => [
      ...u,
      {
        rects: [...rects],
        paths: [...paths],
        polygons: [...polygons],
      },
    ]);
    console.log("Undo Stack:", redoStack);

    setRects(next.rects);
    setPaths(next.paths);
    setPolygons(next.polygons);
    setRedoStack((r) => r.slice(0, -1));
  }, [redoStack, rects, paths, polygons]);

  // Rename overlay state
  const [renameState, setRenameState] = useState({
    open: false,
    type: null, // "rect" | "polygon"
    index: -1,
    value: "",
  });

  const clampOffset = (newOffset) => {
    const zoomedWidth = canvasSize.width * zoom;
    const zoomedHeight = canvasSize.height * zoom;
    const container = containerRef.current?.getBoundingClientRect();
    if (!container) return newOffset;

    const maxX = Math.max(0, zoomedWidth - container.width);
    const maxY = Math.max(0, zoomedHeight - container.height);

    return {
      x: Math.min(0, Math.max(newOffset.x, -maxX)),
      y: Math.min(0, Math.max(newOffset.y, -maxY)),
    };
  };

  const startDrawing = (e) => {
    if (tool === "move") {
      setIsPanning(true);
      const clientX = e.touches?.[0]?.clientX ?? e.clientX;
      const clientY = e.touches?.[0]?.clientY ?? e.clientY;
      panStartRef.current = { x: clientX - offset.x, y: clientY - offset.y };
      return;
    }
    if (tool === "rect") {
      const point = normalizePoint(getRelativePoint(e));
      setDrawingRect({ start: point, end: point, color: selectedColor });
    } else if (tool === "brush") {
      const point = normalizePoint(getRelativePoint(e));
      setCurrentPath([{ ...point, color: selectedColor, width: 0.004 }]);
      setDrawingPath(true);
    }
  };

  const draw = (e) => {
    if (isPanning && tool === "move") {
      const clientX = e.touches?.[0]?.clientX ?? e.clientX;
      const clientY = e.touches?.[0]?.clientY ?? e.clientY;
      const newOffset = {
        x: clientX - panStartRef.current.x,
        y: clientY - panStartRef.current.y,
      };
      setOffset(clampOffset(newOffset));
      return;
    }

    const point = normalizePoint(getRelativePoint(e));

    if (drawingRect) {
      setDrawingRect((r) => ({ ...r, end: point }));
    } else if (drawingPath) {
      setCurrentPath((prev) => [
        ...prev,
        { ...point, color: selectedColor, width: 0.004 },
      ]);
    } else if (draggingVertex) {
      const { polygonIndex, vertexIndex } = draggingVertex;
      setPolygons((prevPolys) => {
        const newPolys = [...prevPolys];
        const newPoly = { ...newPolys[polygonIndex] };
        const newPoints = [...newPoly.points];
        newPoints[vertexIndex] = point;
        newPoly.points = newPoints;
        newPolys[polygonIndex] = newPoly;
        return newPolys;
      });
    } else if (draggingShape && tool === "move") {
      const { type, index, start } = draggingShape;
      const dx = point.x - start.x;
      const dy = point.y - start.y;

      if (type === "rect") {
        setRects((prevRects) => {
          const updated = [...prevRects];
          const r = updated[index];
          updated[index] = {
            ...r,
            start: { x: r.start.x + dx, y: r.start.y + dy },
            end: { x: r.end.x + dx, y: r.end.y + dy },
          };
          return updated;
        });
      } else if (type === "polygon") {
        setPolygons((prevPolys) => {
          const updated = [...prevPolys];
          const poly = updated[index];
          updated[index] = {
            ...poly,
            points: poly.points.map((pt) => ({
              x: pt.x + dx,
              y: pt.y + dy,
            })),
          };
          return updated;
        });
      }

      setDraggingShape({ ...draggingShape, start: point });
    }
  };

  const endDrawing = () => {
    if (isPanning) {
      setIsPanning(false);
      return;
    }

    if (drawingRect) {
      const dx = drawingRect.end.x - drawingRect.start.x;
      const dy = drawingRect.end.y - drawingRect.start.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 0.01) {
        // ✅ Only add rectangle if dragged enough
        const zoneIndex = [...rects, ...polygons].length + 1;
        const rectWithLabel = {
          ...drawingRect,
          label: drawingRect.label || `Zone ${zoneIndex}`,
        };
        const updatedRects = [...rects, rectWithLabel];
        setRects(updatedRects);
        rectsRef.current = updatedRects;
        pushState(updatedRects, paths, polygons); // capture AFTER state updates
        onSelect?.(drawingRect);
      }

      setDrawingRect(null); // always clear the drawing state
    } else if (drawingPath) {
      const updatedPaths = [...paths, currentPath];
      setPaths(updatedPaths);
      pathsRef.current = updatedPaths;
      pushState(rects, updatedPaths, polygons); // capture AFTER state updates
      onSelect?.(currentPath);
      setCurrentPath([]);
      setDrawingPath(false);
    } else if (draggingVertex || draggingShape) {
      pushState(rects, paths, polygons);
      setDraggingVertex(null);
      setDraggingShape(null);
    }
  };

  const handleClick = (e) => {
    if (ignoreClickRef.current) {
      ignoreClickRef.current = false;
      return;
    }
    if (tool !== "pen") return;
    const point = getRelativePoint(e);
    const normPoint = normalizePoint(point);

    if (currentPolygon.length > 2) {
      const first = currentPolygon[0];
      const dist =
        Math.hypot(first.x - normPoint.x, first.y - normPoint.y) *
        canvasSize.width;
      if (dist < 0.02 * canvasSize.width) {
        pushState(rects, paths, polygons); // capture polygon before new one is added
        const zoneIndex = [...rectsRef.current, ...polygons].length + 1;
        const newPolygons = [
          ...polygons,
          {
            points: currentPolygon,
            color: selectedColor,
            label: `Zone ${zoneIndex}`,
          },
        ];
        setPolygons(newPolygons);
        polygonsRef.current = newPolygons;
        setCurrentPolygon([]);
        return;
      }
    }
    setCurrentPolygon([...currentPolygon, normPoint]);
  };

  const handleEditShape = (index, type) => {
    let current = "";
    if (type === "rect") current = rects[index]?.label || "";
    if (type === "polygon") current = polygons[index]?.label || "";
    setRenameState({ open: true, type, index, value: current });
  };

  const handleRenameCancel = () => {
    setRenameState({ open: false, type: null, index: -1, value: "" });
  };

  const handleRenameSave = () => {
    const newLabel = (renameState.value || "").trim();
    if (newLabel.length === 0) {
      setRenameState((s) => ({ ...s, open: false }));
      return;
    }
    if (renameState.type === "rect") {
      const updated = [...rects];
      if (updated[renameState.index]) {
        updated[renameState.index] = {
          ...updated[renameState.index],
          label: newLabel,
        };
        pushState(updated, pathsRef.current, polygonsRef.current);
      }
    } else if (renameState.type === "polygon") {
      const updated = [...polygons];
      if (updated[renameState.index]) {
        updated[renameState.index] = {
          ...updated[renameState.index],
          label: newLabel,
        };
        pushState(rectsRef.current, pathsRef.current, updated);
      }
    }
    setRenameState({ open: false, type: null, index: -1, value: "" });
  };

  const handleDeleteShape = (index, type) => {
    if (type === "rect") {
      const updated = rects.filter((_, i) => i !== index);
      pushState(updated, pathsRef.current, polygonsRef.current);
    } else if (type === "polygon") {
      const updated = polygons.filter((_, i) => i !== index);
      pushState(rectsRef.current, pathsRef.current, updated);
    }
  };

  const handleReset = () => {
    setRects([]);
    setPaths([]);
    setPolygons([]);
    setUndoStack([]);
    setRedoStack([]);
    setCurrentPolygon([]);
    setCurrentPath([]);
    setDrawingRect(null);
    setZoom(1);
    setOffset({ x: 0, y: 0 });
    setRects([]);
    setPaths([]);
    setPolygons([]);
    setUndoStack([]);
    setRedoStack([]);
    setCurrentPolygon([]); // <-- this is key
    setCurrentPath([]);
    setDrawingRect(null);
    setDraggingVertex(null); // also clear any active vertex drag
    setDrawingPath(false);
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

  useEffect(() => {
    const keyHandler = (e) => {
      if (e.ctrlKey && e.key === "z") {
        e.preventDefault();
        handleUndo();
      } else if (
        e.ctrlKey &&
        (e.key === "y" || (e.shiftKey && e.key === "Z"))
      ) {
        e.preventDefault();
        handleRedo();
      }
    };
    window.addEventListener("keydown", keyHandler);
    return () => window.removeEventListener("keydown", keyHandler);
  }, [handleUndo, handleRedo]);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.scale(zoom, zoom);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    const allPaths = drawingPath ? [...paths, currentPath] : paths;
    for (const path of allPaths) {
      if (path.length < 2) continue;
      ctx.strokeStyle = path[0].color;
      ctx.lineWidth = path[0].width * canvasSize.width;
      ctx.beginPath();
      const start = denormalizePoint(path[0]);
      ctx.moveTo(start.x, start.y);
      for (let i = 1; i < path.length; i++) {
        const mid = denormalizePoint({
          x: (path[i - 1].x + path[i].x) / 2,
          y: (path[i - 1].y + path[i].y) / 2,
        });
        const prev = denormalizePoint(path[i - 1]);
        ctx.quadraticCurveTo(prev.x, prev.y, mid.x, mid.y);
      }
      ctx.stroke();
    }
    ctx.restore();
  }, [paths, currentPath, drawingPath, canvasSize, zoom]);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const container = zoomLayerRef.current;
    if (canvas && container) {
      const resize = () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        canvas.width = width;
        canvas.height = height;
        setCanvasSize({ width, height });
      };
      resize();
      window.addEventListener("resize", resize);
      return () => window.removeEventListener("resize", resize);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[1024px] aspect-[16/9] select-none overflow-hidden"
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={endDrawing}
      onTouchStart={startDrawing}
      onTouchMove={draw}
      onTouchEnd={endDrawing}
      onClick={handleClick}
      style={{ cursor: getCursor() }}
    >
      <div className="relative w-full h-full overflow-hidden border border-gray-300">
        <div
          ref={zoomLayerRef}
          className="absolute inset-0 transform origin-top-left"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
          }}
        >
          <Image
            src={imageSrc}
            alt="Annotation"
            fill
            className="object-contain aspect-[16/9]"
          />
          <canvas ref={canvasRef} className="absolute inset-0 z-0" />

          <CanvasShapes
            tool={tool}
            rects={rects}
            drawingRect={drawingRect}
            polygons={polygons}
            currentPolygon={currentPolygon}
            selectedColor={selectedColor}
            denormalizePoint={denormalizePoint}
            normalizePoint={normalizePoint}
            getRelativePoint={getRelativePoint}
            setDraggingShape={setDraggingShape}
            setDraggingVertex={setDraggingVertex}
            ignoreClickRef={ignoreClickRef}
            onEditShape={handleEditShape}
            onDeleteShape={handleDeleteShape}
          />
        </div>
        <EditLabel
          open={renameState.open}
          value={renameState.value}
          onChange={(val) => setRenameState((s) => ({ ...s, value: val }))}
          onCancel={handleRenameCancel}
          onSave={handleRenameSave}
        />
        {showControls && (
          <>
            <div className="absolute top-6 right-6 flex flex-col z-20 text-[#414651]">
              <button
                className="bg-white px-3 py-2 rounded-t-md shadow-md"
                onClick={() => setZoom((z) => Math.min(z + 0.2, 3))}
              >
                <Plus size={20} />
              </button>
              <button
                className="bg-white px-3 py-2 rounded-b-md shadow-md"
                onClick={() => setZoom((z) => Math.max(z - 0.2, 0.5))}
              >
                <Minus size={20} />
              </button>
            </div>
            <div className="absolute top-6 right-24 flex flex-row z-20 text-[#414651]">
              <Tip
                trigger={
                  <button
                    className="bg-white px-3 py-2 rounded-l-md"
                    onMouseDown={(e) => e.stopPropagation()}
                    onClick={(e) => {
                      console.log(e);
                      e.stopPropagation();
                      handleUndo();
                    }}
                  >
                    <Undo size={20} />
                  </button>
                }
                content="Undo"
              ></Tip>
              <Tip
                trigger={
                  <button
                    className="bg-white px-3 py-2"
                    onMouseDown={(e) => e.stopPropagation()}
                    onClick={(e) => {
                      console.log(e);
                      e.stopPropagation();
                      handleRedo();
                    }}
                  >
                    <Redo size={20} />
                  </button>
                }
                content="Redo"
              ></Tip>
              <Tip
                trigger={
                  <button
                    className="bg-white px-3 py-2 rounded-r-md"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleReset();
                    }}
                  >
                    <RotateCcw size={20} />
                  </button>
                }
                content="Reset"
              ></Tip>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
