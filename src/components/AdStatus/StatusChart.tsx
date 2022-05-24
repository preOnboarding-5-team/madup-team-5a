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
    top: 60,
    right: 60,
    bottom: 30,
  },
  scale: { x: 'time' as ScalePropType },
};

// const categories: TableKey[] = ['click' ,'imp' ,'cost' ,'conv' , 'ctr']

const StatusChart = () => {
  const table = convertData(TRAND_DATA.report.daily as Daily[]);

  const [dates, setDates] = useState(['2022-02-01', '2022-02-02', '2022-02-03', '2022-02-04']);
  const [category, setCategory] = useState<TableKey>('imp');
  const [subCategory, setSubCategory] = useState<TableKey>('conv');
  // const [category, setCategory] = useState(0);
  // const [subCategory, setSubCategory] = useState(0);
  const [dayOrWeek, setDayOrWeek] = useState(true);

  const getMax = (arr: { x: string; y: number }[]) => {
    return Math.max(...arr.map((d) => d.y));
  };

  // 일별
  let dailyMainData: Data[] = [];
  let dailySubData: Data[] = [];

  dates.forEach((date) => {
    dailyMainData.push(table[category].find((data) => data.x === date) as Data);
    // convertDailyMain.push(table[category].find((data) => data.x === date) as Data);

    dailySubData.push(table[subCategory].find((data) => data.x === date) as Data);
    // convertDailySub.push(table[subCategory].find((data) => data.x === date) as Data);
  });

  // 1주일치
  const weekly = [];
  let weeklyMainData: Data[] = [];
  let weeklySubData: Data[] = [];

  for (let i = 0; i < 7; i++) {
    weekly.push(dayjs(dates[0]).add(i, 'd').format('YYYY-MM-DD'));
  }
  weekly.forEach((date) => {
    weeklyMainData.push(table[category].find((data) => data.x === date) as Data);
    weeklySubData.push(table[subCategory].find((data) => data.x === date) as Data);
  });

  // 0과 1값으로 가공처리
  const convertDailyMain: Data[] = JSON.parse(JSON.stringify(dailyMainData));
  const convertDailySub: Data[] = JSON.parse(JSON.stringify(dailySubData));
  const convertWeeklyMain: Data[] = JSON.parse(JSON.stringify(weeklyMainData));
  const convertWeeklySub: Data[] = JSON.parse(JSON.stringify(weeklySubData));

  convertDailyMain.map((data) => (data.y = data.y / getMax(dailyMainData)));
  convertDailySub.map((data) => (data.y = data.y / getMax(dailySubData)));

  convertWeeklyMain.map((data) => (data.y = data.y / getMax(weeklyMainData)));
  convertWeeklySub.map((data) => (data.y = data.y / getMax(weeklyMainData)));
  // console.log(weeklySubData);
  // console.log(convertWeeklySub);
  // console.log(getMax(weeklySubData));
  // console.log(37 / 84);

  const handleClick = () => {
    setDayOrWeek((prev) => !prev);
  };

  return (
    <section className={styles.chart}>
      <div className={styles.centering}>
        <VictoryChart
          theme={VictoryTheme.material}
          domain={{ y: [0, 1] }}
          containerComponent={
            <VictoryVoronoiContainer
              voronoiDimension="x"
              labels={({ datum }) => `${datum.childName}: ${datum.y}`}
              labelComponent={<VictoryTooltip cornerRadius={0} flyoutStyle={{ fill: 'white' }} />}
            />
          }
          {...options}
        >
          <VictoryAxis tickValues={dayOrWeek ? dates : weekly} tickFormat={(t) => `${dayjs(t).format('M월 D일')}`} />
          <VictoryAxis
            dependentAxis
            orientation="left"
            tickValues={[0.25, 0.5, 0.75, 1]}
            tickFormat={(t) =>
              dayOrWeek ? `${Math.floor(t * getMax(dailyMainData))}` : Math.floor(t * getMax(weeklyMainData))
            }
          />
          <VictoryAxis
            dependentAxis
            orientation="right"
            tickValues={[0.25, 0.5, 0.75, 1]}
            tickFormat={(t) =>
              dayOrWeek ? Math.floor(t * getMax(dailySubData)) : Math.floor(t * getMax(weeklySubData))
            }
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
            data={dayOrWeek ? convertDailyMain : convertWeeklyMain}
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
            data={dayOrWeek ? convertDailySub : convertWeeklySub}
          />
        </VictoryChart>
      </div>
      <button onClick={handleClick}>button</button>
    </section>
  );
};
export default StatusChart;
