import AdStatus from 'pages/dashboard/_components/AdStatus';
import MediaStatus from 'pages/dashboard/_components/MediaStatus';
import dynamic from 'next/dynamic';
import styles from './style.module.scss';

const StatusChart = dynamic(() => import('pages/dashboard/_components/AdStatus/StatusChart/StatusChart'), {
  ssr: false,
});

const DashBoard = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>대시보드</h1>
        <div className={styles.datePicker}>Date Picker</div>
      </header>
      <AdStatus />
      <MediaStatus />
    </div>
  );
};

export default DashBoard;
