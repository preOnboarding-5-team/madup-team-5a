import { useState } from 'react';
import { VictoryAxis, VictoryChart, VictoryLine, VictoryTheme, VictoryTooltip, VictoryVoronoiContainer } from 'victory';
import { useRecoilState, useRecoilValue } from 'recoil';
import dayjs from 'dayjs';

import { Daily } from 'types/adTrend';

import { convertData } from 'pages/dashboard/_utils/convertStatusData';
import type { Data } from 'pages/dashboard/_utils/convertStatusData';
import { getMax } from 'pages/dashboard/_utils/getMax';
import { categoryAtom, subCategoryAtom } from 'pages/dashboard/_states/dashboard';
import useUnit from 'pages/dashboard/_hooks/useUnit';
import TRAND_DATA from 'data/wanted_FE_trend-data-set.json';
import { axisStyle, dependentAxisStyle, mainLineStyle, options, subLineStyle } from './statusChartOption';
import styles from './style.module.scss';

const StatusChart = () => {
  const table = convertData(TRAND_DATA.report.daily as Daily[]);

  // 무한리랜더 에러남... 왜지...
  const [dates, setDates] = useState(['2022-02-01', '2022-02-02', '2022-02-03', '2022-02-04']);

  const category = useRecoilValue(categoryAtom);
  const [subCategory, setSubCategory] = useRecoilState(subCategoryAtom);
  const [dayOrWeek, setDayOrWeek] = useState(true);

  // 일별
  const dailyMainData: Data[] = [];
  const dailySubData: Data[] = [];

  console.log(table[category]);

  dates.forEach((date) => {
    dailyMainData.push(table[category].find((data) => data.x === date) as Data);
    dailySubData.push(table[subCategory].find((data) => data.x === date) as Data);
  });

  // 1주일치
  const weekly = [];
  const weeklyMainData: Data[] = [];
  const weeklySubData: Data[] = [];

  for (let i = 0; i < 7; i += 1) {
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

  convertDailyMain.map((data) => (data.y /= getMax(dailyMainData)));
  convertDailySub.map((data) => (data.y /= getMax(dailySubData)));

  convertWeeklyMain.map((data) => (data.y /= getMax(weeklyMainData)));
  convertWeeklySub.map((data) => (data.y /= getMax(weeklySubData)));

  const handleClick = () => {
    setDayOrWeek((prev) => !prev);
  };
  const useSpliceNum = (n: number): number => {
    if (category !== 'roas') {
      const nString = n.toString();
      const sliced = nString.slice(-1, -5);
      const slicedNum = Number(sliced);
      return n / 10 ** slicedNum;
    }
    return n;
  };

  return (
    <section className={styles.chart}>
      <div className={styles.centering}>
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={{ x: [100, 100] }}
          domain={{ y: [0, 1] }}
          animate={{
            onLoad: { duration: 1000 },
          }}
          containerComponent={
            <VictoryVoronoiContainer
              voronoiDimension="x"
              labels={({ datum }) => `${datum.childName}: ${datum.labelq}`}
              labelComponent={<VictoryTooltip cornerRadius={0} flyoutStyle={{ fill: 'white' }} />}
            />
          }
          {...options}
        >
          <VictoryAxis
            style={axisStyle}
            tickValues={dayOrWeek ? dates : weekly}
            tickFormat={(t) => `${dayjs(t).format('M월 D일')}`}
            offsetX={50}
          />
          <VictoryAxis
            dependentAxis
            orientation="left"
            tickValues={[0.2, 0.4, 0.6, 0.8, 1]}
            tickFormat={(t) =>
              dayOrWeek
                ? `${Math.floor(useSpliceNum(t * getMax(dailyMainData)))}${useUnit(category)}`
                : `${Math.floor(useSpliceNum(t * getMax(weeklyMainData)))}${useUnit(category)}`
            }
            style={dependentAxisStyle}
            offsetX={50}
          />
          <VictoryAxis
            dependentAxis
            orientation="right"
            tickValues={[0.2, 0.4, 0.6, 0.8, 1]}
            tickFormat={(t) =>
              dayOrWeek
                ? `${Math.floor(useSpliceNum(t * getMax(dailySubData)))}${useUnit(category)}`
                : `${Math.floor(useSpliceNum(t * getMax(weeklySubData)))}${useUnit(category)}`
            }
            style={dependentAxisStyle}
            offsetX={100}
          />
          <VictoryLine name="main" style={mainLineStyle} data={dayOrWeek ? convertDailyMain : convertWeeklyMain} />
          <VictoryLine name="sub" style={subLineStyle} data={dayOrWeek ? convertDailySub : convertWeeklySub} />
        </VictoryChart>
      </div>
      <button onClick={handleClick}>button</button>
    </section>
  );
};
export default StatusChart;
