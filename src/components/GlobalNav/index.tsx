import styles from './style.module.scss';
import { NotifyIcon } from 'assets/svgs';

const GlobalNav = () => {
  return (
    <nav className={styles.globalNavBar}>
      <ul className={styles.contentContainer}>
        <li className={styles.new}></li>
        <li className={styles.notify}>
          <NotifyIcon />
        </li>
        <li className={styles.setting}></li>
        <li className={styles.myPage}>
          {/* <img className={styles.}>
          <p className={styles.}></p> */}
        </li>
      </ul>
      <div className={styles.horizonBar}></div>
    </nav>
  );
};

export default GlobalNav;
