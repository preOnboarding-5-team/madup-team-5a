import { useEffect, useState } from 'react';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryTooltip, VictoryVoronoiContainer } from 'victory';
import dayjs from 'dayjs';

import TRAND_DATA from '../../data/wanted_FE_trend-data-set.json';
import { COLORS } from './statusChartOption';

import styles from './StatusChart.module.scss';
import { ScalePropType } from 'victory-core';
import { Daily } from 'types/trend';
import { convertData } from 'utils/convertStatusData';
import type { TableKey } from 'utils/convertStatusData';

// ROAS, 광고비, 노출수, 클릭수, 전환 수, 매출 중 선택가능.
// 첫 드롭다운에서 선택한 지표를 두번째 드롭다운에서 선택할 수 없으며, 두번재 드롭다운 선택은 옵셔널임
// 주간 일별로 선택가능

const options = {
  width: 960,
  height: 274,
  padding: {
    left: 0,
    top: 0,
    right: 60,
    bottom: 30,
  },
  scale: { x: 'time' as ScalePropType },
};

const StatusChart = () => {
  const table = convertData(TRAND_DATA.report.daily as Daily[]);

  const [dates, setDates] = useState(['2022-02-01', '2022-02-02', '2022-02-03', '2022-02-04']);
  const [category, setCategory] = useState<TableKey>('cost');
  const [dayOrWeek, setDayOrWeek] = useState(true);

  // 1주일치
  const weekly = [];
  let weeklyData: ({ x: string; y: number } | undefined)[] = [];

  for (let i = 0; i < 7; i++) {
    weekly.push(dayjs(dates[0]).add(i, 'd').format('YYYY-MM-DD'));
  }

  weekly.forEach((date) => {
    weeklyData.push(table[category].find((data) => data.x === date));
  });
  console.log(weeklyData);

  // 일별
  let dailyData: ({ x: string; y: number } | undefined)[] = [];

  dates.forEach((date) => {
    dailyData.push(table[category].find((data) => data.x === date));
  });

  const handleClick = () => {
    setDayOrWeek((prev) => !prev);
  };

  return (
    <section className={styles.chart}>
      <div className={styles.centering}>
        <VictoryChart
          theme={VictoryTheme.material}
          containerComponent={
            <VictoryVoronoiContainer
              voronoiDimension="x"
              labels={({ datum }) => `${datum.childName}: ${datum.y}`}
              labelComponent={<VictoryTooltip cornerRadius={0} flyoutStyle={{ fill: 'white' }} />}
            />
          }
          {...options}
        >
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
            data={dayOrWeek ? dailyData : weeklyData}
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
            data={[
              { x: '2022-02-01', y: 6 },
              { x: '2022-02-02', y: 4 },
            ]}
          />
        </VictoryChart>
      </div>
      <button onClick={handleClick}>button</button>
    </section>
  );
};
export default StatusChart;
