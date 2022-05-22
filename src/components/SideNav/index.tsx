import styles from './style.module.scss';

const SideNav = () => {
  return (
    <nav className={styles.sideNavWrapper}>
      <div className={styles.sideNavHeader}>
        <div className={styles.logo} />
      </div>
    </nav>
  );
};

export default SideNav;
