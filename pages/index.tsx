import Featured from "../components/featured";
import TopBar from "../components/topbar";
import Phrases from "../components/phrases";
import Footer from "../components/footer";
import { Phrase } from "../service/Cosmic.model";
import { CosmicService } from "../service/Cosmic.service";
import { GetStaticProps, NextPage } from "next";

interface Props {
  phrases?: Phrase[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const phrases = await CosmicService.getObjects<Phrase>({ type: 'phrases' });
    return {
      props: { phrases }
    }
  } catch (err) {
    return {
      props: {}
    }
  }
}

const Index: NextPage<Props> = ({phrases}: Props) => {
  return (
    <div className="app">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="flex-1 min-w-0">
          <TopBar/>
          <Featured/>
          <Phrases phrases={phrases}/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Index;
