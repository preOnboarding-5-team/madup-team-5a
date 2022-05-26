import { useRecoilState, useRecoilValue } from 'recoil';
import { MouseEvent, useEffect } from 'react';
import { UPDATED_DATA } from 'pages/manage/_utils/data';

import AdManageList from 'pages/manage/_components/AdManageList';
import DropButton from 'components/_common/DropButton';
import { categories, setCategoryIdx } from './_states/adManageState';
import styles from './style.module.scss';
import CreateAd from './_components/CreateAd';
import { dataListAtom } from './_states/dataListAtom';

const Manage = () => {
  const [dataList, setDataList] = useRecoilState(dataListAtom);
  const [dropdownIndex, setDropdownIndex] = useRecoilState<number>(setCategoryIdx);
  const categoryItem = useRecoilValue<string[]>(categories);

  useEffect(() => {
    if (dropdownIndex === 0) {
      setDataList(UPDATED_DATA);
    } else if (dropdownIndex === 1) {
      setDataList(
        UPDATED_DATA.filter((ad) => {
          return ad.status === '진행중';
        })
      );
    } else {
      setDataList(
        UPDATED_DATA.filter((ad) => {
          return ad.status === '종료';
        })
      );
    }
  }, [dropdownIndex, setDataList]);

  const onClickCreateAdd = (e: MouseEvent<HTMLButtonElement>) => {};

  return (
    <div className={styles.manageWrapper}>
      <header className={styles.title}>
        <h2 className={styles.titleText}>광고관리</h2>
      </header>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.dropDownBox}>
            <DropButton dropItems={categoryItem} setCurrentIdx={setDropdownIndex} className={styles.dropDown} />
            <button type="button" className={styles.addButton} aria-label="create-ad-btn" onClick={onClickCreateAdd}>
              <p className={styles.addButtonText}>광고 만들기</p>
            </button>
          </div>
          <AdManageList dataList={dataList} setDataList={setDataList} />
        </div>
      </div>
      <CreateAd />
    </div>
  );
};

export default Manage;
