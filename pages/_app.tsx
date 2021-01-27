import type { AppProps } from 'next/app'
import '../styles/globals.css';
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  const isProduction = process.env.NODE_ENV === "production";
  return (
    <>
      <Head>
        <title>Inmobiliaria Surmonte | conozca la verdadera calidad del servicio a través de la experiencia de sus
          clientes</title>
        <meta name="description" content="Servicio de la Inmobiliaria Surmonte al desnudo"/>
        <meta name="keywords"
              content="condell54, echeñique46, hl23, candil35, thayer14, ferrer24, lf35, ey32, hda24, wa78, san luis6, capitanes evolución, amudsen evolución, el roble mirador, pocuro miradorpocuro evolución"/>
        <meta name="author" content="nocumple.cl"/>
        <meta name="copyright" content="nocumple.cl"/>
        <meta httpEquiv="cache-control" content="no-cache"/>
        {isProduction && (
          <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-QSX9LNK1C4"/>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag() {dataLayer.push(arguments);}
              gtag('js', new Date());
              
              gtag('config', 'G-QSX9LNK1C4');
            </script>
          </>
        )}
      </Head>
      <Component {...pageProps} />
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
