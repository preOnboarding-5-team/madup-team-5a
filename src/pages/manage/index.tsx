import { MouseEvent, useEffect, useState } from 'react';

import { AdManageFormItemsType } from 'types/adManage';
import { UPDATED_DATA } from 'data/wanted_FE_ad-list-data-set';
import AD_DATA from 'data/wanted_FE_ad-list-data-set.json';

import cx from 'classnames';

import { ArrowDownIcon } from 'assets/svgs';
import styles from './style.module.scss';

const Manage = () => {
  // const { ads } = AD_DATA; 광고 만들기용 원본 데이터
  const [dataList, setDataList] = useState<AdManageFormItemsType[] | []>([]);

  useEffect(() => {
    setDataList(UPDATED_DATA);
  }, []);

  const grids: string[] = new Array(7).fill('line');
  const gridLine = grids.map((line, idx) => {
    const key = `gird-line-${idx + 1}`;
    return <div key={key} className={cx(styles.line, styles[line + (idx + 1)])} />;
  });

  const onClickAdCard = (e: MouseEvent<HTMLDivElement>) => {
    const { id } = e.currentTarget.dataset;
    setDataList((prev) => {
      const targetIndex = prev.findIndex((data) => data.id === Number(id));
      const newList = dataList.map((data) => {
        data.selected = false;
        return { ...data };
      });
      newList[targetIndex].selected = true;
      return newList;
    });
  };

  const createAdCard = dataList.map((card) => {
    const key = `ad-card-${card.id}`;

    return (
      <div
        data-id={card.id}
        key={key}
        className={cx(styles.adCard, { [styles.selected]: card.selected })}
        role="presentation"
        onClick={onClickAdCard}
      >
        <form className={styles.adForm}>
          <legend className={styles.formTitle}>
            <h3>{card.adType}</h3>
          </legend>
          <ul className={styles.table}>
            <li className={styles.category}>
              <label htmlFor={styles.status} className={styles.statusLabel}>
                상태
              </label>
              <input id={styles.status} className={styles.statusInput} value={card.status} readOnly />
            </li>
            <li className={styles.category}>
              <label htmlFor={styles.startDate} className={styles.startDateLabel}>
                광고 생성일
              </label>
              <input id={styles.startDate} className={styles.startDateInput} value={card.startDate} readOnly />
              {card.endDate && <span className={styles.endDate}>({card.endDate})</span>}
            </li>
            <li className={styles.category}>
              <label htmlFor={styles.budget} className={styles.budgetLabel}>
                일 희망 예산
              </label>
              <input id={styles.budget} className={styles.budgetInput} value={card.budget} readOnly />
            </li>
            <li className={styles.category}>
              <label htmlFor={styles.roas} className={styles.roasLabel}>
                광고 수익률
              </label>
              <input id={styles.roas} className={styles.roasInput} value={card.report.roas} readOnly />
            </li>
            <li className={styles.category}>
              <label htmlFor={styles.convValue} className={styles.convValueLabel}>
                매출
              </label>
              <input id={styles.convValue} className={styles.convValueInput} value={card.report.convValue} readOnly />
            </li>
            <li className={styles.category}>
              <label htmlFor={styles.cost} className={styles.costLabel}>
                광고 비용
              </label>
              <input id={styles.cost} className={styles.costInput} value={card.report.cost} readOnly />
            </li>
          </ul>
          <button type="button" className={styles.edit}>
            <span className={styles.editText}>수정하기</span>
          </button>
          {gridLine}
        </form>
      </div>
    );
  });

  return (
    <div className={styles.manageWrapper}>
      <header className={styles.title}>
        <h2 className={styles.titleText}>광고관리</h2>
      </header>
      <main className={styles.main}>
        <div className={styles.container}>
          <button type="button" className={styles.dropDown}>
            <p className={styles.dropDownText}>전체 광고</p>
            <span className={styles.dropDownIcon}>
              <ArrowDownIcon />
            </span>
          </button>
          <button type="button" className={styles.addButton}>
            <p className={styles.addButtonText}>광고 만들기</p>
          </button>
          {createAdCard}
        </div>
      </main>
    </div>
  );
};

export default Manage;
