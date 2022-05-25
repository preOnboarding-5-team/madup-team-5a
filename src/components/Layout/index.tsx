import { PropsWithChildren } from 'react';

import GlobalNav from '../GlobalNav';
import SideNav from '../SideNav';

import styles from './style.module.scss';

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.wrap}>
      <SideNav />
      <div className={styles.mainWrapper}>
        <GlobalNav />
        <main className={styles.pageWrapper}>{children}</main>
      </div>
    </div>
  );
};

type LayoutProps = PropsWithChildren<{}>;

export default Layout;
