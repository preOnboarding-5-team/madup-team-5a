import Image from 'next/image';
import { useState } from 'react';

import logo from 'assets/images/Lever_BI 1.png';
import DropButton from 'components/common/DropButton';
import styles from './style.module.scss';

const DUMMY: DropItem[] = [
  {
    color: 'blue',
    title: 'title0',
  },
  {
    color: 'blue',
    title: 'title1',
  },
  {
    color: 'red',
    title: 'title2',
  },
  {
    color: 'darkblue',
    title: 'title3',
  },
  {
    color: 'blue',
    title: 'title4',
  },
  {
    color: '#ababed',
    title: 'title5',
  },
];

const SideNav = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  return (
    <nav className={styles.sideNavWrapper}>
      <header className={styles.sideNavHeader}>
        <picture className={styles.logo}>
          <Image src={logo} />
        </picture>
      </header>
      <main className={styles.sideNavMain}>
        <DropButton
          dropItems={DUMMY}
          larger
          optional
          additional
          setCurrentIdx={setCurrentIdx}
          className={styles.dropButtonTest}
        />
        <DropButton dropItems={DUMMY} setCurrentIdx={setCurrentIdx} />
      </main>
    </nav>
  );
};

export default SideNav;
