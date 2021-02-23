import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import {
  ChartBarOutline,
  ClipboardCheckOutline,
  Cube,
  CursorClick,
  Home,
  Mail,
  MailOutline,
  MenuOutline,
  ScaleOutline,
  ShieldCheck,
  ViewGrid,
  XOutline
} from "heroicons-react";
import NavbarDropdown from "./navbardropdown";
import Link from "next/link";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div>
          <Link href="/">
            <a href="#" className="flex">
              <span className="sr-only">Logo</span>
              <div className="h-8 w-8 text-orange-500">
                <Cube/>
              </div>
            </a>
          </Link>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <button type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setIsOpen(true)}>
            <span className="sr-only">Open menu</span>
            <MenuOutline/>
          </button>
        </div>
        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
          <nav className="flex space-x-10">
            <Link href="/">
              <a href="#"
                 className="text-base font-medium text-gray-500 hover:text-gray-900 border-white hover:border-primary border-b-2 pb-2">
                Inicio
              </a>
            </Link>
            <div className="relative">
              <NavbarDropdown text="Surmonte">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  <Link href="/surmonte/la-experiencia">
                    <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                      <div
                        className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white sm:h-12 sm:w-12">
                        <ClipboardCheckOutline/>
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">La experiencia Surmonte</p>
                        <p className="mt-1 text-sm text-gray-500">
                          Conoce desde la experiencia de sus clientes lo que esconde la trillada frase de la
                          inmobiliaria.
                        </p>
                      </div>
                    </a>
                  </Link>
                  <Link href="/surmonte/vivencias">
                    <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                      <div
                        className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white sm:h-12 sm:w-12">
                        <ChartBarOutline/>
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">Vivencias</p>
                        <p className="mt-1 text-sm text-gray-500">
                          Algunas de las observaciones que han levantado los clientes de Surmonte en sus distintos
                          proyectos.
                        </p>
                      </div>
                    </a>
                  </Link>
                </div>
              </NavbarDropdown>
            </div>
            <div className="relative">
              <NavbarDropdown text="Te ayudamos">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  <Link href="/te-ayudamos/proceso-de-compra">
                    <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                      <div
                        className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white sm:h-12 sm:w-12">
                        <ClipboardCheckOutline/>
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">Proceso de Compra</p>
                        <p className="mt-1 text-sm text-gray-500">
                          Tenemos algunos consejos con los que puedes orientarte antes de embarcarte con cualquier
                          inmobiliaria.
                        </p>
                      </div>
                    </a>
                  </Link>
                  <Link href="/te-ayudamos/proceso-de-entrega">
                    <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                      <div
                        className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white sm:h-12 sm:w-12">
                        <ChartBarOutline/>
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">Proceso de Entrega</p>
                        <p className="mt-1 text-sm text-gray-500">
                          Al momento de la entrega es de vital importancia tener claro en qué fijarte, revisa nuestro
                          listado.
                        </p>
                      </div>
                    </a>
                  </Link>
                  <Link href="/te-ayudamos/post-venta">
                    <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                      <div
                        className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white sm:h-12 sm:w-12">
                        <ScaleOutline/>
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">Post venta</p>
                        <p className="mt-1 text-sm text-gray-500">
                          Los servicios de post venta tienen pésima fama en nuestro país, pero no todo está perdido si
                          no te responden
                        </p>
                      </div>
                    </a>
                  </Link>
                </div>
              </NavbarDropdown>
            </div>
            {/*
              <a href="#"
                 className="text-base font-medium text-gray-500 hover:text-gray-900 border-white hover:border-primary border-b-2 pb-2">
                Te ayudamos
              </a>
              <a href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900 border-white hover:border-primary border-b-2 pb-2">
              Quiénes somos
              </a>
            */}
          </nav>
          <div className="flex items-center md:ml-12">
            <a href="#"
               className="flex gap-2 p-3 font-medium rounded-md bg-orange-500 text-white hover:bg-orange-400">
              <MailOutline/> Contáctanos
            </a>
          </div>
        </div>
      </div>
      
      <Transition
        show={isOpen}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-40">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="h-8 w-8 text-primary">
                    <Cube size={36}/>
                  </div>
                </div>
                <div className="-mr-2">
                  <button type="button"
                          className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary"
                          onClick={() => setIsOpen(false)}>
                    <span className="sr-only">Close menu</span>
                    <XOutline/>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-6">
                  <Link href="/">
                    <a href="#" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                      <div
                        className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white">
                        <Home/>
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">
                        Inicio
                      </div>
                    </a>
                  </Link>
                  
                  <Link href="/surmonte/la-experiencia">
                    <a href="#" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                      <div
                        className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white">
                        <CursorClick/>
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">
                        Surmonte - La Experiencia
                      </div>
                    </a>
                  </Link>
                  
                  <Link href="/te-ayudamos/proceso-de-compra">
                    <a href="#" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                      <div
                        className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white">
                        <CursorClick/>
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">
                        Te ayudamos - Proceso de Compra
                      </div>
                    </a>
                  </Link>
                  
                  <Link href="/te-ayudamos/proceso-de-entrega">
                    <a href="#" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                      <div
                        className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white">
                        <ShieldCheck/>
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">
                        Te ayudamos - Proceso de Entrega
                      </div>
                    </a>
                  </Link>
                  
                  <Link href="/te-ayudamos/post-venta">
                    <a href="#" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                      <div
                        className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white">
                        <ViewGrid/>
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">
                        Te ayudamos - Proceso de Post Venta
                      </div>
                    </a>
                  </Link>
                  
                  <Link href="mailto:contacto@nocumple.cl">
                    <a href="#" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                      <div
                        className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white">
                        <Mail/>
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">
                        ¡Contáctanos!
                      </div>
                    </a>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
}

export default NavBar;
