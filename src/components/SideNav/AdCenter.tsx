import cx from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { DashBoardIcon, ManageIcon } from 'assets/svgs';
import styles from './style.module.scss';

const AdCenter = () => {
  const router = useRouter();
  return (
    <section className={styles.adCenter}>
      <h1 className={styles.title}>광고 센터</h1>

      <Link href="/dashboard">
        <a href="/dashboard" className={cx({ [styles.active]: router.pathname === '/dashboard' })}>
          <DashBoardIcon />
          대시보드
        </a>
      </Link>
      <Link href="/manage">
        <a href="/manage" className={cx({ [styles.active]: router.pathname === '/manage' })}>
          <ManageIcon />
          광고관리
        </a>
      </Link>
    </section>
  );
};

export default AdCenter;
