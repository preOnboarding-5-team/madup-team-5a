import AdStatus from './_components/AdStatus';
import DatePicker from './_components/DatePicker';
import MediaStatus from './_components/MediaStatus';
// import dynamic from 'next/dynamic';
import styles from './style.module.scss';

// const StatusChart = dynamic(() => import('components/AdStatus/StatusChart'), { ssr: false });

const DashBoard = () => {
  return (
    <div className={styles.dashboardWrapper}>
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
