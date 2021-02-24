import React from 'react';
import NavBar from '../../components/navbar';
import Experiences from "../../components/experiences";
import { GetStaticProps, NextPage } from "next";
import { CosmicService } from "../../service/Cosmic.service";
import { Experience, Phrase } from "../../service/Cosmic.model";
import ContactUs from "../../components/contactus";

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

const SurmonteExperiences: NextPage<Props> = ({experiences}) => {
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="flex-1 min-w-0">
        <div className="relative bg-white">
          <NavBar/>
          <Experiences experiences={experiences}/>
          <ContactUs/>
        </div>
      </div>
    </div>
  );
}

export default SurmonteExperiences;
