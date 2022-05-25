import { ScalePropType } from 'victory-core';

export const options = {
  width: 960,
  height: 240,
};

export const axisStyle = {
  axis: { stroke: 'transparent' },
  ticks: { stroke: 'transparent' },
  grid: { stroke: 'transparent' },
  tickLabels: { fontSize: 12, padding: 5, fill: '#94a2ad' },
};

export const dependentAxisStyle = {
  axis: { stroke: 'transparent' },
  ticks: { stroke: 'transparent' },
  grid: { stroke: '#edeff1', strokeDasharray: 0, strokeWidth: 1 },
};

export const mainLineStyle = {
  data: { stroke: '#4FADF7' },
  parent: { border: '1px solid #ccc' },
};

export const subLineStyle = {
  data: { stroke: '#85DA47' },
  parent: { border: '1px solid #ccc' },
};

// import dayjs from "dayjs";

// const start = dayjs("2022-02-01");
// const end = dayjs("2022-02-10");
// const diff = start.diff(end, "day");
// const dates = [];

// for (let i = 0; i < -diff; i++) {
//   dates.push(dayjs(start).add(i, "d").format("YYYY-MM-DD"));
// }

// console.log(dates);
