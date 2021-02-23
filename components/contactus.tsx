import Link from "next/link";
import {
    ArrowCircleRightOutline,
    MailOutline
} from "heroicons-react";

export default function ContactUs() {
    return (
    <div className="bg-white py-16 sm:py-24">
        <div className="relative sm:py-16">
            <div aria-hidden="true" className="hidden sm:block">
                <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-200 opacity-50 rounded-r-3xl"></div>
                <svg className="absolute top-8 left-1/2 -ml-3" width="404" height="392" fill="none" viewBox="0 0 404 392">
                    <defs>
                    <pattern id="8228f071-bcee-4ec8-905a-2a059a2cc4fb" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                    </pattern>
                    </defs>
                    <rect width="404" height="392" fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
                </svg>
            </div>
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="relative rounded-2xl px-6 py-10 bg-orange-500 overflow-hidden shadow-xl sm:px-12 sm:py-20">
                    <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
                        <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1463 360">
                            <path className="text-orange-600 text-opacity-40" fill="currentColor" d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z" />
                            <path className="text-orange-700 text-opacity-40" fill="currentColor" d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z" />
                        </svg>
                    </div>
                    <div className="relative">
                        <div className="sm:text-center">
                            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                            ¿Eres un desafortunado cliente de Surmonte?
                            </h2>
                            <p className="mt-6 mx-auto max-w-2xl text-lg text-gray-50">
                            Toma contacto con nosotros y comparte tu experiencia en nuestro portal. No tiene costo y estarás colaborando a mejorar el acceso a la información de cientos de clientes.
                            </p>
                        </div>
                        <div className="flex justify-center gap-6 mt-6 mx-auto max-w-sm">
                            <a href="mailto:contacto@nocumple.cl" className="flex gap-2 p-3 font-medium rounded-md bg-white text-gray-700 hover:bg-orange-200">
                                <MailOutline/> Contáctanos
                            </a>
                            <Link href="/que-implica" passHref>
                                <a href="#" className="flex gap-2 p-3 border border-transparent font-medium rounded-md bg-white text-gray-700 hover:bg-orange-200">
                                    ¿Qué Implica? <ArrowCircleRightOutline/>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}