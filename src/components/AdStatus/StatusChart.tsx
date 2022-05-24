import { useEffect, useState } from 'react';
import { VictoryAxis, VictoryChart, VictoryLine, VictoryTheme, VictoryTooltip, VictoryVoronoiContainer } from 'victory';
import dayjs from 'dayjs';

import TRAND_DATA from '../../data/wanted_FE_trend-data-set.json';
import { COLORS } from './statusChartOption';

import styles from './StatusChart.module.scss';
import { ScalePropType } from 'victory-core';
import { Daily } from 'types/trend';
import { convertData } from 'utils/convertStatusData';
import type { TableKey, Data } from 'utils/convertStatusData';

// ROAS, 광고비, 노출수, 클릭수, 전환 수, 매출 중 선택가능.
// 첫 드롭다운에서 선택한 지표를 두번째 드롭다운에서 선택할 수 없으며, 두번재 드롭다운 선택은 옵셔널임
// 주간 일별로 선택가능

const options = {
  width: 960,
  height: 300,
  padding: {
    left: 60,
    top: 10,
    right: 60,
    bottom: 30,
  },
  scale: { x: 'time' as ScalePropType },
};

// const categories: TableKey[] = ['click' ,'imp' ,'cost' ,'conv' , 'ctr']

const StatusChart = () => {
  const table = convertData(TRAND_DATA.report.daily as Daily[]);

  const [dates, setDates] = useState(['2022-02-01', '2022-02-02', '2022-02-03', '2022-02-04']);
  const [category, setCategory] = useState<TableKey>('cost');
  const [subCategory, setSubCategory] = useState<TableKey>('conv');
  // const [category, setCategory] = useState(0);
  // const [subCategory, setSubCategory] = useState(0);
  const [dayOrWeek, setDayOrWeek] = useState(true);

  // 1주일치
  const weekly = [];
  let weeklyMainData: Data[] = [];
  let weeklySubData: Data[] = [];

  for (let i = 0; i < 7; i++) {
    weekly.push(dayjs(dates[0]).add(i, 'd').format('YYYY-MM-DD'));
  }
  console.log(weekly);
  weekly.forEach((date) => {
    weeklyMainData.push(table[category].find((data) => data.x === date) as Data);
    weeklySubData.push(table[subCategory].find((data) => data.x === date) as Data);
  });

  // setWeeklyMData(weeklyMainData)

  // 일별
  let dailyMainData: Data[] = [];
  let dailySubData: Data[] = [];
  dates.forEach((date) => {
    dailyMainData.push(table[category].find((data) => data.x === date) as Data);
    dailySubData.push(table[subCategory].find((data) => data.x === date) as Data);
  });

  const getMax = (arr: { x: string; y: number }[]) => {
    return Math.max(...arr.map((d) => d.y));
  };

  const handleClick = () => {
    setDayOrWeek((prev) => !prev);
  };

  return (
    <section className={styles.chart}>
      <div className={styles.centering}>
        <VictoryChart
          theme={VictoryTheme.material}
          // domain={{ y: [0, 1] }}
          containerComponent={
            <VictoryVoronoiContainer
              voronoiDimension="x"
              labels={({ datum }) => `${datum.childName}: ${datum.y}`}
              labelComponent={<VictoryTooltip cornerRadius={0} flyoutStyle={{ fill: 'white' }} />}
            />
          }
          {...options}
        >
          <VictoryAxis tickValues={dayOrWeek ? dates : weekly} />
          <VictoryAxis
            dependentAxis
            orientation="left"
            // tickValues={[0.25, 0.5, 0.75, 1]}
            // tickFormat={(t) =>
            // dayOrWeek ? t * Math.floor(getMax(dailyMainData)) : t * Math.floor(getMax(weeklyMainData))
            // }
          />
          <VictoryAxis
            dependentAxis
            orientation="right"
            // tickValues={[0.25, 0.5, 0.75, 1]}
            // tickFormat={(t) =>
            // dayOrWeek ? t * Math.floor(getMax(dailySubData)) : t * Math.floor(getMax(weeklySubData))
            // }
          />

          <VictoryLine
            name="main"
            // animate={{
            //   duration: 300,
            //   onLoad: { duration: 300 },
            // }}
            style={{
              data: { stroke: COLORS.YELLOW },
              parent: { border: '1px solid #ccc' },
            }}
            data={dayOrWeek ? dailyMainData : weeklyMainData}
          />
          {/* 옵셔널 그래프 */}
          <VictoryLine
            name="sub"
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 },
            }}
            style={{
              data: { stroke: COLORS.ORANGE },
              parent: { border: '1px solid #ccc' },
            }}
            data={dayOrWeek ? dailySubData : weeklySubData}
          />
        </VictoryChart>
      </div>
      <button onClick={handleClick}>button</button>
    </section>
  );
};
export default StatusChart;
