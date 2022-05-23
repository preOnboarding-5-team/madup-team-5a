import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import Layout from 'components/Layout';

import 'styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
};

export default MyApp;
