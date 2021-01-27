import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  
  render() {
    const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
    
    return (
      <Html lang="es-CL">
        <Head>
          <meta charSet='utf-8'/>
          <meta name="description" content="Servicio de la Inmobiliaria Surmonte al desnudo"/>
          <meta name="keywords"
                content="condell54, echeñique46, hl23, candil35, thayer14, ferrer24, lf35, ey32, hda24, wa78, san luis6, capitanes evolución, amudsen evolución, el roble mirador, pocuro miradorpocuro evolución"/>
          <meta name="author" content="nocumple.cl"/>
          <meta name="copyright" content="nocumple.cl"/>
          <meta httpEquiv="cache-control" content="no-cache"/>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    );
  }
}
