import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import GlobalNav from 'components/GlobalNav';
import SideNav from 'components/SideNav';

import 'styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <SideNav />
      <GlobalNav />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
