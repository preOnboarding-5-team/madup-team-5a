import { useRecoilValue } from 'recoil';
import {
  VictoryBar,
  VictoryChart,
  VictoryStack,
  VictoryAxis,
  VictoryLegend,
  VictoryLabel,
  VictoryTooltip,
} from 'victory';
import { formatNumber } from 'services/formatNumber';
import { packMediaData } from 'services/packMediaData';
import { datesAtom } from 'pages/dashboard/_states/datesAtom';
import { mediaChannelsAtom } from 'pages/dashboard/_states/mediaChannelsAtom';
import { mediaChartAttributesAtom } from 'pages/dashboard/_states/mediaChartAttributesAtom';
import { colorMapAtom } from 'states/colorMap';

const MediaChart = () => {
  const duration = useRecoilValue(datesAtom);
  const attributes = useRecoilValue(mediaChartAttributesAtom);
  const channels = useRecoilValue(mediaChannelsAtom);
  const colorMap = useRecoilValue(colorMapAtom);

  const data = packMediaData(
    channels.map(({ key }) => key),
    duration.start,
    duration.end
  );

  const bars = channels.map(({ key: chKey }, idx) => {
    const levelData = attributes.map(({ key: attrKey }) => {
      const agg = data.agg[attrKey];
      if (agg === 0) return 1 / channels.length;
      return data.channels[idx][attrKey] / agg;
    });
    return (
      <VictoryBar
        data={levelData}
        style={{ data: { width: 30 } }}
        labels={attributes.map(({ key }) => formatNumber(data.channels[idx][key]))}
        labelComponent={
          <VictoryTooltip
            width={100}
            height={40}
            pointerOrientation="bottom"
            style={{ fill: '#ffffff', width: 100, height: 40 }}
            flyoutStyle={{
              fill: '#3a474e',
            }}
          />
        }
        key={`media-chart-${chKey}`}
      />
    );
  });

  return (
    <VictoryChart
      width={900}
      singleQuadrantDomainPadding={{ x: false }}
      domainPadding={{ x: [110, 80] }}
      padding={{ top: 15, bottom: 100 }}
      style={{ parent: { height: '100%', width: '100%' } }}
    >
      <VictoryAxis
        style={{ axis: { display: 'none' }, tickLabels: { fontSize: 10, fill: '#94a2ad' } }}
        tickValues={attributes.map((_, idx) => idx)}
        tickFormat={attributes.map(({ display }) => display)}
      />
      <VictoryAxis
        dependentAxis
        tickLabelComponent={<VictoryLabel dy={10} />}
        offsetX={12}
        style={{
          axis: { display: 'none' },
          tickLabels: { fontSize: 10, fill: '#94a2ad', textAnchor: 'left' },
          grid: { stroke: '#edeff1', strokeDasharray: 0, strokeWidth: 1 },
        }}
        tickValues={[0, 0.2, 0.4, 0.6, 0.8, 1]}
        tickFormat={(l) => (l > 0 ? `${l * 100}%` : '')}
      />

      <VictoryStack colorScale={colorMap}>{bars}</VictoryStack>
      <VictoryLegend
        x={600}
        y={250}
        gutter={40}
        orientation="horizontal"
        colorScale={colorMap}
        data={channels.map(({ display }) => ({ name: display }))}
        style={{ labels: { fontSize: 12 } }}
      />
    </VictoryChart>
  );
};

export default MediaChart;
