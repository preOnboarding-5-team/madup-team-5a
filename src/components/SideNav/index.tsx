import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import cx from 'classnames';

import DropButton from 'components/_common/DropButton';
import { currentServiceIdxAtom, serviceListAtom } from 'states/serviceType';

import { GuideIcon, Circle, DashBoardIcon, ManageIcon } from 'assets/svgs';

import styles from './style.module.scss';

const SideNav = () => {
  const [services, setServices] = useRecoilState(serviceListAtom);
  const [, setServiceIdx] = useRecoilState(currentServiceIdxAtom);
  const router = useRouter();

  return (
    <aside className={styles.sideNavWrapper}>
      <header className={styles.sideNavHeader}>
        <Link href="/">
          <picture className={styles.logo}>
            <Image src="/images/Lever_BI1.png" alt="LEVER" />
          </picture>
        </Link>
      </header>
      <ul className={styles.sideNavMain}>
        <li className={styles.service}>
          <p className={styles.title}>서비스</p>
          <DropButton
            larger
            additional
            dropItems={services}
            setDropItems={setServices}
            setCurrentIdx={setServiceIdx}
            className={styles.serviceDropButton}
          />
        </li>
        <li className={styles.adCenter}>
          <p className={styles.title}>광고 센터</p>
          <Link href="/dashboard">
            <div className={cx(styles.pageButton, { [styles.active]: router.pathname === '/dashboard' })}>
              <DashBoardIcon />
              대시보드
            </div>
          </Link>
          <Link href="/manage">
            <div className={cx(styles.pageButton, { [styles.active]: router.pathname === '/manage' })}>
              <ManageIcon />
              광고관리
            </div>
          </Link>
        </li>
        <li className={styles.guide}>
          <Circle className={styles.guideCircle} />
          <GuideIcon className={styles.guideIcon} />
          <p className={styles.guideTitle}>레버 이용 가이드</p>
          <Link href="#">
            <p className={styles.guideLink}>시작하기 전에 알아보기</p>
          </Link>
        </li>
        <li>
          <p className={styles.copywrite}>레버는 함께 만들어 갑니다.</p>
          <Link href="#">
            <p className={styles.tosLink}>이용약관</p>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideNav;
