import { useRecoilValue } from 'recoil';

import { DownPolygon, UpPolygon } from 'assets/svgs';

import TREND_DATA from 'data/wanted_FE_trend-data-set.json';

import { comparedDates } from 'components/Dashboard/_utils/comparedDates';
import { convertCardData } from 'components/Dashboard/_utils/convertCardData';
import { datesAtom } from 'components/Dashboard/_states/datesAtom';

import styles from './style.module.scss';

const StatusCards = () => {
  const dates = useRecoilValue(datesAtom);

  const lastDates = comparedDates(dates.start, dates.end);
  const table = convertCardData(TREND_DATA.report.daily as Daily[], dates.start, dates.end);
  const lastTable = convertCardData(TREND_DATA.report.daily as Daily[], lastDates[lastDates.length - 1], lastDates[0]);

  type CardCategory = {
    key: keyof CardTable;
    display: string;
    unit: string;
  };

  const categories: CardCategory[] = [
    {
      key: 'roas',
      display: 'ROAS',
      unit: '%',
    },
    {
      key: 'cost',
      display: '광고비',
      unit: '만 원',
    },
    {
      key: 'imp',
      display: '노출 수',
      unit: '회',
    },
    {
      key: 'click',
      display: '클릭 수',
      unit: '회',
    },
    {
      key: 'convValue',
      display: '전환 수',
      unit: '회',
    },
    {
      key: 'sale',
      display: '매출',
      unit: '만 원',
    },
  ];

  return (
    <ul className={styles.statusCardsWrapper}>
      {categories.map(({ key, display, unit }) => {
        const diff = table[key] - lastTable[key];
        const polygon = (() => {
          if (diff > 0) return <UpPolygon />;
          if (diff < 0) return <DownPolygon />;
          return '-';
        })();
        return (
          <li key={`cardList-${key}`}>
            <div className={styles.leftBox}>
              <p className={styles.category}>{display}</p>
              <p className={styles.value}>{`${Math.floor(table[key]).toLocaleString('en')}${unit}`}</p>
            </div>
            <div className={styles.rightBox}>
              {polygon}
              <p className={styles.variance}>{`${Math.floor(Math.abs(diff)).toLocaleString('en')}${unit}`}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default StatusCards;
