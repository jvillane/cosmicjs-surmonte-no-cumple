import Featured from "../components/featured";
import Title from "../components/title";
import NavBar from "../components/navbar";
import Experiences from "../components/experiences" ;
import { Experience, Phrase } from "../service/Cosmic.model";
import { CosmicService } from "../service/Cosmic.service";
import { GetStaticProps, NextPage } from "next";
import ContactUs from "../components/contactus";

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
  }
  catch (err) {
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
          <div className="relative bg-white">
            <NavBar/>
            <Title/>
            <Featured phrases={phrases}/>
            <Experiences experiences={experiences} length={3}/>
            <ContactUs/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index;
