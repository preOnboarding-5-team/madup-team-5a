import Image from 'next/image';

import logo from 'assets/images/Lever_BI 1.png';
import DropButton from 'components/common/DropButton';
import styles from './style.module.scss';

const SideNav = () => {
  return (
    <nav className={styles.sideNavWrapper}>
      <header className={styles.sideNavHeader}>
        <picture className={styles.logo}>
          <Image src={logo} />
        </picture>
      </header>
      <main className={styles.sideNavMain} />
    </nav>
  );
};

export default SideNav;
