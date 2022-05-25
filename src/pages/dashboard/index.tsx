import AdStatus from 'components/AdStatus';
import DatePicker from 'components/DatePicker';
import MediaStatus from 'components/MediaStatus';
// import dynamic from 'next/dynamic';
import styles from './style.module.scss';

// const StatusChart = dynamic(() => import('components/AdStatus/StatusChart'), { ssr: false });

const DashBoard = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>대시보드</h1>
        <DatePicker />
      </header>
      <AdStatus />
      <MediaStatus />
    </div>
  );
};

export default DashBoard;
