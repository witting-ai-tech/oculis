const markers = [
  { time: 10, text: "Intro", color: "#FF6900" },
  { time: 35, text: "Checkpoint 1", color: "#00d084" },
  { time: 55, text: "Important scene", color: "#FF6900" },
  { time: 100, text: "Important scene", color: "#4c00ffff" },
];

const rects = [
  {
    time: 10,
    start: {
      x: 0.13228962519397475,
      y: 0.24425086576348815,
    },
    end: {
      x: 0.4551859069943661,
      y: 0.6972125382373557,
    },
    label: "apple",
    color: "#FF6900",
  },
  {
    time: 35,
    start: {
      x: 0.5810945283121137,
      y: 0.37738358525109134,
    },
    end: {
      x: 0.8335820905011685,
      y: 0.6567627426790292,
    },
    label: "cat",
    color: "#FF6900",
  },
  {
    time: 55,
    start: {
      x: 0.47288557308823315,
      y: 0.10909090232426205,
    },
    end: {
      x: 0.6208955233369894,
      y: 0.1955654034329095,
    },
    label: "tree",
    color: "#00d084",
  },
  {
    time: 100,
    start: {
      x: 0.5810945283121137,
      y: 0.37738358525109134,
    },
    end: {
      x: 0.8335820905011685,
      y: 0.6567627426790292,
    },
    label: "cat",
    color: "#00d084",
  },
];

const zones = [
  {
    id: "assembly-line",
    name: "Assembly Line",
    cams: ["Camera - 01", "Camera - 02", "Camera - 03", "Camera - 04", "Camera - 05"],
  },
  {
    id: "packaging-area",
    name: "Packaging Area",
    cams: ["Camera - 01", "Camera - 02", "Camera - 03", "Camera - 04", "Camera - 05"],
  },
  {
    id: "warehouse",
    name: "Warehouse",
    cams: ["Camera - 01", "Camera - 02", "Camera - 03", "Camera - 04", "Camera - 05"],
  },
  {
    id: "loading-bay",
    name: "Loading Bay",
    cams: ["Camera - 01", "Camera - 02", "Camera - 03", "Camera - 04", "Camera - 05"],
  },
];

export { markers, rects, zones };
