import { Transition } from "@headlessui/react";
import {
  ChartBarOutline,
  ClipboardCheckOutline,
  Cube,
  CursorClick,
  DocumentReportOutline,
  MenuOutline,
  RefreshOutline,
  ScaleOutline,
  ShieldCheck,
  ViewGrid,
  XOutline
} from "heroicons-react";
import { useState } from "react";
import NavbarDropdown from "./navbardropdown";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <>
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div>
          <a href="#" className="flex">
            <span className="sr-only">Logo</span>
            <div className="h-8 w-8 text-primary">
              <Cube/>
            </div>
          </a>
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
            <div className="relative">
              <NavbarDropdown text="Etapas">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                    <div
                      className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white sm:h-12 sm:w-12">
                      <ClipboardCheckOutline/>
                    </div>
                    <div className="ml-4">
                      <p className="text-base font-medium text-gray-900">Aún no firmo</p>
                      <p className="mt-1 text-sm text-gray-500">
                        Tenemos algunos consejos con los que puedes orientarte antes de embarcarte con cualquier inmobiliaria.
                      </p>
                    </div>
                  </a>
                  
                  <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                    <div
                      className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white sm:h-12 sm:w-12">
                      <ChartBarOutline/>
                    </div>
                    <div className="ml-4">
                      <p className="text-base font-medium text-gray-900">Aún no me entregan</p>
                      <p className="mt-1 text-sm text-gray-500">
                        Al momento de la entrega es de vital importancia tener claro en qué fijarte, revisa nuestro listado.
                      </p>
                    </div>
                  </a>
                  
                  <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                    <div
                      className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white sm:h-12 sm:w-12">
                      <ScaleOutline/>
                    </div>
                    <div className="ml-4">
                      <p className="text-base font-medium text-gray-900">Post venta</p>
                      <p className="mt-1 text-sm text-gray-500">
                        Los servicios de post venta tienen pésima fama en nuestro país, pero no todo está perdido si no te responden
                      </p>
                    </div>
                  </a>
                </div>
              </NavbarDropdown>
            </div>
            <a href="#"
               className="text-base font-medium text-gray-500 hover:text-gray-900 border-white hover:border-primary border-b-2 pb-2">
              Te ayudamos
            </a>
            <a href="#"
               className="text-base font-medium text-gray-500 hover:text-gray-900 border-white hover:border-primary border-b-2 pb-2">
              Quiénes somos
            </a>
          </nav>
          <div className="flex items-center md:ml-12">
            <a href="#"
               className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary">
              ¡Contáctanos!
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
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
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
                    <XOutline></XOutline>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-6">
                  <a href="#" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                    <div
                      className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white">
                      <ChartBarOutline></ChartBarOutline>
                    </div>
                    <div className="ml-4 text-base font-medium text-gray-900">
                      Analytics
                    </div>
                  </a>
                  
                  <a href="#" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                    <div
                      className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white">
                      <CursorClick></CursorClick>
                    </div>
                    <div className="ml-4 text-base font-medium text-gray-900">
                      Engagement
                    </div>
                  </a>
                  
                  <a href="#" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                    <div
                      className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white">
                      <ShieldCheck></ShieldCheck>
                    </div>
                    <div className="ml-4 text-base font-medium text-gray-900">
                      Security
                    </div>
                  </a>
                  
                  <a href="#" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                    <div
                      className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white">
                      <ViewGrid></ViewGrid>
                    </div>
                    <div className="ml-4 text-base font-medium text-gray-900">
                      Integrations
                    </div>
                  </a>
                  
                  <a href="#" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                    <div
                      className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white">
                      <RefreshOutline></RefreshOutline>
                    </div>
                    <div className="ml-4 text-base font-medium text-gray-900">
                      Automations
                    </div>
                  </a>
                  
                  <a href="#" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                    <div
                      className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white">
                      <DocumentReportOutline></DocumentReportOutline>
                    </div>
                    <div className="ml-4 text-base font-medium text-gray-900">
                      Reports
                    </div>
                  </a>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Pricing
                </a>
                
                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Docs
                </a>
                
                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Enterprise
                </a>
                
                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Blog
                </a>
                
                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Help Center
                </a>
                
                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Guides
                </a>
                
                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Security
                </a>
                
                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Events
                </a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
}
