import { Check, CheckCircle } from "heroicons-react";
import NavBar from "../../components/navbar";
import DATA from "../../data/proceso-de-entrega";

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
          className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-y-12 lg:grid-cols-2 lg:gap-x-8 sm:px-6 lg:px-8">
          <div className="flex">
            <CheckCircle className="flex-shrink-0 h-6 w-6 text-primary"/>
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-primary">
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
              <dt className="text-lg leading-6 font-medium text-primary">
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
              <dt className="text-lg leading-6 font-medium text-primary">
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
              <dt className="text-lg leading-6 font-medium text-primary">
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
      <hr className="mx-12"/>
      <div className="container mx-auto pt-8">
        <div
          className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div>
            <h2 className="font-extrabold tracking-tight">
              <span className="block text-gray-900 text-xl md:text-2xl">Guía y consejos de nocumple.cl</span>
              <span className="block text-primary text-3xl md:text-4xl">Recepción del bien inmueble</span>
            </h2>
            <p className="mt-3 text-lg text-secondary">
              Si deseas realizar la recepción del inmueble sin la asesoría de un experto, te sugerimos leer
              detenidamente el siguiente listado de puntos, ten en mente la oportunidad que significa poder identificar
              defectos en etapaas tempranas del proceso
            </p>
          </div>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a href="mailto:contacto@nocumple.cl"
                 className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary">
                Te acompañamos, contáctanos
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-16">
        <div
          className="overflow-hidden md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-4">
          {DATA.map((data, dIndex) => (
            <div key={`data_${dIndex}`}
                 className="rounded relative group bg-white p-6 border-4 ring-inset border-gray-200 hover:border-primary">
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
