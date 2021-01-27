import React, { useEffect } from "react";
import { AppProps } from 'next/app'
import '../styles/globals.css';
import { GTMPageView } from "../service/gtm";
import { Router } from "next/router";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleRouteChange = (url: string) => GTMPageView(url);
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);
  
  return (
    <>
      <Head>
        <title>Inmobiliaria Surmonte | conozca la verdadera calidad del servicio a través de la experiencia de sus
          clientes</title>
      </Head>
      <Component {...pageProps}/>
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }
