import dynamic from 'next/dynamic';
import styles from './style.module.scss';
import MediaGrid from './MediaGrid';

const MediaChart = dynamic(() => import('./MediaChart'), { ssr: false });

const MediaStatus = () => {
  return (
    <section className={styles.wrapper}>
      <header className={styles.title}>
        <h2 className={styles.sectionTitle}>매체 현황</h2>
      </header>
      <div className={styles.sectionBody}>
        {/* <div className={styles.sectionBodyInner}> */}
        <div className={styles.chart}>
          <MediaChart />
        </div>
        <MediaGrid />
        {/* </div> */}
      </div>
    </section>
  );
};

export default MediaStatus;
