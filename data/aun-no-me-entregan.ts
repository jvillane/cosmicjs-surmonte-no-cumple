interface Label {
  text: string
  color: string
}

interface Item {
  title: string
  label: Label
  paragraphs: string[]
  items: string[]
}

const LABELS: {[key: string]: Label } = {
  ACCESOS_VENTANAS: {
    text: 'Accesos / Ventanas',
    color: 'orange'
  },
  MUROS_CIELOS: {
    text: 'Muros / Cielos',
    color: 'blue'
  },
  MUEBLERIA: {
    text: 'Mueblería',
    color: 'red'
  },
  ELECTRICIDAD: {
    text: 'Electricidad',
    color: 'green'
  },
  ESPECIALIDAD: {
    text: 'Especialidad',
    color: 'pink'
  },
  FONTANERIA: {
    text: 'Fontaneria',
    color: 'yellow'
  },
}

const DATA: Item[] = [
  {
    title: 'Puertas de Acceso',
    label: LABELS.ACCESOS_VENTANAS,
    paragraphs: [
      'Un trabajo profesional y adecuado considera que un correcta preparación e instalación de la puerta.',
      'Algunos de los puntos en los que hemos presenciado desprolijidad de Surmonte y que aplica a cualquier proceso de entrega, independiente de la inmobiliaria, son:',
    ],
    items: [
      'Parece obvio, pero ni la puerta ni el marco deben presentar daños, rayones o manchones (en caso de que se encuentre pintada). Revisa incluso la cara superior, aunque no sea visible a primera vista',
      'Si tiene un ojo mágico verifica que no presente manchas en su interior, o rayones y que el agujero donde se encuentra instalado tenga desprolijidades',
      'Revisa que la manilla no choque con muro o algún mueble al abrirla por completo',
      'Pon especial atención a los bordes y esquinas de la puerta, son las partes que más sufren en el proceso de construcción',
      'Verifica que la puerta no \'baile\', es decir, que estando cerrada y al tratar de moverla, no genere golpes con el marco, sino cada vez que tu vecino abra y cierre su puerta, te afectará su ruido',
    ]
  },
  {
    title: 'Muros y Cielos',
    label: LABELS.MUROS_CIELOS,
    paragraphs: [
      'Sin duda lo más importante al momento de revisar los muros y cielos es que no cuenten con problemas de fisuras y o humedad.',
      'Es poco común encontrar problemas tan evidentes, pues las Inmobiliarias suelen hacer una revisión previa a la entrega, y a veces se conforman con simplemente tratar de disimular los defectos.',
      'Algunos puntos que te invitamos a poner especial atención:',
    ],
    items: [
      'No debe haber evidencia de fisuras o humedad',
      'Revisa que no existan manchas o piquetes, y que no existan \'transparencias\' (debido a que no se aplicaron las manos necesarias de pintura)',
      'No debe existir descascaramiento ni burbujas. De haberlas podría significar un problema de humedad',
      'Verifica que los bordes se encuentren limpios y prolijamente pintados, al igual que los encuentros entre piso, muro, cielo, guardapolvos, marcos de puertas, muebles, ventanas, etc',
      'Las cornisas deben estar uniformes y limpias',
    ]
  },
  {
    title: 'Muebles',
    label: LABELS.MUEBLERIA,
    paragraphs: [
      'La mayor parte de las propiedades se entregan vacías, sin muebles, a excepción de armarios y cocina.',
      'En el caso de Surmonte el amoblado es realizado en general con melamina, que es un material liviano y con tendencia a sufrir torceduras y picaduras cuando no es trabajado de manera correcta.',
      'Cuando revises este item pon atención a lo siguiente:',
    ],
    items: [
      'Revisa que los tapacantos (que cubren el borde de las planchas de melamina) estén presentes en toda la pieza, que se encuentre homogéneo y sin picaduras',
      'Revisa que las puertas dentro de un mismo mueble se encuentren alineadas y niveladas',
      'Tanto las caras internas como externas deben estar impecables, pon especial atención en los bordes y que no existan rayaduras',
      'A veces por error se instalan muebles diseñados para otra topología de departamento, por lo que es importante verificar que no exista pérdida de espacio en el diseño del mueble, por ejemplo, espacio destinado a la evacuación de la campana donde no corresponde',
      'Revisa que no existan caras de muebles que se encuentren hinchadas, sobre todo en cercanías a lavaplatos y lavamanos, podría además evidenciar que existe una filtración de agua',
    ]
  },
  {
    title: 'Instalaciones Eléctricas',
    label: LABELS.ELECTRICIDAD,
    paragraphs: [
      'La revisión de las instalaciones eléctricas debe contemplar la revisión de interruptores, enchufes, luminarias y artefactos eléctricos.',
      'Adicionalmente es necesario validar el correcto funcionamiento del panel eléctrico.',
      'Te recomendamos seguir los siguientes puntos:',
    ],
    items: [
      'Lleva una ampolleta para que puedas comprobar que todos los zoquetes se encuentren funcionales',
      'Lleva el cargador de tu móvil para que puedas comprobar que todos los enchufes se encuentran funcionales',
      'Prueba que todos los quemadores de la cocina funcionen adecuadamente encendiéndolos y moviendo la perilla hasta el mínimo varias veces, verificando que éste no se apague',
      'Prueba el extractor colocando una hoja de papel, la cual debe permanecer pegada mientras se encuentre encendido',
      'Enciende el horno y verifica que efectivamente aumenta la temperatura en el interior',
      'Revisa que el/los extractor(es) de los baños operen correctamente',
      'Verifica que los cables expuestos de los zoquetes, las cajas de los enchufes y las luminarias no tengan manchas de pintura',
    ]
  },
  {
    title: 'Planos de Especialidad',
    label: LABELS.ESPECIALIDAD,
    paragraphs: [
      'Las inmobiliarias no están obligadas a entregar la información de los planos de arquitectura y especialidades \'AS BUILT\' (que deben reflejar la realidad del departamento), pero algunas como Surmonte entregan algunos de ellos en formato digital.',
      'Los planos más importantes son los de especialidades Eléctrico, Calefacción y Gas, junto con el de Arquitectura.',
      'Los 3 primeros los puedes conseguir en la Superintendencia de Electricidad y Compustibles (SEC) presentando la Escritura Pública de Compra Venta, mientras que el de Arquitectura lo puedes obtener en la Municipalidad correspondiente.',
      'Respecto a los planos te recomendamos lo siguiente:',
    ],
    items: [
      'Solicita a la Inmobiliaria que te entregue de manera previa a la entrega del departamento los planos de especialidad',
      'Si te los entregan en formato CAD, lo cuál es muy factible, te recomendamos que consigas a alguien que lo pueda traspasar a formato PDF',
      'Contar con el plano te permitirá poder comparar lo establecido en el plano respecto de la realidad',
      'En Inmobiliarias como Surmonte hemos detectado puntos eléctricos o de iluminación ausentes o mal ubicados, enchufes con menos puntos de conexión que los declarados en el plano.',
      'También hemos detectado discrepancias respecto al Plano de Arquitectura, por ejemplo, en la altura de barandas en balcones o terrazas (que debe ser de un mínimo de 0.95 mt por normativa).',
    ]
  },
  {
    title: 'Ventanas y Ventanales',
    label: LABELS.ACCESOS_VENTANAS,
    paragraphs: [
      'Las ventanas y ventanales deben estar en óptimas condiciones, y para poder revisarlos debes exigir que se encuentren absolutamente limpias.',
      'Algunos de los puntos que te recomendamos revisar son los siguientes:',
    ],
    items: [
      'Te recomendamos abrir y cerrar ventanas y ventanales, si son abatibles deben poder abrirse sin problemas, y si son corredizas lo debe hacer sin necesidad de aplicar mucha fuerza',
      'Mira de cerca y en detalle cada uno de los ventanales buscando rayas, usa la cinta de enmascarar (conocida como \'masking tape\') y marca cad uno de los rayones',
      'Luego de marcar los rayones toma 2 metros de distancia del ventanal, si los rayones son visibles a simple vista debes exigir el recambio del panel dañado',
      'Verifica que la línea de diseño de las manillas es homogénea en todo el inmueble.',
    ]
  },
  {
    title: 'Cocina y Baños',
    label: LABELS.FONTANERIA,
    paragraphs: [
      'Si la Inmobiliaria no ha desarrollado un trabajo serio y minucioso es usual que en los 3 primeros años, a medida que los departamentos se pueblan y se le da uso a las griferías, se comenzarán a notar las desprolijidades del trabajo y aparecerán las fugas de agua.',
      'Aforunadamente están obligadas a solucionar este tipo de desperfectos por los primeros 5 años desde la compra del departamento, sin embargo garantizar que realicen el trabajo de diagnóstico y reparación de manera ágil y correcta no es una tarea simple cuando te enfrentas a un Inmobiliaria como Surmonte.',
      'Pero no todo está perdido al momento de la entrega, existen algunos puntos que si podrás verificar:',
    ],
    items: [
      'Te recomendamos que eches a correr el agua fría en todos los baños y cocinas',
      'Lo anterior te permitirá verificar cómo se modifica el flujo de agua cuando se está usando en más de 1 dispositivo',
      'Luego te recomendamos que eches a correr el agua caliente en 1 ducha y en el lavaplatos, verificando que el flujo y temperatura sea suficiente para realizar ambas acciones simultáneamente',
      'Revisa que el uso y acumulación de agua no hayan provocado alguna fuga evidente',
    ]
  },
]

export default DATA;
