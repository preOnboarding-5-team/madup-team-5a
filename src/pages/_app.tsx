import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { useEffect, useState } from 'react';

import Router from 'next/router';
import Layout from 'components/Layout';
import Loading from 'components/_common/Loading';

import 'styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      clearTimeout();
    };

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  return (
    <RecoilRoot>
      <Head>
        <title>MADUP</title>
      </Head>
      <Layout>{loading ? <Loading loading={loading} /> : <Component {...pageProps} />}</Layout>
    </RecoilRoot>
  );
};

export default MyApp;
