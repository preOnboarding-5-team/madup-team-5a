import AdStatus from 'pages/dashboard/_components/AdStatus';
import DatePicker from 'pages/dashboard/_components/DatePicker';
import MediaStatus from 'pages/dashboard/_components/MediaStatus';
import styles from './style.module.scss';

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
