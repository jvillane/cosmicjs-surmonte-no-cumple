import Link from "next/link";
import {
  Mail
} from "heroicons-react";

export default function GetInTouch() {
  return (
    <div>
      <div
        className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-4xl">
          <span className="block">¿Eres un desafortunado cliente de Surmonte?</span>
          <span className="block font-bold text-primary">Toma contacto con nosotros</span>
        </h2>
        <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
          <Link href="/que-implica" passHref>
            <a href="#"
               className="flex items-center justify-center px-4 py-3 border border-transparent font-medium rounded-md shadow-xl bg-primary text-white">
              ¿Qué implica?
            </a>
          </Link>
          <a href="mailto:contacto@nocumple.cl"
             className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-xl bg-primary text-white">
            <Mail/>
          </a>
        </div>
      </div>
    </div>
  );
}
