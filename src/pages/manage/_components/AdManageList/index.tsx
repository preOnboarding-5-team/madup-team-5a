import { Dispatch, MouseEvent, SetStateAction } from 'react';

import AdManageCard from './AdManageCard';
import styles from './style.module.scss';

interface Props {
  dataList: AdManageFormItemsType[];
  setDataList: Dispatch<SetStateAction<AdManageFormItemsType[]>>;
}

const AdManageList = ({ dataList, setDataList }: Props) => {
  const onClickSelectCard = (e: MouseEvent<HTMLDivElement>) => {
    const { id } = e.currentTarget.dataset;
    setDataList((prev) => {
      const targetIndex = prev.findIndex((data) => data.id === Number(id));
      const newList = dataList.map((data) => ({ ...data, selected: false }));
      newList[targetIndex].selected = true;
      return newList;
    });
  };

  return (
    <section className={styles.adCardContainer}>
      {dataList.map((card) => (
        <AdManageCard card={card} onClickSelectCard={onClickSelectCard} key={`ad-card-${card.id}`} />
      ))}
    </section>
  );
};

export default AdManageList;
