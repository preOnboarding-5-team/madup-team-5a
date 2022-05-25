export const options = {
  width: 960,
  height: 400,
  parent: { height: '120%' },
};

export const axisStyle = {
  axis: { stroke: 'transparent' },
  ticks: { stroke: 'transparent' },
  grid: { stroke: 'transparent' },
  tickLabels: { fontSize: 10, padding: 5, fill: '#94a2ad' },
};

export const dependentAxisStyle = {
  axis: { display: 'none' },
  ticks: { display: 'none' },
  tickLabels: { fontSize: 10, fill: '#94a2ad', textAnchor: 'left' },
  grid: { stroke: '#edeff1', strokeDasharray: 0, strokeWidth: 1 },
};
