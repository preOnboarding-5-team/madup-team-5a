import { useRecoilState } from 'recoil';
import dynamic from 'next/dynamic';

import DropButton from 'components/_common/DropButton';
import { mainIdxAtom } from 'components/Dashboard/_states/mainIdxAtom';
import { subIdxAtom } from 'components/Dashboard/_states/subIdxAtom';

import TermButton from './TermButton';
import StatusCards from './StatusCards';
import styles from './style.module.scss';
import { mainDropDown, subDropDown } from './StatusChart/dropDownCategories';

const StatusChart = dynamic(() => import('./StatusChart'), { ssr: false });

const AdStatus = () => {
  const [mainIdx, setMainIdx] = useRecoilState(mainIdxAtom);
  const [subIdx, setSubIdx] = useRecoilState(subIdxAtom);

  return (
    <section className={styles.adStatusWrapper}>
      <h2 className={styles.sectionTitle}>통합 광고 현황</h2>
      <div className={styles.adStatus}>
        <StatusCards />
        <div className={styles.selectWrapper}>
          <DropButton
            dropItems={mainDropDown}
            setCurrentIdx={setMainIdx}
            className={styles.dropButton}
            disabledIdx={[subIdx]}
          />
          <DropButton
            dropItems={subDropDown}
            setCurrentIdx={setSubIdx}
            className={styles.dropButton}
            disabledIdx={[mainIdx]}
            optional
          />
          <TermButton />
        </div>
        <div className={styles.chartWrapper}>
          <StatusChart />
        </div>
      </div>
    </section>
  );
};

export default AdStatus;
