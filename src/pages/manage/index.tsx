import { useRecoilValue, useSetRecoilState } from 'recoil';
// import { useEffect, useState } from 'react';
// import { UPDATED_DATA } from 'data/wanted_FE_ad-list-data-set';

// import { AdManageFormItemsType } from 'types/adManage';

import AdManageList from 'pages/manage/_components/AdManageList';
import DropButton from 'components/_common/DropButton';
import { categories, setMainIdx } from './_states/adManageState';
import styles from './style.module.scss';

const Manage = () => {
  // const [dataList, setDataList] = useState<AdManageFormItemsType[]>([]);
  // const [dropdownIndex, setDropdownIndex] = useRecoilState<number>(setMainIdx);
  const setDropdownIndex = useSetRecoilState<number>(setMainIdx);
  const categoryItem = useRecoilValue<string[]>(categories);

  // useEffect(() => {
  //   UPDATED_DATA[0].selected = true;
  //   setDataList(UPDATED_DATA);
  // }, []);

  // useEffect(() => {
  //   if (dropdownIndex === 0) {
  //     setDataList(UPDATED_DATA);
  //   } else if (dropdownIndex === 1) {
  //     setDataList(
  //       UPDATED_DATA.filter((ad) => {
  //         return ad.status === '진행중';
  //       })
  //     );
  //   } else {
  //     setDataList(
  //       UPDATED_DATA.filter((ad) => {
  //         return ad.status === '종료';
  //       })
  //     );
  //   }
  // }, [dropdownIndex]);

  return (
    <div className={styles.manageWrapper}>
      <header className={styles.title}>
        <h2 className={styles.titleText}>광고관리</h2>
      </header>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.dropDownBox}>
            <DropButton dropItems={categoryItem} setCurrentIdx={setDropdownIndex} className={styles.dropDown} />
            <button type="button" className={styles.addButton} aria-label="create-ad-btn">
              <p className={styles.addButtonText}>광고 만들기</p>
            </button>
          </div>
          <AdManageList />
        </div>
      </div>
    </div>
  );
};

export default Manage;
