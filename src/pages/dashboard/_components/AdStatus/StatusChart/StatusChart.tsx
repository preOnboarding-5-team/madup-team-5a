import { useEffect, useState } from 'react';
import {
  VictoryAxis,
  VictoryChart,
  VictoryLabel,
  VictoryLine,
  VictoryTheme,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from 'victory';
import { useRecoilValue } from 'recoil';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

import { convertStatusData } from 'pages/dashboard/_utils/convertStatusData';
import { getMax } from 'pages/dashboard/_utils/getMax';
import { datesAtom } from 'pages/dashboard/_states/dashboard';
import TREND_DATA from 'data/wanted_FE_trend-data-set.json';
import { axisStyle, dependentAxisStyle, options } from './statusChartOption';
import styles from './StatusChart.module.scss';
import { mainIdxAtom, subIdxAtom } from 'pages/dashboard/_states/category';
import { categories } from 'pages/dashboard/_constants';
import { useTicks } from 'pages/dashboard/_hooks/useTicks';

const StatusChart = () => {
  const table = convertStatusData(TREND_DATA.report.daily as Daily[]);

  const dates = useRecoilValue(datesAtom);
  const mainIdx = useRecoilValue(mainIdxAtom);
  const subIdx = useRecoilValue(subIdxAtom);

  const [dayOrWeek, setDayOrWeek] = useState(true);
  const [mainData, setMainData] = useState<Data[]>([]);
  const [subData, setSubData] = useState<Data[]>([]);
  const [mainDataRatio, setMainDataRatio] = useState<Data[]>([]);
  const [subDataRatio, setSubDataRatio] = useState<Data[]>([]);
  const [dateList, setDateList] = useState<string[]>([]);

  const getColor = (idx: number) => {
    if (idx < 0) return '';
    const color = {
      roas: '#4FADF7',
      cost: '#85DA47',
      imp: '#541690',
      click: '#A25B5B',
      convValue: '#FF4949',
      sales: '#FFCD38',
    }[categories[idx]];
    return color;
  };

  const getData = (idx: number, date: string | Dayjs) => {
    if (idx < 0) return [];
    return table[categories[idx]].find((data) => dayjs(data.x).isSame(date));
  };
  const diff = dayOrWeek ? dayjs(dates.end).diff(dates.start, 'day') : 7;

  useEffect(() => {
    setDateList([...Array(diff).keys()].map((i) => dayjs(dates.start).add(i, 'day').format('YYYY-MM-DD')));
  }, [dayOrWeek, dates]);
  useEffect(() => {
    setMainData(dateList.map((date) => getData(mainIdx, date) as Data));
    setSubData(dateList.map((date) => getData(subIdx, date) as Data));
  }, [dateList, categories[mainIdx], subIdx]);
  useEffect(() => {
    setMainDataRatio(
      mainData.map(({ x, y, labelq }) => {
        const maxValue = getMax(mainData);
        return { x, labelq, y: maxValue > 0 ? y / maxValue : 0 };
      })
    );

    setSubDataRatio(
      subData.map(({ x, y, labelq }) => {
        const maxValue = getMax(subData);
        return { x, labelq, y: maxValue > 0 ? y / maxValue : 0 };
      })
    );
  }, [mainData, subData]);

  const handleClick = () => {
    setDayOrWeek((prev) => !prev);
  };

  return (
    <section className={styles.chart}>
      <div className={styles.centering}>
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={{ x: [0, 50] }}
          domain={{ y: [0, 1] }}
          animate={{
            onLoad: {
              duration: 500,
            },
          }}
          containerComponent={
            <VictoryVoronoiContainer
              voronoiDimension="x"
              labels={({ datum }) => (datum ? `${datum.childName}:${datum.labelq}` : '')}
              labelComponent={<VictoryTooltip cornerRadius={0} flyoutStyle={{ fill: 'white' }} />}
            />
          }
          {...options}
        >
          <VictoryAxis
            style={axisStyle}
            tickValues={dateList}
            tickFormat={(t) => (diff < 20 ? `${dayjs(t).format('M월D일')}` : ``)}
            offsetX={50}
          />
          <VictoryAxis
            dependentAxis
            tickLabelComponent={<VictoryLabel dx={-30} dy={-10} />}
            orientation="left"
            tickValues={[0.2, 0.4, 0.6, 0.8, 1]}
            tickFormat={(t) => useTicks(t, mainData, mainIdx)}
            style={dependentAxisStyle}
          />
          {categories[subIdx] && (
            <VictoryAxis
              dependentAxis
              orientation="right"
              tickLabelComponent={<VictoryLabel dy={-10} />}
              tickValues={[0.2, 0.4, 0.6, 0.8, 1]}
              tickFormat={(t) => useTicks(t, subData, subIdx)}
              style={dependentAxisStyle}
              offsetX={100}
            />
          )}
          <VictoryLine
            name={categories[mainIdx]}
            style={{
              data: { stroke: `${getColor(mainIdx)}` },
              parent: { border: '2px solid #ccc' },
            }}
            data={mainDataRatio}
          />
          {subIdx !== -1 && (
            <VictoryLine
              name={categories[subIdx]}
              style={{
                data: { stroke: `${getColor(subIdx)}` },
                parent: { border: '2px solid #ccc' },
              }}
              data={subDataRatio}
            />
          )}
        </VictoryChart>
      </div>
      <button onClick={handleClick}>button</button>
    </section>
  );
};
export default StatusChart;
