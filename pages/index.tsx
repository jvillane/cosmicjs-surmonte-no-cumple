import Featured from "../components/featured";
import Title from "../components/title";
import NavBar from "../components/navbar";
import Experiences from "../components/experiences" ;
import { Experience, Phrase } from "../service/Cosmic.model";
import { CosmicService } from "../service/Cosmic.service";
import { GetStaticProps, NextPage } from "next";
import ContactUs from "../components/contactus";
import Findings from "../components/findings";

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
    <>
      <div className="bg-white">
        <div className="relative overflow-hidden">
          <NavBar/>
          <Title/>
          <Findings/>
          <Featured phrases={phrases}/>
          <Experiences experiences={experiences} length={3}/>
          <ContactUs/>
        </div>
      </div>
    </>
  )
}

export default Index;
