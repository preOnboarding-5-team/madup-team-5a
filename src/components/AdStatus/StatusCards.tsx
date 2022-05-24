import React from 'react';
import { DownPolygon, UpPolygon } from '../../assets/svgs';
import styles from './style.module.scss';

const StatusCards = () => {
  return (
    <>
      <li>
        <div className={styles.leftBox}>
          <h2>ROAS</h2>
          <p className={styles.value}>697%</p>
        </div>
        <div className={styles.rightBox}>
          <DownPolygon />
          <p className={styles.variance}>18%</p>
        </div>
      </li>
      <li>
        <div className={styles.leftBox}>
          <h2>광고비</h2>
          <p className={styles.value}>3,799만 원</p>
        </div>
        <div className={styles.rightBox}>
          <UpPolygon />
          <p className={styles.variance}>232만 원</p>
        </div>
      </li>
      <li>
        <div className={styles.leftBox}>
          <h2>노출 수</h2>
          <p className={styles.value}>971만 회</p>
        </div>
        <div className={styles.rightBox}>
          <UpPolygon />
          <p className={styles.variance}>53만 회</p>
        </div>
      </li>
      <li>
        <div className={styles.leftBox}>
          <h2>클릭수</h2>
          <p className={styles.value}>9.4만 회</p>
        </div>
        <div className={styles.rightBox}>
          <UpPolygon />
          <p className={styles.variance}>1.1만 회</p>
        </div>
      </li>
      <li>
        <div className={styles.leftBox}>
          <h2>전환 수</h2>
          <p className={styles.value}>8,523회</p>
        </div>
        <div className={styles.rightBox}>
          <UpPolygon />
          <p className={styles.variance}>621 회</p>
        </div>
      </li>
      <li>
        <div className={styles.leftBox}>
          <h2>매출</h2>
          <p className={styles.value}>2.6억 원</p>
        </div>
        <div className={styles.rightBox}>
          <UpPolygon />
          <p className={styles.variance}>0.1억 원</p>
        </div>
      </li>
    </>
  );
};

export default StatusCards;
