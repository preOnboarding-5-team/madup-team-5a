import { NotifyIcon, SettingIcon, Profile } from 'assets/svgs';
import styles from './style.module.scss';

const GlobalNav = () => {
  return (
    <nav className={styles.globalNavBar}>
      <ul className={styles.contentContainer}>
        <li className={styles.new} />
        <li className={styles.notify}>
          <NotifyIcon />
        </li>
        <li className={styles.setting}>
          <SettingIcon />
        </li>
        <li className={styles.myPage}>
          <Profile />
          <p className={styles.name}>원티드님</p>
        </li>
      </ul>
      <div className={styles.horizonBar} />
    </nav>
  );
};

export default GlobalNav;
