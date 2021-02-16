import { Newspaper } from "heroicons-react";
import NavBar from "../../components/navbar";

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
              Compra de una Propiedad Nueva
            </p>
            <p className="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
              La adquisición de un casa o departamento es para muchos una de las inversiones materiales más importantes
              de la vida. Elegir ese lugar donde vivirás junto a los tuyos por una buena catidad de años no es algo que
              se tome a la ligera.
            </p>
            <p className="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
              Allí radica la importancia conocer el proceso de compra y anticiparse a conocer a la empresa que será
              intermediaria en la realización de este sueño.
            </p>
          </div>
        </div>
      </div>
      <hr/>
      <div className="container mx-auto">
        <div className="lg:text-center pt-12 pb-6">
          <h2 className="text-2xl leading-8 text-primary font-semibold tracking-wide">Etapas del Proceso de
            Compra</h2>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <Newspaper className="h-6 w-6"/>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-secondary">
                  Reserva
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  <p className="pb-6">
                    Corresponde a la firma de un acuerdo de reserva entre el comprador y la inmobiliaria, donde
                    usualmente existe el pago de un monto por parte del comprador y un plazo para la formalización de la
                    compra, a modo de asegurar la seriedad del compromiso. El objetivo de la firma de la reserva es
                    otorgar seguridad al posible comprador respecto a que la propiedad no será ofrecida a otros posibles
                    compradores.
                  </p>
                  <p className="pb-6">
                    Durante esta etapa el solicitante debe gestionar (entre otras cosas) la obtención del crédito
                    hipotecario para poder avanzar a la siguiente etapa.
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
                  Promesa de Compraventa
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  <p className="pb-6">
                    Es un contrato en donde comprador e inmobiliaria se comprometen a dar término a la operación. Se
                    suelen especificar las penalizaciones, que aplicarán en caso de que alguna de las partes no cumpla
                    con su compromiso. Se estipulan montos, plazos y pagos entre otras cláusulas correspondientes.
                  </p>
                  <p className="pb-6">
                    En esta etapa el comprador realiza un primer pago, conocido como el pié, usualmente un porcentaje
                    que ronda el 10%-20% del valor total de la propiedad.
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
                  Escritura Pública
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  <p className="pb-6">
                    Con la firma de la escritura pública se hace definitivo el traspaso de la propiedad.
                  </p>
                  <p className="pb-6">
                    En caso de que la compra se realice apoyado en un crédito hipotecario, la documentación debe ser
                    firmada por 3 partes: el comprador, la inmobiliaria y los representantes del banco
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
                  Inscripción en el Conservador de Bienes Raíces
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  <p className="pb-6">
                    Los Conservadores de Bienes Raíces son ministros de fe encargados de los registros conservatorios de
                    bienes raíces, y cuyo objeto principal es mantener la historia de la propiedad inmueble y otorgar
                    una completa publicidad a los gravámenes que pueden afectar a los bienes raíces.
                  </p>
                  <p className="pb-6">
                    Los tiempos de este trámite varían, pero si la firma ante notario se realizó de forma electrónica
                    puede realizarse en 7 días hábiles.
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
