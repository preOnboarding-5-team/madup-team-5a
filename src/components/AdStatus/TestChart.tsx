import { VictoryChart, VictoryLine, VictoryAxis, VictoryLabel, VictoryTheme, VictoryVoronoiContainer } from 'victory';

const ROAS = [
  { date: '11월 11일', value: 100 },
  { date: '11월 12일', value: 120 },
  { date: '11월 13일', value: 130 },
  { date: '11월 14일', value: 110 },
  { date: '11월 15일', value: 160 },
  { date: '11월 16일', value: 100 },
  { date: '11월 17일', value: 100 },
];

const CLICKS = [
  { date: '11월 11일', value: 90 },
  { date: '11월 12일', value: 60 },
  { date: '11월 13일', value: 70 },
  { date: '11월 14일', value: 88 },
  { date: '11월 15일', value: 96 },
  { date: '11월 16일', value: 80 },
  { date: '11월 17일', value: 81 },
];

const TestChart = () => {
  const options = {
    width: 960,
    height: 240,
  };
  return (
    <VictoryChart
      domainPadding={30}
      theme={VictoryTheme.material}
      containerComponent={<VictoryVoronoiContainer voronoiDimension="x" />}
      {...options}
    >
      <VictoryAxis
        style={{
          axis: { stroke: 'transparent' },
          ticks: { stroke: 'transparent' },
          grid: { stroke: 'transparent' },
          tickLabels: { fontSize: 12, padding: 5, fill: '#94a2ad' },
        }}
      />
      <VictoryAxis
        dependentAxis
        orientation="left"
        tickLabelComponent={<VictoryLabel dy={7} style={{ fontSize: 12, fill: '#94a2ad', textAnchor: 'end' }} />}
        style={{
          axis: { stroke: 'transparent' },
          ticks: { stroke: 'transparent' },
          grid: { stroke: '#edeff1', strokeDasharray: 0, strokeWidth: 1 },
        }}
        offsetX={50}
      />
      <VictoryAxis
        dependentAxis
        orientation="right"
        tickLabelComponent={<VictoryLabel dy={7} style={{ fontSize: 12, fill: '#94a2ad', textAnchor: 'end' }} />}
        style={{
          axis: { stroke: 'transparent' },
          ticks: { stroke: 'transparent' },
          grid: { stroke: '#edeff1', strokeDasharray: 0, strokeWidth: 1 },
        }}
        offsetX={50}
      />

      <VictoryLine
        name="ROAS"
        style={{
          data: { stroke: '#4FADF7' },
          parent: { border: '1px solid #ccc' },
        }}
        x="date"
        y="value"
        data={ROAS}
      />
      <VictoryLine
        name="CLICKS"
        style={{
          data: { stroke: '#85DA47' },
          parent: { border: '1px solid #ccc' },
        }}
        x="date"
        y="value"
        data={CLICKS}
      />
    </VictoryChart>
  );
};

export default TestChart;
