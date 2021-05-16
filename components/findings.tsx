const features = [
  { name: 'Falta de Personal Competente', description: 'Aún no nos deja de sorprender que el equipo de Postventa de Surmonte, para realizar los trabajos de reparación de un muro externo ocupara yeso para cubrir los ductos eléctricos y éstos no cumplieran la normativa vigente respecto a la profundidad. Si bien actualmente se está corrigiendo nuevamente este problema, queda en evidencia que los supervisores no cuentan con el conocimiento técnico adecuado, o que la selección que realiza la Inmobiliaria deja mucho que desear.' },
  { name: 'Desprolijidad en la Ejecución de Trabajos', description: 'Que te vengan a tomar la medida de los ventanales por cuarta vez, que te arreglen los ventanales pero te dejen sin alarma y de paso te ensucien tus muebles, que te pinten el techo y te dejen manchadas las paredes. Lo anterior son ejemplos reales de lo que algunas cuadrillas contratadas por Surmonte, con la supervisión de personal de la Inmobiliaria, que hacen que en la experiencia Surmonte implique avances acompañados de retrocesos.' },
  { name: 'Tiempos de Reparaciones Prolongados', description: 'Imagina que tienes una fuga de agua sobre la cocina, que recurrentemente moja tus muebles, escurriendo por la campana, ensuciando tus cosas y cayendo sobre los quemadores. Súmale a eso las 3-4 semanas que el equipo de postventa se demoró en diagnosticar y finalmente picar para reparar. Eso le pasó a un cliente de Surmonte.' },
  { name: 'Trabajos Constructivos Deficientes', description: 'Se detectaron fallas constructivas donde por ejemplo existían ductos eléctricos taponados con material de construcción y basura, ausencia de puntos de iluminación y materiales ya oxidados al momento de la entrega. Es lo que tuvieron que vivir unos clientes de Surmonte.' },
  { name: 'Desinterés por el Buen Servicio', description: 'En la mayoría de las empresas serias, cuando no logras llegar a acuerdo, encuentras que estás recibiendo un producto deficiente o el servicio entregado es mediocre existen instancias en que puedes escalar y revisarlo con las jefaturas. No es el caso de Surmonte, los clientes de la Inmobiliaria que buscaron dichas instancias no tuvieron una respuesta por parte de quienes eran la cabeza de los equipos: Mauricio Belmar (Gerente de Postventa y Recepción) o Francisco Vinagre (Gerente General).' },
]

export default function Findings() {
  return (
    <div className="bg-white">
      <div className="text-center max-w-4xl mx-auto px-4 py-8 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8 text-primary">
        <h2 className="text-2xl font-extrabold tracking-tight">La importancia de saber elegir a quién comprar...</h2>
        <p className="mt-4 text-lg text-gray-700">
          Independiente de si lo que buscas es un lugar para vivir o para hacer negocios, los problemas de una
          construcción y terminaciones deficientes teminarán afectando tu paz mental directamente o a través de tus
          desafortunados arrendatarios.
        </p>
        <p className="mt-4 text-lg text-gray-700">
          Por ejemplo, <b>algunos de los problemas que fueron detectado por parte de Surmonte Inmobiliaria</b> son:
        </p>
        <div
          className="text-center mt-12 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name}>
              <div className="mt-6">
                <h3 className="text-lg font-bold text-primary">{feature.name}</h3>
                <p className="mt-2 text-base text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
