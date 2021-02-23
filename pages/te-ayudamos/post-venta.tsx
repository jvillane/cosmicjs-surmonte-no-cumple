import NavBar from "../../components/navbar";
import { Newspaper } from "heroicons-react";

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
      <hr/>
      <div className="container mx-auto px-6">
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
    </>
  );
}
