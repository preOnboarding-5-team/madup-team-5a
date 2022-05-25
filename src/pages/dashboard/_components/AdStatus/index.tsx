import { useRecoilState } from 'recoil';
import dynamic from 'next/dynamic';

import DropButton from 'components/_common/DropButton';
import { mainIdxAtom, subIdxAtom } from 'pages/dashboard/_states/category';

import Term from './Term';
import StatusCards from './StatusCards';
import { mainDropDown, subDropDown } from './StatusChart/categoryDropDowns';
import styles from './style.module.scss';

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
