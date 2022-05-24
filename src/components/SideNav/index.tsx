import Image from 'next/image';
import { useState } from 'react';

import logo from 'assets/images/Lever_BI 1.png';
import { GuideIcon, Circle } from 'assets/svgs';
import DropButton from 'components/common/DropButton';
import AdCenter from './AdCenter';
import styles from './style.module.scss';

const DUMMY: DropItem[] = [
  {
    title: '매드업',
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
        <section className={styles.service}>
          <h1 className={styles.title}>서비스</h1>
          <DropButton
            dropItems={DUMMY}
            larger
            additional
            setCurrentIdx={setCurrentIdx}
            className={styles.serviceDropButton}
          />
        </section>
        <AdCenter />
        <section className={styles.guide}>
          <Circle className={styles.circle} />
          <GuideIcon className={styles.guideIcon} />
          <h1 className={styles.guideTitle}>레버 이용 가이드</h1>
          <a href="#" className={styles.guideLink}>
            시작하기 전에 알아보기
          </a>
        </section>
        <p className={styles.copywrite}>레버는 함께 만들어 갑니다.</p>
        <a href="#" className={styles.tosLink}>
          이용약관
        </a>
      </main>
    </nav>
  );
};

export default SideNav;
