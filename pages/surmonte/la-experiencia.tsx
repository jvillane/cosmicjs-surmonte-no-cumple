import React from 'react';
import Link from 'next/link';
import Img from 'react-optimized-image';
import NavBar from '../../components/navbar';
import { EmojiHappy, EmojiSad } from "heroicons-react";

export default function SurmonteExperience() {
  return (
    <>
      <NavBar/>
      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"/>
          <div className="mx-auto text-base max-w-prose lg:max-w-none">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">La verdadera cara de</h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-secondary sm:text-4xl">
              La Experiencia Surmonte
            </h3>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <svg className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20" width="404" height="384" fill="none"
                   viewBox="0 0 404 384" aria-hidden="true">
                <defs>
                  <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20"
                           patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor"/>
                  </pattern>
                </defs>
                <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"/>
              </svg>
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <Img className="rounded-lg shadow-lg object-cover object-center"
                         src={require('../../images/surmonte_condell54.jpg')}
                         alt="Fotografía del edificio Condell54" width="1184" height="1376"/>
                  </div>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 text-lg">
              <div className="text-base max-w-prose mx-auto lg:max-w-none">
                <p className="text-xl text-gray-600">
                  La imagen de <b>Surmonte Inmobiliaria</b> está centrada en el diseño arquitectónico de sus edificios
                  donde es
                  difícil encontrar 2 que se parezcan, lo que demuestra un cierto nivel de dedicación, porque han
                  entendido que la parte más importante del negocio Inmobiliario es seducir usando una cáscara
                  atractiva, a aquellos posibles clientes que buscan un lugar distinto para vivir pensado en ellos.
                </p>
              </div>
              <hr className="my-6"/>
              <div className="mt-5 text-gray-700 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                <p className="mb-6">
                  El golpe de realidad llega más tarde, cuando ya has pagado la reserva, el pié y firmaste la escritura
                  de compraventa.
                </p>
                <p className="mb-6">
                  Hasta ese momento el <b>Equipo Comercial</b> ha ejecutado a la perfección la estrategia del <b>"Yes
                  man"</b> (<Link href="https://www.imdb.com/title/tt1068680/">
                  <a href="#" className="text-gray-500">te recomendamos ver la película</a></Link>) dando luces de que
                  el
                  proceso fluirá impecable...
                </p>
                <blockquote
                  className="p-4 italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote mb-3">
                  <p className="mb-2">
                    ¿Podremos tener acceso al departamento para poder tomar algunas medidas e ir planificando la compra
                    de los muebles con tiempo?
                    <cite><span className="text-primary">{' - '}comprador</span></cite>
                  </p>
                  <p className="mb-2">
                    ¡Por supuesto!
                    <cite><span className="text-primary">{' - '}vendedor Surmonte</span></cite>
                  </p>
                </blockquote>
                <blockquote
                  className="p-4 italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote mb-9">
                  <p className="mb-2">
                    ¿Tendré algún problema con instalar un techo en la terraza?
                    <cite><span className="text-primary">{' - '}comprador</span></cite>
                  </p>
                  <p className="mb-2">
                    ¡Obvio que no!
                    <cite><span className="text-primary">{' - '}vendedor Surmonte</span></cite>
                  </p>
                </blockquote>
                <p className="mb-6">
                  Ocurre que con los dineros en las cuentas de <b>Surmonte Inmobiliaria</b> y con la firma de
                  la escritura de compraventa, te convertiste en un cliente cautivo. La posibilidad de que la venta se
                  les desarme es prácticamente nula, por lo que automáticamente pasaste de recibir una atención VIP a
                  ser atendido por el <b>servicio de post venta</b>.
                </p>
  
                <div className="py-4 px-4 flex items-center">
                  <div className="max-w-lg mx-auto w-full space-y-2 lg:mx-0">
                    <div>
                      <p className="relative grid grid-cols-2">
                        <span className="flex flex-col text-center">
                          <span className="text-3xl font-extrabold text-primary tracking-tight">Comercial</span>
                        </span>
                        <span className="flex flex-col text-center">
                          <span className="text-3xl font-extrabold text-primary tracking-tight">Post Venta</span>
                        </span>
                      </p>
                    </div>
                    <ul className="grid grid-cols-2 grid-rows-3 grid-flow-col text-secondary">
                      <li className="border-t border-opacity-25 py-4 px-4 flex items-center text-base">
                        <EmojiHappy className="h-6 w-6 text-primary"/>
                        <span className="ml-3">Respuestas al día siguiente</span>
                      </li>
                      <li className="border-t border-opacity-25 py-4 px-4 flex items-center text-base">
                        <EmojiHappy className="h-6 w-6 text-primary"/>
                        <span className="ml-3">"Yes man"</span>
                      </li>
                      <li className="border-t border-opacity-25 py-4 px-4 flex items-center text-base">
                        <EmojiHappy className="h-6 w-6 text-primary"/>
                        <span className="ml-3">Contestan el teléfono</span>
                      </li>
                      <li
                        className="border-t border-opacity-25 py-4 px-4 flex items-center text-base border-t-0 border-l">
                        <EmojiSad className="h-6 w-6 text-primary"/>
                        <span className="ml-3">Semanas, meses o nunca</span>
                      </li>
                      <li className="border-t border-opacity-25 py-4 px-4 flex items-center text-base border-l">
                        <EmojiSad className="h-6 w-6 text-primary"/>
                        <span className="ml-3">"No se puede"</span>
                      </li>
                      <li className="border-t border-opacity-25 py-4 px-4 flex items-center text-base border-l">
                        <EmojiSad className="h-6 w-6 text-primary"/>
                        <span className="ml-3">No están disponibles</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <p className="mb-6">
                  Comienza entonces la amarga transición a tener que lidiar con un área que no tienen ningún interés por
                  resolver en tiempo y forma cualquier inconveniente, comienzas a reconocerte como un ciudadano de
                  segunda clase, dejaste de ser el cliente especial, ya no existen incentivos a dejarte conforme con el
                  producto, ojalá no pilles esos defectos que tiene el departamento pues les implicará restar ganancia,
                  perder dinero, y eso <b>Surmonte Inmobiliaria</b> no se lo puede perdonar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
