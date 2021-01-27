import Head from "next/head"
import Featured from "../components/featured";
import TopBar from "../components/topbar";
import Phrases from "../components/phrases";
import Footer from "../components/footer";

export default function App() {
  return (
    <div className="app">
      <Head>
        <title>Inmobiliaria Surmonte | conozca la verdadera calidad del servicio a través de la experiencia de sus clientes</title>
        <meta name="description" content="Servicio de la Inmobiliaria Surmonte al desnudo"/>
        <meta name="keywords" content="condell54, echeñique46, hl23, candil35, thayer14, ferrer24, lf35, ey32, hda24, wa78, san luis6, capitanes evolución, amudsen evolución, el roble mirador, pocuro miradorpocuro evolución"/>
        <meta name="author" content="nocumple.cl"/>
        <meta name="copyright" content="nocumple.cl"/>
        <meta httpEquiv="cache-control" content="no-cache"/>
      </Head>
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="flex-1 min-w-0">
          <TopBar/>
          <Featured/>
          <Phrases/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}
