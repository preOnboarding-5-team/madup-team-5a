import { useCallback, useEffect, useState } from 'react';
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

import { datesAtom, dayOrWeeklyAtom } from 'pages/dashboard/_states/dashboard';
import { mainIdxAtom, subIdxAtom } from 'pages/dashboard/_states/category';
import TREND_DATA from 'data/wanted_FE_trend-data-set.json';

import { categories } from 'pages/dashboard/_constants';
import { convertStatusData } from 'pages/dashboard/_utils/convertStatusData';
import { getMax } from 'pages/dashboard/_utils/getMax';
import { getTick } from 'pages/dashboard/_utils/getTick';
import { axisStyle, dependentAxisStyle, options } from './statusChartOption';

import styles from './style.module.scss';

const StatusChart = () => {
  const table = convertStatusData(TREND_DATA.report.daily as Daily[]);

  const dates = useRecoilValue(datesAtom);
  const mainIdx = useRecoilValue(mainIdxAtom);
  const subIdx = useRecoilValue(subIdxAtom);
  const dayOrWeekly = useRecoilValue(dayOrWeeklyAtom);

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

  const getData = useCallback(
    (idx: number, date: string | Dayjs) => {
      if (idx < 0) return [];
      return table[categories[idx]].find((data) => dayjs(data.x).isSame(date));
    },
    [table]
  );

  const diff = dayOrWeekly ? dayjs(dates.end).diff(dates.start, 'day') + 1 : 7;

  useEffect(() => {
    setDateList([...Array(diff).keys()].map((i) => dayjs(dates.start).add(i, 'day').format('YYYY-MM-DD')));
  }, [dayOrWeekly, dates, diff]);

  useEffect(() => {
    setMainData(dateList.map((date) => getData(mainIdx, date) as Data));
    setSubData(dateList.map((date) => getData(subIdx, date) as Data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateList, mainIdx, subIdx]);

  useEffect(() => {
    setMainDataRatio(
      mainData.map(({ x, y, labelq, name }) => {
        const maxValue = getMax(mainData);
        return { x, name, labelq, y: maxValue > 0 ? y / maxValue : 0 };
      })
    );

    setSubDataRatio(
      subData.map(({ x, y, labelq, name }) => {
        const maxValue = getMax(subData);
        return { x, labelq, name, y: maxValue > 0 ? y / maxValue : 0 };
      })
    );
  }, [mainData, subData]);

  return (
    <section className={styles.chart}>
      <div className={styles.centering}>
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={{ x: [0, 50] }}
          domain={{ y: [0, 1] }}
          containerComponent={
            <VictoryVoronoiContainer
              voronoiDimension="x"
              labels={({ datum }) => (datum ? `${datum.name}: ${datum.labelq}` : '')}
              labelComponent={
                <VictoryTooltip cornerRadius={0} flyoutWidth={120} flyoutHeight={40} flyoutStyle={{ fill: 'white' }} />
              }
            />
          }
          {...options}
        >
          <VictoryAxis
            style={axisStyle}
            tickValues={dateList}
            tickFormat={(t) => (diff < 20 ? `${dayjs(t).format('M월D일')}` : ``)}
            offsetY={50}
          />
          <VictoryAxis
            dependentAxis
            tickLabelComponent={<VictoryLabel dx={-30} dy={-10} />}
            orientation="left"
            tickValues={[0, 1 / 6, 2 / 6, 3 / 6, 4 / 6, 5 / 6, 1]}
            tickFormat={(t) => (t === 0 ? '' : getTick(t, mainData, mainIdx))}
            style={dependentAxisStyle}
          />
          {categories[subIdx] && (
            <VictoryAxis
              dependentAxis
              orientation="right"
              tickLabelComponent={<VictoryLabel dy={-10} />}
              tickValues={[0, 1 / 6, 2 / 6, 3 / 6, 4 / 6, 5 / 6, 1]}
              tickFormat={(t) => (t === 0 ? '' : getTick(t, subData, subIdx))}
              style={dependentAxisStyle}
              offsetX={100}
            />
          )}
          <VictoryLine
            name={categories[mainIdx]}
            style={{
              labels: { fontSize: '12px', fill: `${getColor(mainIdx)}` },
              data: { stroke: `${getColor(mainIdx)}` },
              parent: { border: '3px solid #ccc' },
            }}
            data={mainDataRatio}
          />
          {subIdx !== -1 && (
            <VictoryLine
              name={categories[subIdx]}
              style={{
                labels: { fontSize: '12px', fill: `${getColor(subIdx)}` },
                data: { stroke: `${getColor(subIdx)}` },
                parent: { border: '2px solid #ccc' },
              }}
              data={subDataRatio}
            />
          )}
        </VictoryChart>
      </div>
    </section>
  );
};
export default StatusChart;
