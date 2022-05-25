import { NotifyIcon, SettingIcon, ProfileIcon } from '../../assets/svgs';
import styles from './style.module.scss';

const GlobalNav = () => {
  return (
    <nav className={styles.globalNavBar}>
      <ul className={styles.contentContainer}>
        <li className={styles.new} />
        <li className={styles.notify}>
          <button type="button">
            <NotifyIcon />
          </button>
        </li>
        <li className={styles.setting}>
          <button type="button">
            <SettingIcon />
          </button>
        </li>
        <li className={styles.myPage}>
          <button type="button">
            <ProfileIcon />
          </button>
          <button type="button">
            <p className={styles.name}>원티드님</p>
          </button>
        </li>
      </ul>
      <div className={styles.horizonBar} />
    </nav>
  );
};

export default GlobalNav;
