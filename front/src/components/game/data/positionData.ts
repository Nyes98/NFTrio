import Iposition from "../../../interfaces/Position.interface";

const xBase = 10;
const yBase = 45;
const positionConfig: Array<Iposition> = [
  { x: xBase + 20, y: yBase + 20 },
  { x: xBase + 10, y: yBase + 10 },
  { x: xBase + 10, y: yBase + 30 },
  { x: xBase + 0, y: yBase + 0 },
  { x: xBase + 0, y: yBase + 20 },
  { x: xBase + 0, y: yBase + 40 },
];

const MxBase = 70;
const MyBase = 35;
const MpositionConfig: Array<Iposition> = [
  { x: MxBase - 10, y: MyBase + 10, m: true },
  { x: MxBase - 10, y: MyBase + 30, m: true },
  { x: MxBase + 0, y: MyBase + 0, m: true },
  { x: MxBase + 0, y: MyBase + 20, m: true },
  { x: MxBase + 0, y: MyBase + 40, m: true },
  { x: MxBase + 10, y: MyBase - 10, m: true },
  { x: MxBase + 10, y: MyBase + 10, m: true },
  { x: MxBase + 10, y: MyBase + 30, m: true },
  { x: MxBase + 10, y: MyBase + 50, m: true },
];

export { positionConfig, MpositionConfig };
