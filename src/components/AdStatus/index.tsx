import { useState } from 'react';

import dynamic from 'next/dynamic';

import DropButton from 'components/common/DropButton';
import StatusCards from './StatusCards';
import Term from './Term';
// import TestChart from './TestChart';
import styles from './style.module.scss';

const TestChart = dynamic(() => import('./TestChart'), { ssr: false });

const AdStatus = () => {
  const [mainIdx, setMainIdx] = useState(0);
  const [subIdx, setSubIdx] = useState(0);
  const items: DropItem[] = [
    {
      color: '#4FADF7',
      title: 'ROAS',
    },
    {
      color: '#85DA47',
      title: '클릭수',
    },
  ];
  return (
    <section className={styles.adManageMainWrapper}>
      <h1>통합 광고 현황</h1>
      <div className={styles.adManageMain}>
        <ul className={styles.statusCardsWrapper}>
          <StatusCards />
        </ul>
        <div className={styles.selectWrapper}>
          <DropButton dropItems={items} setCurrentIdx={setMainIdx} className={styles.dropButtonWrapper} />
          <DropButton dropItems={items} setCurrentIdx={setSubIdx} className={styles.dropButtonWrapper} optional />
          <Term />
        </div>
        <div className={styles.chartWrapper}>
          <TestChart />
        </div>
      </div>
    </section>
  );
};

export default AdStatus;
