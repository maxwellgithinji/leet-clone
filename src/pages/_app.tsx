import '@/styles/global.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <Head>
      <title>LeetClone</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Web application that contains leetcode problems and video solutions"
      />
    </Head>
    <Component {...pageProps} />
  </RecoilRoot>
);

export default MyApp;
