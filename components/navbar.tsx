import { Transition } from "@headlessui/react";
import { ArchiveOutline, ChartBarOutline, ChartPieOutline, ChartSquareBarOutline, ChevronDown, ClipboardCheckOutline, CursorClick, CursorClickOutline, DocumentReportOutline, MenuOutline, RefreshOutline, ScaleOutline, ShieldCheck, ShieldCheckOutline, ViewGrid, ViewGridOutline, XOutline } from "heroicons-react";
import { useState } from "react";
import NavbarDropdown from "./navbardropdown";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div>
          <a href="#" className="flex">
            <span className="sr-only">Workflow</span>
            <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt=""></img>
          </a>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setIsOpen(true)}>
            <span className="sr-only">Open menu</span>
            <MenuOutline />
          </button>
        </div>
        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
          <nav className="flex space-x-10">
            <div className="relative">
              <NavbarDropdown text="Servicios">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                      <ClipboardCheckOutline></ClipboardCheckOutline>
                    </div>
                    <div className="ml-4">
                      <p className="text-base font-medium text-gray-900">Check List</p>
                      <p className="mt-1 text-sm text-gray-500">Te entregamos una lista con lo que debes fijarte el día de la entrega</p>
                    </div>
                  </a>

                  <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                      <ChartBarOutline></ChartBarOutline>
                    </div>
                    <div className="ml-4">
                      <p className="text-base font-medium text-gray-900">Registro Online</p>
                      <p className="mt-1 text-sm text-gray-500">Te ayudamos a medir y gestionar el nivel de cumplimiento de Postventa</p>
                    </div>
                  </a>

                  <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                      <ScaleOutline></ScaleOutline>
                    </div>
                    <div className="ml-4">
                      <p className="text-base font-medium text-gray-900">Asesoría Legal</p>
                      <p className="mt-1 text-sm text-gray-500">¿La Postventa Inmobiliaria <b>no cumple</b>? Te acompañamos en el proceso legal</p>
                    </div>
                  </a>
                </div>
                <div className="p-5 bg-gray-50 sm:p-8">
                  <a href="#" className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100">
                    <div className="flex items-center">
                      <div className="text-base font-medium text-gray-900">Enterprise</div>
                      <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800">New</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">Mejora tu gestión de Postventa Inmobiliaria con nuestras herramientas</p>
                  </a>
                </div>
              </NavbarDropdown>
            </div>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900 border-white hover:border-indigo-500 border-b-2 pb-2">
              Personas
        </a>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900 border-white hover:border-indigo-500 border-b-2 pb-2">
              Empresas
        </a>
          </nav>
          <div className="flex items-center md:ml-12">
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Sign in
        </a>
            <a href="#" className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              Sign up
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
                  <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"></img>
                </div>
                <div className="-mr-2">
                  <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setIsOpen(false)}>
                    <span className="sr-only">Close menu</span>
                    <XOutline></XOutline>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-6">
                  <a href="#" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                      <ChartBarOutline></ChartBarOutline>
                    </div>
                    <div className="ml-4 text-base font-medium text-gray-900">
                      Analytics
              </div>
                  </a>

                  <a href="#" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                      <CursorClick></CursorClick>
                    </div>
                    <div className="ml-4 text-base font-medium text-gray-900">
                      Engagement
              </div>
                  </a>

                  <a href="#" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                      <ShieldCheck></ShieldCheck>
                    </div>
                    <div className="ml-4 text-base font-medium text-gray-900">
                      Security
              </div>
                  </a>

                  <a href="#" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                      <ViewGrid></ViewGrid>
                    </div>
                    <div className="ml-4 text-base font-medium text-gray-900">
                      Integrations
              </div>
                  </a>

                  <a href="#" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                      <RefreshOutline></RefreshOutline>
                    </div>
                    <div className="ml-4 text-base font-medium text-gray-900">
                      Automations
              </div>
                  </a>

                  <a href="#" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
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
              <div className="mt-6">
                <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  Sign up
          </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?
            <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
            </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
}
