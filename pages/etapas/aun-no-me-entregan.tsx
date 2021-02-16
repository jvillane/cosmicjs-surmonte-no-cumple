import {
  Check, CheckCircle
} from "heroicons-react";
import NavBar from "../../components/navbar";
import DATA from "../../data/aun-no-me-entregan";

export default function NotSignedYet() {
  return (
    <>
      <NavBar/>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Consejos y guía para el</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Proceso de Entrega
          </p>
          <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-500">
            El proceso de entrega es el acto donde un representante de la Inmobiliaria entrega el acceso al inmueble al
            propietario. Usualmente existe un plazo, establecido en el Compromiso de Compra y Venta, que suele ser de 45
            a 60 días, y que en caso de retraso la Inmobiliaria se verá obligada a pagar una multa por día de atraso.
          </p>
        </div>
        <dl
          className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-y-12 lg:grid-cols-2 lg:gap-x-8">
          <div className="flex">
            <CheckCircle className="flex-shrink-0 h-6 w-6 text-primary"/>
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Incentivos
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Usualmente la Inmobiliaria tiene su interés puesto en entregar el bien inmueble antes de que se cumpla
                el plazo establecido en la Promesa de Compra y Venta para evitar el pago de multas
              </dd>
            </div>
          </div>
          <div className="flex">
            <CheckCircle className="flex-shrink-0 h-6 w-6 text-primary"/>
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Rechazo de la Entrega
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Si existen problemas que dificulten el poder habitar el inmueble el nuevo propietario puede rechazar el
                proceso de entrega
              </dd>
            </div>
          </div>
          <div className="flex">
            <CheckCircle className="flex-shrink-0 h-6 w-6 text-primary"/>
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Oportunidad
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Si el proceso de entrega es rechazado, la inmobiliaria se verá forzada a reparar los problemas
                detectados para poder fijar una nueva instancia de entrega lo antes posible con el fin de evitar el pago
                de multas
              </dd>
            </div>
          </div>
          <div className="flex">
            <CheckCircle className="flex-shrink-0 h-6 w-6 text-primary"/>
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Conveniencia
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Con el inmueble aún sin habitar las reparaciones serán menos traumáticas para el propietario y más
                ágiles para la inmobiliaria, lo que constituye una oportunidad inmejorable de cara a poder disfrutar lo
                antes posible el inmueble
              </dd>
            </div>
          </div>
        
        </dl>
      </div>
      <div className="bg-secondary">
        <div className="max-w-2xl mx-auto text-center py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Te acompañamos</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-white">
            Trabajamos con expertos que pueden actuar como contraparte de la Inmobiliaria, asegurando que ejecuten las
            reparaciones adecuadas según normativa para que puedas disfrutar de tu hogar sin pasar por el estrés de
            interactuar con la Post Venta
          </p>
          <a href="mailto:contacto@nocumple.cl"
             className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-secondary bg-white hover:bg-indigo-50 sm:w-auto">
            Contáctanos
          </a>
        </div>
      </div>
      <div className="container mx-auto pt-16">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          <span className="block">Guía y consejos de nocumple.cl</span>
          <span className="block text-primary">Recepción del bien inmueble</span>
        </h2>
        <p className="mt-3 text-lg text-secondary">
          Si deseas realizar la recepción del inmueble sin la asesoría de un experto, te sugerimos leer detenidamente el
          siguiente listado de puntos, ten en mente la oportunidad que significa poder identificar defectos en etapaas
          tempranas del proceso
        </p>
      </div>
      <div className="container mx-auto pt-16">
        <div
          className="overflow-hidden md:grid md:grid-cols-2 md:gap-4">
          {DATA.map((data, dIndex) => (
            <div key={`data_${dIndex}`}
                 className="rounded relative group bg-white p-6 border-4 ring-inset border-gray-200 hover:border-primary-light">
              <h3 className="text-2xl font-medium text-primary">
                <span className="absolute inset-0" aria-hidden="true"/>
                {data.title}
              </h3>
              <div className="mt-3">
                {data.paragraphs.map((paragraph, pIndex) => (
                  <p key={`paragraph_${dIndex}_${pIndex}`} className="mt-2 text-sm text-gray-500">
                    {paragraph}
                  </p>
                ))}
                <div className="text-md mt-5">
                  {data.items.map((item, iIndex) => (
                    <div key={`item_${dIndex}_${iIndex}`} className="flex mb-3">
                      <Check className="flex-shrink-0 h-6 w-6 text-primary"/>
                      <div className="ml-3">
                        <dd className="text-gray-700">
                          {item}
                        </dd>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <span
                className={`inline-flex items-center px-3 py-0.5 rounded-full border-2 border-${data.label.color}-500 text-sm font-medium bg-${data.label.color}-100 text-${data.label.color}-800 pointer-events-none absolute top-6 right-6`}>
                {data.label.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
