import NavBar from "../../components/navbar";
import { Newspaper } from "heroicons-react";
import Link from "next/link";

export default function NotSignedYet() {
  return (
    <>
      <NavBar/>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Consejos y puntos de
              atención</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Servicio de Post Venta
            </p>
            <p className="mt-4 max-w-6xl text-xl text-gray-500 lg:mx-auto">
              Es usual escuchar o vivir la experiencia de tener que lidiar con el área de post venta de alguna empresa,
              tienda o servicio, y llegar a la conclusión de que toda esa atención que recibías en el momento de la
              venta se desvanece, quedando acorralado con ejecutivos de post venta que no responden, dilatan la
              resolución de los problemas o simplemente te envían a gente poco capacitada a dar solución a los problemas
              que has levantado.
            </p>
            <p className="mt-4 max-w-6xl text-xl text-gray-500 lg:mx-auto">
              Los departamentos nuevos no están exentos de defectos, simples y complejos de solucionar, y estás en tu
              derecho de exigir que la Inmobiliaria se haga responsable de ellos. Sin embargo, todos sus incentivos
              están enfocados en dedicar el menor esfuerzo para dar solución, pues eso atenta contra sus ganancias.
            </p>
          </div>
        </div>
      </div>
      <hr className="mx-32"/>
      <div className="container mx-auto px-6 pt-8 pb-16">
        <div className="lg:text-center pt-12 pb-6">
          <h2 className="text-2xl leading-8 text-primary font-semibold tracking-wide">Derechos en la Compra de una
            Vivienda</h2>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <Newspaper className="h-6 w-6"/>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-secondary">
                  Garantía de 10 años
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  <p className="pb-6">
                    Desde la fecha de la recepción definitiva de la obra. Cubre daños estructurales, como por ejemplo
                    los provocados por movimientos sísmicos o por defectos de la obra.
                  </p>
                </dd>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <Newspaper className="h-6 w-6"/>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-secondary">
                  Garantía de 5 años
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  <p className="pb-6">
                    Desde la fecha de la recepción definitiva de la obra. Cubre daños a instalaciones, como por ejemplo
                    los provocados por inundaciones por defectos de la obra.
                  </p>
                </dd>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <Newspaper className="h-6 w-6"/>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-secondary">
                  Garantía de 3 años
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  <p className="pb-6">
                    Desde la fecha de inscripción del inmueble en el Conservador de Bienes Raíces. Cubre daños en las
                    terminaciones, usualmente causados por la desprolijidad de la ejecución de la obra.
                  </p>
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
      <hr className="mx-32"/>
      <div className="container mx-auto px-6 pt-8 pb-16">
        <div className="lg:text-center pt-12 pb-6">
          <h2 className="text-4xl leading-8 text-primary font-semibold tracking-wide">
            No consigo que el Servicio de Postventa me resuelva los defectos... ¿Qué puedo hacer?
          </h2>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10">
            
            <div className="mx-3">
              <dt className="text-2xl leading-6 font-medium text-secondary mb-6">
                Acudir a la Dirección de Obras Municipales
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                <p className="pb-3">
                  Primero que todo te recomendamos acudir a la dirección de obras de la municipalidad correspondiente a
                  buscar información y orientación.
                </p>
                <p className="pb-3">
                  Allí podrás solicitar acceso a la carpeta del proyecto inmobiliario, donde podrás encontrar por
                  ejemplo todos los planos de arquitectura, las disposiciones especiales a las que se acoge el proyecto,
                  informes de revisores y especificaciones técnicas de partidas contempladas en el proyecto, entre
                  otros.
                </p>
                <p className="pb-6">
                  Una vez que estés lo suficientemente informado, te sugerimos poder revisar y solicitar orientación con
                  el equipo de la misma dirección de obras. Si existe una irregularidad te solicitarán que lo formalices
                  mediante una carta dirigida al Director de Obras Municipales, lo que les permitirá realizar visitas a
                  la construcción a efectos de corroboración, solicitar información a la Inmobiliaria e incluso aplicar
                  multas en caso de que correspondan.
                </p>
              </dd>
            </div>
            
            <div className="mx-3">
              <dt className="text-2xl leading-6 font-medium text-secondary mb-6">
                Colocar un reclamo en SERNAC
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                <p className="pb-3">
                  Debes tener en cuenta que la Inmobiliaria no te está haciendo un favor al atender los defectos
                  identificados, es básicamente su responsabilidad y en términos ideales deberían haberse abordado
                  antes de proceder a la entrega.
                </p>
                <p className="pb-3">
                  Todos sabemos que el <b>SERNAC</b> es básicamente una entidad que poco y nada puede hacer por los
                  derechos
                  del consumidor, básicamente actúan de intermediarios y cuando no se logra un resultado su
                  recomendación es que inicies una demanda.
                </p>
                <p className="pb-6">
                  Sin embargo al dejar registrados los reclamos, estos podrán ser utilizados como evidencia de que
                  existió una búsqueda de tu parte respecto a llegar a un acuerdo por la vía amable, lo cuál servirá
                  para sentar precedentes respecto del comportamiento de la Inmobiliaria.
                </p>
              </dd>
            </div>
            
            <div className="mx-3">
              <dt className="text-2xl leading-6 font-medium text-secondary mb-6">
                Tramitar una Demanda
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                <p className="pb-3">
                  Cuando todas las instancias han sido agotadas o si en tu evaluación personal llegas a la conclusión de
                  que la única manera de obtener respuestas y soluciones es realizar una acción judicial, tenemos
                  algunas recomendaciones adicionales:
                  <ul className="list-decimal list-inside my-3">
                    <li>Solicita un informe de evaluación del estado de tu departamento a un tercero</li>
                    <li>Valoriza el costo de abordar cada una de las observaciones pendientes</li>
                    <li>Evalúa como ha afectado a tu familia el proceso de entrega y recepción de la propiedad</li>
                  </ul>
                </p>
                <p className="pb-3">
                  En este último punto puedes incluir cómo ha afectado el desarrollo normal de tu vida teniendo que
                  estar presente durante los arreglos que realiza la inmobiliaria, o bien solicita una evaluación
                  psicológica que permita acreditar el daño moral que has padecido fruto de la inoperancia de la
                  Inmobiliaria.
                </p>
                <p className="pb-6">
                  Consigue un buen abogado, que idealmente tenga experiencia en causas de este tipo, que en primera
                  instancia pueda representarte y acercarse a la Inmobiliaria con dichos antecedentes, y tratar de
                  buscar una solución sin tener que recurrir a tribunales.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="container mx-auto pt-8">
        <div
          className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div>
            <h2 className="font-extrabold tracking-tight">
              <span className="block text-gray-900 text-xl md:text-2xl">Cuando nada de lo anterior logra resolver</span>
              <span className="block text-primary text-3xl md:text-4xl">Sólo queda el camino judicial</span>
            </h2>
            <p className="mt-3 text-lg text-secondary">
              Si dicho acercamiento no funciona te recomendamos evaluar la vía judicial, en aquel momento podrás revisar
              con él las oportunidades de seguir adelante y los costos involucrados. Deberás ser paciente, pues este es
              el camino más largo, pero que tiene altas probabilidades de éxito.
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
    </>
  );
}
