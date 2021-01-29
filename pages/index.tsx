import Featured from "../components/featured";
import TopBar from "../components/topbar";
import Experiences from "../components/experiences";
import Footer from "../components/footer";
import { Experience } from "../service/Cosmic.model";
import { CosmicService } from "../service/Cosmic.service";
import { GetStaticProps, NextPage } from "next";

interface Props {
  experiences?: Experience[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const experiences = await CosmicService.getObjects<Experience>({ type: 'experiences' });
    return {
      props: { experiences }
    }
  } catch (err) {
    return {
      props: {}
    }
  }
}

const Index: NextPage<Props> = ({experiences}: Props) => {
  return (
    <div className="app">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="flex-1 min-w-0">
          <TopBar/>
          <Featured/>
          <Experiences experiences={experiences}/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Index;
