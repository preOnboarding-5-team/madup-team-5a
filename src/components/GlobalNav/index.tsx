import { NotifyIcon, SettingIcon, ProfileIcon } from '../../assets/svgs';
import styles from './style.module.scss';

const GlobalNav = () => {
  return (
    <nav className={styles.globalNavBar}>
      <ul className={styles.contentContainer}>
        <li className={styles.new} />
        <li className={styles.notify}>
          <button type="button" aria-label="notify_move_icon">
            <NotifyIcon />
          </button>
        </li>
        <li className={styles.setting}>
          <button type="button" aria-label="setting_move_icon">
            <SettingIcon />
          </button>
        </li>
        <li className={styles.myPage}>
          <button type="button" aria-label="profile_move_icon">
            <ProfileIcon />
          </button>
          <button type="button" aria-label="profile_move_button">
            <p className={styles.name}>원티드님</p>
          </button>
        </li>
      </ul>
      <div className={styles.horizonBar} />
    </nav>
  );
};

export default GlobalNav;
