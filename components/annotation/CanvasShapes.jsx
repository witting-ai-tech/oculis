import { useState } from "react";
import { Trash2, Pen, MoreHorizontal } from "lucide-react";
import Pop from "./../Pop";

export default function CanvasShapes({
  tool,
  rects,
  polygons,
  drawingRect,
  currentPolygon,
  selectedColor,
  denormalizePoint,
  normalizePoint,
  getRelativePoint,
  setDraggingShape,
  setDraggingVertex,
  ignoreClickRef,
  onEditShape,
  onDeleteShape,
}) {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  return (
    <svg className="absolute inset-0 pointer-events-none z-10 w-full h-full">
      {/* Rectangles */}
      {rects.map((r, i) => {
        const start = denormalizePoint(r.start);
        const end = denormalizePoint(r.end);
        const x = Math.min(start.x, end.x);
        const y = Math.min(start.y, end.y);
        const width = Math.abs(start.x - end.x);
        const height = Math.abs(start.y - end.y);

        return (
          <g key={`rect-${i}`}>
            <rect
              x={x}
              y={y}
              width={width}
              height={height}
              stroke={r.color}
              fill={`${r.color}33`}
              strokeWidth={2}
              pointerEvents="all"
              onMouseDown={(e) => {
                if (tool === "move") {
                  e.stopPropagation();
                  const pt = normalizePoint(getRelativePoint(e));
                  setDraggingShape({ type: "rect", index: i, start: pt });
                }
              }}
            />
            {/* Label */}
            <foreignObject x={x} y={y - 24} width={140} height={24}>
              <div
                className="flex items-center gap-2 px-2 py-0.5 rounded text-sm"
                style={{
                  backgroundColor: r.color,
                  color: "#fff",
                  width: "fit-content",
                }}
              >
                <span className="truncate max-w-[100px] font-medium">
                  {r.label || `Zone ${i + 1}`}
                </span>
                <Pop
                  trigger={
                    <div
                      className="pointer-events-auto"
                      onClick={(e) => {
                        setOpenMenuIndex(
                          openMenuIndex === `rect-${i}` ? null : `rect-${i}`
                        );
                      }}
                    >
                      <MoreHorizontal size={16} />
                    </div>
                  }
                >
                  <div
                    className="p-2 text-sm cursor-pointer text-[#181d27]"
                    onClick={() => {
                      onEditShape(i, "rect");
                      setOpenMenuIndex(null);
                    }}
                  >
                    <Pen size={16} className="inline mr-2 text-[#717680]" />
                    Rename
                  </div>
                  <div
                    className="p-2 text-sm cursor-pointer"
                    onClick={() => {
                      onDeleteShape(i, "rect");
                      setOpenMenuIndex(null);
                    }}
                  >
                    <Trash2 size={16} className="inline mr-2 text-[#717680]" />
                    Delete
                  </div>
                </Pop>
              </div>
            </foreignObject>
          </g>
        );
      })}

      {/* Polygons */}
      {polygons.map((poly, idx) => (
        <g key={`poly-${idx}`}>
          <polygon
            points={poly.points
              .map((p) => {
                const pt = denormalizePoint(p);
                return `${pt.x},${pt.y}`;
              })
              .join(" ")}
            fill={`${poly.color}33`}
            stroke={poly.color}
            strokeWidth={2}
            pointerEvents="all"
            onMouseDown={(e) => {
              if (tool === "move") {
                e.stopPropagation();
                const pt = normalizePoint(getRelativePoint(e));
                setDraggingShape({ type: "polygon", index: idx, start: pt });
              }
            }}
          />
          {poly.points.map((pt, i) => {
            const { x, y } = denormalizePoint(pt);
            return (
              <circle
                key={`poly-${idx}-pt-${i}`}
                cx={x}
                cy={y}
                r={4}
                fill={poly.color}
                stroke="#fff"
                strokeWidth={1}
                pointerEvents="all"
                onMouseDown={(e) => {
                  e.stopPropagation();
                  ignoreClickRef.current = true;
                  setDraggingVertex({ polygonIndex: idx, vertexIndex: i });
                }}
              />
            );
          })}
          {/* Polygon Label */}
          {poly.points.length > 0 &&
            (() => {
              const { x, y } = denormalizePoint(poly.points[0]);
              return (
                <foreignObject x={x} y={y - 24} width={140} height={24}>
                  <div
                    className="flex items-center gap-1 px-2 py-0.5 rounded text-sm"
                    style={{
                      backgroundColor: poly.color,
                      color: "#fff",
                      width: "fit-content",
                    }}
                  >
                    <span className="truncate max-w-[100px]">
                      {poly.label || `Zone ${idx + 1}`}
                    </span>
                    <Pop
                      trigger={
                        <div
                          className="pointer-events-auto"
                          onMouseDown={(e) => {
                            e.stopPropagation(); // ✅ Prevent event bubbling
                            ignoreClickRef.current = true; // ✅ Prevent polygon point on label/menu click
                          }}
                          onClick={(e) => {
                            setOpenMenuIndex(
                              openMenuIndex === `poly-${idx}`
                                ? null
                                : `poly-${idx}`
                            );
                          }}
                        >
                          <MoreHorizontal size={16} />
                        </div>
                      }
                    >
                      <div
                        className="p-2 text-sm cursor-pointer text-[#181d27]"
                        onClick={() => {
                          onEditShape(idx, "polygon");
                          setOpenMenuIndex(null);
                        }}
                      >
                        <Pen size={16} className="inline mr-2 text-[#717680]" />
                        Rename
                      </div>
                      <div
                        className="p-2 text-sm cursor-pointer"
                        onClick={() => {
                          onDeleteShape(idx, "polygon");
                          setOpenMenuIndex(null);
                        }}
                      >
                        <Trash2
                          size={16}
                          className="inline mr-2 text-[#717680]"
                        />
                        Delete
                      </div>
                    </Pop>
                  </div>
                </foreignObject>
              );
            })()}
        </g>
      ))}

      {/* Polygon being drawn */}
      {currentPolygon.length > 1 && (
        <polyline
          points={currentPolygon
            .map((p) => {
              const pt = denormalizePoint(p);
              return `${pt.x},${pt.y}`;
            })
            .join(" ")}
          fill="none"
          stroke={selectedColor}
          strokeWidth={2}
        />
      )}
      {currentPolygon.map((pt, i) => {
        const { x, y } = denormalizePoint(pt);
        return (
          <circle
            key={`dot-${i}`}
            cx={x}
            cy={y}
            r={4}
            fill={selectedColor}
            stroke="#fff"
            strokeWidth={1}
          />
        );
      })}

      {/* Drawing Rect Preview */}
      {drawingRect &&
        (() => {
          const start = denormalizePoint(drawingRect.start);
          const end = denormalizePoint(drawingRect.end);
          return (
            <rect
              x={Math.min(start.x, end.x)}
              y={Math.min(start.y, end.y)}
              width={Math.abs(start.x - end.x)}
              height={Math.abs(start.y - end.y)}
              stroke={drawingRect.color}
              fill="none"
              strokeDasharray="4"
              strokeWidth={2}
            />
          );
        })()}
    </svg>
  );
}
