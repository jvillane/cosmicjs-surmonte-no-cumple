import { Experience } from "../service/Cosmic.model";
import Link from "next/link";

interface Props {
  experiences?: Experience[]
}

export default function Experiences({experiences}: Props) {
  return (
    <>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3"/>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Las vivencias de sus clientes
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Conozca desde sus propias palabras... lo que ha significado vivir la <b className="text-indigo-700">Experiencia
              Surmonte</b>
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {!experiences && <>Error al obtener las phrases...</>}
            {experiences && experiences.map(experience => (
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden" key={experience._id}>
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={experience.metadata.images[0].image.url}
                       alt={experience.title}/>
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <Link href={`/experiencia/${experience.slug}`} passHref>
                    <a href="#" className="block mt-2">
                      <p className="text-xl font-semibold text-indigo-600">
                        {experience.title}
                      </p>
                      <div className="mt-3 text-base phrase-content-gradient max-h-52 overflow-hidden"
                           dangerouslySetInnerHTML={{ __html: experience.content }}/>
                    </a>
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">{experience.metadata.author.title}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                          <span className="hover:underline">
                            {experience.metadata.author.title} - <span
                            className="text-indigo-500">{experience.metadata.author.metadata.location}</span>
                          </span>
                      </p>
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
