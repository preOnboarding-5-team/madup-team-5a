import { MouseEvent, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { adListDataState } from 'pages/manage/_states/adManage';
import { UPDATED_DATA } from 'data/wanted_FE_ad-list-data-set';

import { AdManageFormItemsType } from 'types/adManage';

import cx from 'classnames';

import styles from './style.module.scss';

const AdManageList = () => {
  const [dataList, setDataList] = useRecoilState<AdManageFormItemsType[] | []>(adListDataState);

  useEffect(() => {
    setDataList(UPDATED_DATA);
  }, []);

  // const grids: string[] = new Array(7).fill('line');
  // const gridLine = grids.map((line, idx) => {
  //   const key = `gird-line-${idx + 1}`;
  //   return <div key={key} className={cx(styles.line, styles[line + (idx + 1)])} />;
  // });

  const onClickAdCard = (e: MouseEvent<HTMLDivElement>) => {
    const { id } = e.currentTarget.dataset;
    setDataList((prev) => {
      const targetIndex = prev.findIndex((data) => data.id === Number(id));
      const newList = dataList.map((data) => {
        return { ...data, selected: false };
      });
      newList[targetIndex].selected = true;
      return newList;
    });
  };

  const onClickEditAd = (e: MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget.dataset;
  };

  const adCards = dataList.map((card) => {
    const key = `ad-card-${card.id}`;

    return (
      <article
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
          <button type="button" data-id={card.id} className={styles.edit} onClick={onClickEditAd}>
            <span className={styles.editText}>수정하기</span>
          </button>
        </form>
      </article>
    );
  });

  return <section className={styles.adCardContainer}>{adCards}</section>;
};

export default AdManageList;