import { Experience } from "../service/Cosmic.model";
import Link from "next/link";
import ErrorPage from "next/error";

interface Props {
  experiences?: Experience[]
  length?: number
}

export default function Experiences({ experiences, length }: Props) {
  if (!experiences) {
    return <ErrorPage statusCode={404}/>;
  }
  if (length) {
    experiences = experiences.slice(0, length);
  }
  return (
    <>
      <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute">
          <div className="bg-white h-1/3 sm:h-2/3"/>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-bold text-gray-800 sm:text-4xl">
              Las vivencias de sus clientes
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-4">
              Conozca directamente de los clientes lo que ha significado para ellos vivir la <b
              className="text-orange-600">"Experiencia Surmonte"</b>
            </p>
          </div>
          <div className="mt-12 grid gap-20 lg:grid-cols-3 lg:max-w-none ">
            {!experiences && <>Error al obtener las phrases...</>}
            {experiences && experiences.map(experience => (
              <div key={experience.slug}
                   className="inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 shadow-lg transform rotate-6 sm:rounded-3xl">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                  <div className="transform -rotate-6 rounded-lg shadow-lg overflow-hidden sm:rounded-3xl"
                       key={experience._id}>
                    <div className="flex-shrink-0">
                      <img className="h-48 w-full object-cover" src={experience.metadata.images[0].image.url}
                           alt={experience.title}/>
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <Link href={`/experiencia/${experience.slug}`} passHref>
                          <a href="#" className="block max-h-52 overflow-hidden">
                            <p className="text-xl font-semibold text-orange-600">
                              {experience.title}
                            </p>
                            <div className="mt-3 text-base phrase-content-gradient max-h-44"
                                 dangerouslySetInnerHTML={{ __html: experience.content }}/>
                          </a>
                        </Link>
                      </div>
                      <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                          <span className="sr-only">{experience.metadata.project.title}</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-primary">
                              <span className="hover:underline">
                                {experience.metadata.project.title}
                              </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
