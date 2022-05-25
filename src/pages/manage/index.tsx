import AdManageList from 'pages/manage/_components/AdManageList';
import { ArrowDownIcon } from 'assets/svgs';
import styles from './style.module.scss';

const Manage = () => {
  return (
    <div className={styles.manageWrapper}>
      <header className={styles.title}>
        <h2 className={styles.titleText}>광고관리</h2>
      </header>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.dropDownBox}>
            <button type="button" className={styles.dropDown}>
              <p className={styles.dropDownText}>전체 광고</p>
              <span className={styles.dropDownIcon}>
                <ArrowDownIcon />
              </span>
            </button>
            <button type="button" className={styles.addButton}>
              <p className={styles.addButtonText}>광고 만들기</p>
            </button>
          </div>
          <AdManageList />
        </div>
      </div>
    </div>
  );
};

export default Manage;
