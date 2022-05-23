import styles from './style.module.scss';
import StatusChart from 'components/AdStatus/StatusChart';

const DashBoard = () => {
  return (
    <div className={styles.wrapper}>
      dashboard page
      <StatusChart />
    </div>
  );
};

export default DashBoard;
