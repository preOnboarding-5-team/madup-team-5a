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
