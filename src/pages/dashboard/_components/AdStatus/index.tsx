import React, { useEffect, useState } from 'react';

import DropButton from 'components/_common/DropButton';
import dynamic from 'next/dynamic';
import StatusCards from './StatusCards';
import Term from './Term';
import styles from './style.module.scss';
import { categoryAtom } from 'pages/dashboard/_states/dashboard';
import { useRecoilState } from 'recoil';
import { TableKey } from 'pages/dashboard/_utils/convertStatusData';

const StatusChart = dynamic(() => import('./StatusChart/StatusChart'), { ssr: false });

const AdStatus = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [category, setCategory] = useRecoilState(categoryAtom);
  const categories: TableKey[] = ['roas', 'cost', 'imp', 'convValue', 'sales'];

  useEffect(() => {
    if (currentIdx > -1) setCategory(categories[currentIdx]);
  }, [currentIdx]);

  const [mainIdx, setMainIdx] = useState(0);
  const [subIdx, setSubIdx] = useState(0);

  const items: DropItem[] = [
    {
      color: '#4FADF7',
      title: 'ROAS',
    },
    {
      color: '#85DA47',
      title: '광고비',
    },
    {
      color: '#541690',
      title: '노출수',
    },
    {
      color: '#FF4949',
      title: '전환수',
    },
    {
      color: '#FFCD38',
      title: '매출',
    },
  ];

  return (
    <section className={styles.adStatusWrapper}>
      <h2 className={styles.sectionTitle}>통합 광고 현황</h2>
      <div className={styles.adStatus}>
        <ul className={styles.statusCardsWrapper}>
          <StatusCards />
        </ul>
        <div className={styles.selectWrapper}>
          <DropButton dropItems={items} setCurrentIdx={setMainIdx} className={styles.dropButton} />
          <DropButton dropItems={items} setCurrentIdx={setSubIdx} className={styles.dropButton} optional />
          <Term />
        </div>
        <div className={styles.chartWrapper}>
          <StatusChart />
        </div>
      </div>
    </section>
  );
};

export default AdStatus;
