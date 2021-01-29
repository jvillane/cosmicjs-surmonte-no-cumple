import { GetStaticProps, NextPage } from "next";
import ErrorPage from 'next/error'
import { CosmicService } from "../../service/Cosmic.service";
import { Experience } from "../../service/Cosmic.model";

export const getStaticPaths = async () => {
  const experiences = await CosmicService.getObjects<{ slug: string }>({ type: 'experiences', props: 'slug' });
  return {
    paths: experiences.map(e => `/experiencia/${e.slug}`),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<{ experience?: Experience }, { slug: string }> = async ({ params }) => {
  console.log('params', params);
  try {
    const experience = await CosmicService.getObject<Experience>(params?.slug);
    if(experience) {
      return {
        props: { experience }
      };
    }
  } catch (err) {
    console.error('error', err);
  }
  return {
    notFound: true
  };
}

interface Props {
  experience: Experience
}

const ExperienceDetails: NextPage<Props> = ({ experience }) => {
  if(!experience) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div className="pb-20">
      <div className="relative bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">La real experiencia
            Surmonte</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            &ldquo;{experience.title}&rdquo;
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            Si quieres que tu experiencia <b className="text-indigo-600">tenga eco</b> toma contacto con nosotros...
          </p>
        </div>
      </div>
      <div className="pb-16 bg-gradient-to-r from-indigo-500 to-pink-600 lg:pb-0 lg:z-10 lg:relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="relative lg:-my-8">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"/>
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
              <div
                className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                <img className="object-cover lg:h-full lg:w-full" src={experience.metadata.images[0].image.url}
                     alt={experience.title}/>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
              <blockquote>
                <div>
                  <svg className="h-12 w-12 text-white opacity-25" fill="currentColor" viewBox="0 0 32 32"
                       aria-hidden="true">
                    <path
                      d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                  </svg>
                  <div className="mt-6 text-2xl font-medium text-white"
                       dangerouslySetInnerHTML={{ __html: experience.content }}/>
                </div>
                <footer className="mt-6">
                <span className="text-xl font-medium text-white">{experience.metadata.author.title} - <span
                  className="text-gray-200">{experience.metadata.author.metadata.location}</span>
                </span>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceDetails;
