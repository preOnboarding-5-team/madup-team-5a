import React, { useEffect, useState } from 'react';

import DropButton from 'components/_common/DropButton';
import dynamic from 'next/dynamic';
import StatusCards from './StatusCards';
import Term from './Term';
import styles from './style.module.scss';
import { categoryAtom, subCategoryAtom } from 'pages/dashboard/_states/dashboard';
import { useRecoilState } from 'recoil';
import { TableKey } from 'pages/dashboard/_utils/convertStatusData';
import { mainDropDown, subDropDown } from './StatusChart/categoryDropDowns';
import useUnit from 'pages/dashboard/_hooks/useUnit';

const StatusChart = dynamic(() => import('./StatusChart/StatusChart'), { ssr: false });

const AdStatus = () => {
  const [category, setCategory] = useRecoilState(categoryAtom);
  const [subCategory, setSubCategory] = useRecoilState(subCategoryAtom);

  const [mainIdx, setMainIdx] = useState(0);
  const [subIdx, setSubIdx] = useState(0);

  const categories: TableKey[] = ['roas', 'cost', 'imp', 'convValue', 'click', 'sales'];

  useEffect(() => {
    if (mainIdx > -1) setCategory(categories[mainIdx]);
    if (subIdx > -1) setSubCategory(categories[subIdx]);
  }, [mainIdx, subIdx]);
  useEffect(() => {
    useUnit(category);
    useUnit(subCategory);
  }, []);

  return (
    <section className={styles.adStatusWrapper}>
      <h2 className={styles.sectionTitle}>통합 광고 현황</h2>
      <div className={styles.adStatus}>
        <ul className={styles.statusCardsWrapper}>
          <StatusCards />
        </ul>
        <div className={styles.selectWrapper}>
          <DropButton dropItems={mainDropDown} setCurrentIdx={setMainIdx} className={styles.dropButton} />
          <DropButton dropItems={subDropDown} setCurrentIdx={setSubIdx} className={styles.dropButton} optional />
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
