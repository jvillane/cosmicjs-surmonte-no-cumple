import Featured from "../components/featured";
import TopBar from "../components/topbar";
import Experiences from "../components/experiences";
import { Experience, Phrase } from "../service/Cosmic.model";
import { CosmicService } from "../service/Cosmic.service";
import { GetStaticProps, NextPage } from "next";
import GetInTouch from "../components/getintouch";

interface Props {
  experiences?: Experience[]
  phrases?: Phrase[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const experiences = await CosmicService.getObjects<Experience>({ type: 'experiences' });
    const phrases = await CosmicService.getObjects<Phrase>({ type: 'phrases' });
    return {
      props: { experiences, phrases }
    }
  } catch (err) {
    return {
      props: {}
    }
  }
}

const Index: NextPage<Props> = ({experiences, phrases}) => {
  return (
    <div className="app">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="flex-1 min-w-0">
          <TopBar/>
          <Featured phrases={phrases}/>
          <Experiences experiences={experiences}/>
          <GetInTouch/>
        </div>
      </div>
    </div>
  )
}

export default Index;
