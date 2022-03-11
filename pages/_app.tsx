import Head from "next/head";
import { AppProps } from 'next/app'
import "../styles/reset.css";

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      <Head>
        <title>Teste</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="" />
        <meta
          name="viewport"
          content="height=device-height,width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no,minimal-ui"
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="referrer" content="origin" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="author" content="" />
        <link rel="canonical" href="" />
        <meta name="rating" content="general" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default App;
