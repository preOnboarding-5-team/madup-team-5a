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
import { categoryAtom, datesAtom, subCategoryAtom } from 'pages/dashboard/_states/dashboard';
import useUnit from 'pages/dashboard/_hooks/useUnit';
import TRAND_DATA from 'data/wanted_FE_trend-data-set.json';
import { axisStyle, dependentAxisStyle, options } from './statusChartOption';
import styles from './StatusChart.module.scss';

const StatusChart = () => {
  const table = convertStatusData(TRAND_DATA.report.daily as Daily[]);

  //무한리랜더 에러남... 왜지...
  const dates = useRecoilValue(datesAtom);
  const category = useRecoilValue(categoryAtom);
  const subCategory = useRecoilValue(subCategoryAtom);

  const [dayOrWeek, setDayOrWeek] = useState(true);
  const [mainData, setMainData] = useState<Data[]>([]);
  const [subData, setSubData] = useState<Data[]>([]);
  const [mainDataRatio, setMainDataRatio] = useState<Data[]>([]);
  const [subDataRatio, setSubDataRatio] = useState<Data[]>([]);
  const [dateList, setDateList] = useState<string[]>([]);

  const getColor = (category: TableKey) => {
    const color = {
      roas: '#4FADF7',
      cost: '#85DA47',
      imp: '#541690',
      click: '#A25B5B',
      convValue: '#FF4949',
      sales: '#FFCD38',
    }[category];
    return color;
  };

  const getData = (category: TableKey, date: string | Dayjs) => {
    return table[category].find((data) => dayjs(data.x).isSame(date));
  };

  useEffect(() => {
    const diff = dayOrWeek ? dayjs(dates.end).diff(dates.start, 'day') : 7;
    setDateList([...Array(diff).keys()].map((i) => dayjs(dates.start).add(i, 'day').format('YYYY-MM-DD')));
  }, [dayOrWeek, dates]);

  useEffect(() => {
    setMainData(dateList.map((date) => getData(category, date) as Data));
    setSubData(dateList.map((date) => getData(subCategory, date) as Data));
  }, [dateList, category, subCategory]);

  useEffect(() => {
    // const convertedMain: Data[] = JSON.parse(JSON.stringify(mainData));
    // convertedMain.map((data) => (data.y = data.y / getMax(mainData)));

    setMainDataRatio(
      mainData.map(({ x, y, labelq }) => ({
        x,
        labelq,
        y: y / getMax(mainData),
      }))
    );
    setSubDataRatio(
      subData.map(({ x, y, labelq }) => ({
        x,
        labelq,
        y: y / getMax(subData),
      }))
    );
  }, [mainData, subData]);

  // 일별
  // let dailyMainData: Data[] = [];
  // let dailySubData: Data[] = [];

  // for (let i = 0; i < dayjs(dates.end).diff(dates.start, 'day'); i++) {
  //   dailyMainData.push(table[category].find((data) => data.x === date) as Data);
  //   dailySubData.push(table[subCategory].find((data) => data.x === date) as Data);
  // }

  // 1주일치
  // const weekly = [];
  // let weeklyMainData: Data[] = [];
  // let weeklySubData: Data[] = [];

  // for (let i = 0; i < 7; i++) {
  //   weekly.push(dayjs(dates[0]).add(i, 'd').format('YYYY-MM-DD'));
  // }
  // weekly.forEach((date) => {
  //   weeklyMainData.push(table[category].find((data) => data.x === date) as Data);
  //   weeklySubData.push(table[subCategory].find((data) => data.x === date) as Data);
  // });

  // 0과 1값으로 가공처리
  // const convertDailyMain: Data[] = JSON.parse(JSON.stringify(dailyMainData));
  // const convertDailySub: Data[] = JSON.parse(JSON.stringify(dailySubData));
  // const convertWeeklyMain: Data[] = JSON.parse(JSON.stringify(weeklyMainData));
  // const convertWeeklySub: Data[] = JSON.parse(JSON.stringify(weeklySubData));

  // convertDailyMain.map((data) => (data.y = data.y / getMax(dailyMainData)));
  // convertDailySub.map((data) => (data.y = data.y / getMax(dailySubData)));

  // convertWeeklyMain.map((data) => (data.y = data.y / getMax(weeklyMainData)));
  // convertWeeklySub.map((data) => (data.y = data.y / getMax(weeklySubData)));

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
          domainPadding={{ x: [0, 50] }}
          domain={{ y: [0, 1] }}
          animate={{
            onLoad: { duration: 200 },
          }}
          containerComponent={
            <VictoryVoronoiContainer
              voronoiDimension="x"
              labels={({ datum }) => `${category}: ${datum.labelq} ${subCategory}: ${datum.labelq}`}
              labelComponent={<VictoryTooltip cornerRadius={0} flyoutStyle={{ fill: 'white' }} />}
            />
          }
          {...options}
        >
          <VictoryAxis
            style={axisStyle}
            tickValues={dateList}
            tickFormat={(t) => `${dayjs(t).format('M월 D일')}`}
            offsetX={50}
          />
          <VictoryAxis
            dependentAxis
            tickLabelComponent={<VictoryLabel dx={-30} dy={-10} />}
            orientation="left"
            tickValues={[0.2, 0.4, 0.6, 0.8, 1]}
            tickFormat={(t) =>
              `${Math.floor(useSpliceNum(t * getMax(mainData))).toLocaleString('en')}${useUnit(category)}`
            }
            style={dependentAxisStyle}
          />
          {subCategory ? (
            <VictoryAxis
              dependentAxis
              orientation="right"
              tickLabelComponent={<VictoryLabel dy={-10} />}
              tickValues={[0.2, 0.4, 0.6, 0.8, 1]}
              tickFormat={(t) =>
                `${Math.floor(useSpliceNum(t * getMax(subData))).toLocaleString('en')}${useUnit(subCategory)}`
              }
              style={dependentAxisStyle}
              offsetX={100}
            />
          ) : null}
          <VictoryLine
            name="main"
            style={{
              data: { stroke: `${getColor(category)}` },
              parent: { border: '2px solid #ccc' },
            }}
            data={mainDataRatio}
          />
          <VictoryLine
            name="sub"
            style={{
              data: { stroke: `${getColor(subCategory)}` },
              parent: { border: '2px solid #ccc' },
            }}
            data={subDataRatio}
          />
        </VictoryChart>
      </div>
      <button onClick={handleClick}>button</button>
    </section>
  );
};
export default StatusChart;
