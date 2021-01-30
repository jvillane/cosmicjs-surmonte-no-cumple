import React, { useState } from 'react'
import { useInterval } from 'react-use';
import { Transition } from '@headlessui/react'
import { Phrase } from "../service/Cosmic.model";
import ErrorPage from "next/error";

interface Props {
  phrases?: Phrase[]
}

export default function Featured({ phrases }: Props) {
  if (!phrases) {
    return <ErrorPage statusCode={404}/>;
  }
  const [activePage, setActivePage] = useState(0);
  useInterval(
    () => {
      setActivePage((activePage + 1) % phrases.length);
    },
    10000
  );
  
  return (
    <div className="bg-white pt-16 lg:py-16">
      <div className="featured-h">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="mt-8 lg:m-0 lg:col-span-2 lg:pl-8">
            {phrases.map((phrase, i) => (
              <Transition
                appear
                key={phrase.slug}
                show={activePage === i}
                className="px-8 text-3xl rounded-lg text-white font-bold"
                enter="transition-opacity duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
              >
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                  <blockquote>
                    <div>
                      <svg className="h-12 w-12 text-white opacity-25" fill="currentColor" viewBox="0 0 32 32"
                           aria-hidden="true">
                        <path
                          d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                      </svg>
                      <div className="mt-6 text-2xl font-medium text-white"
                           dangerouslySetInnerHTML={{ __html: phrase.content }}/>
                    </div>
                    <footer className="mt-6">
                      <p
                        className="text-base font-medium text-white">{phrase.metadata.author.title} - {phrase.metadata.author.metadata.location}</p>
                    </footer>
                  </blockquote>
                </div>
              
              </Transition>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
