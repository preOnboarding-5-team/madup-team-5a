import Image from 'next/image';
import { useState } from 'react';

import logo from 'assets/images/Lever_BI 1.png';
import DropButton from 'components/common/DropButton';
import styles from './style.module.scss';

const DUMMY: DropItem[] = [
  {
    color: 'blue',
    title: '항목 없음',
  },
  {
    title: '제목',
  },
  {
    color: 'red',
    title: '항목 없음',
  },
  {
    color: 'blue',
    title: '항목 없음',
  },
  {
    title: '제목',
  },
  {
    color: 'red',
    title: '항목 없음',
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
        <DropButton dropItems={DUMMY} currentIdx={currentIdx} setCurrentIdx={setCurrentIdx} />
        <DropButton dropItems={DUMMY} larger currentIdx={currentIdx} setCurrentIdx={setCurrentIdx} optional />
      </main>
    </nav>
  );
};

export default SideNav;
