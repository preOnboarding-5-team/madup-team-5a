import { NotifyIcon } from 'assets/svgs';
import styles from './style.module.scss';

const GlobalNav = () => {
  return (
    <nav className={styles.globalNavBar}>
      <ul className={styles.contentContainer}>
        <li className={styles.new} />
        <li className={styles.notify}>
          <NotifyIcon />
        </li>
        <li className={styles.setting} />
        <li className={styles.myPage}>
          {/* <img className={styles.}>
          <p className={styles.}></p> */}
        </li>
      </ul>
      <div className={styles.horizonBar} />
    </nav>
  );
};

export default GlobalNav;
