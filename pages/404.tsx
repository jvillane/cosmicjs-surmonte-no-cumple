import NavBar from "../components/navbar";
import { NextPage } from "next";
import Link from "next/link";

const NotFound: NextPage = () => {
  return (
    <>
      <NavBar/>
      <div className="h-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block text-secondary">Esto es un poco incómodo</span>
          <span className="block text-primary">Pero parece que esta página ya no existe</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link href="/">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent border-secondary-400 text-base font-medium rounded-md text-primary bg-white hover:bg-primary-50">
                Cargar la página de Inicio
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound;
