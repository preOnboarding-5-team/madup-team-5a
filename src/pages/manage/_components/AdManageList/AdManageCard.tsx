import { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import cx from 'classnames';

import type { MouseEventHandler } from 'react';
import { dataListAtom } from 'pages/manage/_states/dataList';
import styles from './style.module.scss';

const AdManageCard = ({ card, onClickSelectCard }: AdManageCardProps) => {
  const setDataList = useSetRecoilState(dataListAtom);
  const [isEditing, setIsEditing] = useState(false);

  const handleClickEdit = () => {
    setIsEditing((prev) => !prev);
  };

  useEffect(() => {
    console.log(isEditing);
  }, [isEditing]);

  return (
    <article
      data-id={card.id}
      className={cx(styles.adCard, { [styles.selected]: card.selected })}
      role="presentation"
      onClick={onClickSelectCard}
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
            <input id={styles.status} className={styles.statusInput} value={card.status} readOnly={!isEditing} />
          </li>
          <li className={styles.category}>
            <label htmlFor={styles.startDate} className={styles.startDateLabel}>
              광고 생성일
            </label>
            <input
              id={styles.startDate}
              className={styles.startDateInput}
              value={card.startDate}
              readOnly={!isEditing}
            />
            {card.endDate && <span className={styles.endDate}>({card.endDate})</span>}
          </li>
          <li className={styles.category}>
            <label htmlFor={styles.budget} className={styles.budgetLabel}>
              일 희망 예산
            </label>
            <input id={styles.budget} className={styles.budgetInput} value={card.budget} readOnly={!isEditing} />
          </li>
          <li className={styles.category}>
            <label htmlFor={styles.roas} className={styles.roasLabel}>
              광고 수익률
            </label>
            <input id={styles.roas} className={styles.roasInput} value={card.report.roas} readOnly={!isEditing} />
          </li>
          <li className={styles.category}>
            <label htmlFor={styles.convValue} className={styles.convValueLabel}>
              매출
            </label>
            <input
              id={styles.convValue}
              className={styles.convValueInput}
              value={card.report.convValue}
              readOnly={!isEditing}
            />
          </li>
          <li className={styles.category}>
            <label htmlFor={styles.cost} className={styles.costLabel}>
              광고 비용
            </label>
            <input id={styles.cost} className={styles.costInput} value={card.report.cost} readOnly={!isEditing} />
          </li>
        </ul>
        <button
          aria-label="edit-button"
          type="button"
          onClick={handleClickEdit}
          data-id={card.id}
          className={styles.edit}
        >
          <span className={styles.editText}>수정하기</span>
        </button>
      </form>
    </article>
  );
};

interface AdManageCardProps {
  card: AdManageFormItemsType;
  onClickSelectCard: MouseEventHandler<HTMLElement>;
}

export default AdManageCard;
