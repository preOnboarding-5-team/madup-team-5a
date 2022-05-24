import styles from './style.module.scss';
// import sStatusChart from 'components/AdStatus/StatusChart';
import dynamic from 'next/dynamic';

const StatusChart = dynamic(() => import('components/AdStatus/StatusChart'), { ssr: false });

const DashBoard = () => {
  return (
    <div className={styles.wrapper}>
      dashboard page
      <StatusChart />
    </div>
  );
};

export default DashBoard;
