const features = [
  {
    name: 'Inscripciones irregulares en Organismos Competentes',
    description:
      <>
        Los planos AS BUILT son planos que las Inmobiliarias deben presentar a organismos como la Superintendencia de
        Electricidad y Combustibles, con el detalle final de lo ejecutado en los departamentos entregados. Los
        profesionales que los ejecutan deben dar cuenta de lo observado que efectivamente está ejecutado, sin embargo
        <b> Surmonte Inmobiliaria presentó planos que no coincidían con lo que recepcionó el propietario</b>... ¿cómo
        puede ocurrir ésto? No lo sabemos porque la Inmobiliaria jamás dió una explicación, pero lo que si sabemos es
        que sin duda representa una falta de seriedad absoluta en su actuar.
      </>
  },
  {
    name: 'Falta de Personal Competente',
    description:
      <>
        Aún no nos deja de sorprender que el equipo de Postventa de Surmonte, para realizar los trabajos de reparación
        de un muro externo ocupara yeso para cubrir los ductos eléctricos y éstos no cumplieran la normativa vigente
        respecto a la profundidad. Lo increíble es que un segundo supervisor no fue capaz de detectar el pésimo trabajo
        que le heredó su colega, y fueron los mismos propietarios los que simplemente aplicando criterio les levantaron
        dicha observación a la Inmobiliaria. Si bien actualmente se está corrigiendo nuevamente este problema, <b>queda
        en evidencia que los supervisores no cuentan con el conocimiento técnico adecuado</b>, donde el principal
        responsable es la Inmobiliaria Surmonte, pues son ellos los responsables de tener profesionales competentes
        regularizando todas las desprolijidades que la constructora que contrataron y no supervisaron adecuadamente les
        legó.
      </>
  },
  {
    name: 'Desprolijidad en la Ejecución de Trabajos',
    description:
      <>
        Que tengan que tomar las medidas de los ventanales una y otra vez, incluso por las mismas cuadrillas, que te
        vengan a arreglar los ventanales y te coloquen un tipo de vidrio que no corresponde y que más encima te dejen
        sin alarma y de paso te ensucien tus muebles, que te pinten el techo y te dejen manchadas las paredes. Lo
        anterior son ejemplos reales de lo que algunas cuadrillas contratadas por Surmonte, con la supervisión de
        personal de la Inmobiliaria, que hacen que lo que los clientes entiendan que <b>la "Experiencia Surmonte"
        implica avances acompañados de retrocesos, a veces sólo pasos en falso y en los peores casos solamente
        retrocesos</b>.
      </>
  },
  {
    name: 'Tiempos de Reparaciones Prolongados',
    description: 'Imagina que tienes una fuga de agua sobre la cocina, que recurrentemente moja tus muebles, escurriendo por la campana, ensuciando tus cosas y cayendo sobre los quemadores. Súmale a eso las 3-4 semanas que el equipo de postventa se demoró en diagnosticar y finalmente picar para reparar. Eso le pasó a un cliente de Surmonte.'
  },
  {
    name: 'Trabajos Constructivos Deficientes',
    description: 'Se detectaron fallas constructivas donde por ejemplo existían ductos eléctricos taponados con material de construcción y basura, ausencia de puntos de iluminación y materiales ya oxidados al momento de la entrega. Es lo que tuvieron que vivir unos clientes de Surmonte.'
  },
  {
    name: 'Desinterés por el Buen Servicio',
    description: 'En la mayoría de las empresas serias, cuando no logras llegar a acuerdo, encuentras que estás recibiendo un producto deficiente o el servicio entregado es mediocre existen instancias en que puedes escalar y revisarlo con las jefaturas. No es el caso de Surmonte, los clientes de la Inmobiliaria que buscaron dichas instancias no tuvieron una respuesta por parte de quienes eran la cabeza de los equipos: Mauricio Belmar (Gerente de Postventa y Recepción) o Francisco Vinagre (Gerente General).'
  },
]

export default function Findings() {
  return (
    <div className="bg-white">
      <div
        className="text-center max-w-4xl mx-auto px-4 py-8 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8 text-primary">
        <h2 className="text-4xl font-extrabold tracking-tight">La importancia de saber elegir a quién comprar...</h2>
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
                <h3 className="text-2xl font-extrabold text-primary">{feature.name}</h3>
                <p className="mt-2 text-base text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
