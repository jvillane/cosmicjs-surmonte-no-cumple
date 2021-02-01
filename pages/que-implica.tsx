export default function Implications() {
  return (
    <>
      <section className="py-8 bg-indigo-700 overflow-hidden md:py-12 lg:py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <blockquote className="mt-10">
              <h2 className="max-w-3xl mx-auto text-center text-3xl leading-9 font-medium text-white">
                ¿Qué implica participar de la iniciativa <b>NoCumple.cl</b>?
              </h2>
            </blockquote>
          </div>
        </div>
      </section>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="mt-8">
            <dl
              className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  ¿Tiene algún costo?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  No, no tiene ningún costo.
                  En <b>NoCumple.cl</b> simplemente queremos empoderar a los clientes, darle fuerza a su voz y exponer a
                  las empresas que entregan un mal servicio.
                </dd>
              </div>
              
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  ¿Qué debo hacer?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Debes ponerte en contacto con nosotros a nuestro <a href="mailto:contacto@nocumple.cl">correo de
                  contacto</a>.
                  Te compartiremos un formulario para que nos documentes tu experiencia y podamos presentarla de la
                  manera
                  más clara.
                </dd>
              </div>
              
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Me parece sospechoso... ¿Qué gana <b>NoCumple.cl</b>?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  La verdad es que en varias ocasiones nos ha tocado en la vereda del cliente que no recibe un servicio
                  acorde, y queremos que esa indiferencia de las empresas se haga pública.
                  Si logramos alertar a nuevos posibles clientes, para que sepan con quién están invirtiendo, nos damos
                  por satisfechos.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
