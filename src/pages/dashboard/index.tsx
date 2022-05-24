import AdStatus from 'components/AdStatus';
import MediaStatus from 'components/MediaStatus';
import styles from './style.module.scss';

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
