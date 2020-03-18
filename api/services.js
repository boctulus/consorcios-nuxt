const arr = [
  {
    'id': 1,
    'name': 'administración general',
    'text': 'La representación de la administración en un consorcio, es muy importante ya que sus funciones son las de preservar la equidad y armonía entre los consorcios, además de llevar los estados financieros, limpieza y mantenimiento que necesite el consorcio, cuotas de cada consorcio y la seguridad de sus copropietarios entre otras necesidades.',
    'img': 'administracion-general-la-plata.png',
    'enabled': true
  },
  {
    'id': 2,
    'name': 'cobro a deudores',
    'text': 'Contamos con la experiencia necesaria para la recuperación de la cuenta vencida. La ley de consorcios de la ciudad de La Plata, manifiesta que es una obligación el pago de cuotas de mantenimiento para quienes viven en consorcio en la ciudad de La Plata. Contamos con la experiencia necesaria para la recuperación de la cuenta vencida. La ley de consorcios de la ciudad de La Plata, manifiesta que es una obligación el pago de cuotas de mantenimiento para quienes viven en consorcio en la ciudad de La Plata.',
    'img': 'cobro-a-deudores-inquilinos.png',
    'enabled': true
  },
  {
    'id': 3,
    'name': 'manejo de recursos',
    'text': 'El mecanismo por el cual garantizamos el buen manejo de los recursos financieros del consorcio, es que nadie por sí sólo tenga acceso directo a las cuentas bancarias. Recomendamos la apertura de una cuenta de cheques e inversión con firmas mancomunadas por parte del comité de vigilancia. La administración únicamente tendrá la función de mediador de los recursos.',
    'img': 'manejo-de-recursos.png',
    'enabled': true
  },
  {
    'id': 4,
    'name': 'seguridad',
    'text': 'Contamos con la experiencia necesaria para conocer las necesidades de seguridad en su consorcio. Con base a un análisis de seguridad patrimonial y necesidades del servicio de los consorcios, ofrecemos proveedores del servicio que están calificados, certificados y debidamente registrados ante el Consejo Nacional de Seguridad Privada (CNSP) además de contar con todos sus elementos registrados ante la Secretaría de Seguridad Pública (SSP).',
    'img': 'seguridad-inmuebles-la-plata.png',
    'enabled': true
  },
  {
    'id': 5,
    'name': 'mantenimiento general',
    'text': 'Ofrecemos el servicio de Mantenimiento Integral de Instalaciones. Los servicios que prestamos son de tipo residencial, comercial e industrial, contamos con capital humano totalmente capacitado para cada servicio brindado. Plomería, carpintería, electricidad, albañilería, remodelación y acabados en general.',
    'img': 'mantenimiento-de-inmuebles.png',
    'enabled': true
  },
  {
    'id': 6,
    'name': 'limpieza',
    'text': 'Contamos con un departamento especializado en la fabricación de productos químicos para limpieza; En cuanto al personal de limpieza ofrecemos opciones diversas con diferentes empresas con las que tenemos relaciones comerciales y son capacitadas por nuestro departamento técnico en el uso y manejo de nuestros productos.',
    'img': 'limpieza-de-inmuebles.png',
    'enabled': true
  },
  {
    'id': 7,
    'name': 'trabajos en altura',
    'text': 'Hoy en día los consorcios por su estructura requieren de un servicio de mantenimiento profesional y especializado en diversas áreas, desde el año de 2005 ofrecemos diversos servicios de mantenimiento y limpieza vertical en altura.',
    'img': 'trabajos-en-altura-limpieza.png',
    'enabled': true
  },
  {
    'id': 8,
    'name': 'lavado de tanques',
    'text': 'Es altamente recomendable que el lavado de su cisterna y tanques se pueda programar como mínimo 2 veces por año, esto con el fin mejorar la calidad de agua para uso personal.',
    'img': 'lavado-de-tanques-edificios.png',
    'enabled': true
  },
  {
    'id': 9,
    'name': 'ascensores',
    'text': 'Los ascensores son una parte importante en una vivienda multifamiliar con múltiples niveles o pisos, ya que brindan al usuario la oportunidad de minimizar esfuerzo y tiempo. Sin embargo, para que un elevador instalado funcione de manera correcta y segura a través del tiempo, se recomienda darle a este equipo el mantenimiento adecuado.',
    'img': 'mantenimiento-de-ascendores-la-plata.png',
    'enabled': true
  },
  {
    'id': 10,
    'name': 'alquiler y venta de propiedades',
    'text': 'Nuestro equipo de especialistas expertos en el mercado inmobiliario estará dedicado a guiarlo con todo el detalle; antes, durante y después de concretada la venta / alquiler de su propiedad.',
    'img': 'venta-alquiler-propiedades.png',
    'enabled': false
  },
  {
    'id': 11,
    'name': 'consergería',
    'text': 'Atención personalizada a consorcios con un enfoque de servicio, solución de problemas y apoyo. Este concepto se adaptó del servicio que brindan en los hoteles.',
    'img': 'consergería-la-plata.png',
    'enabled': false
  },
  {
    'id': 12,
    'name': 'suministro y administración de gas',
    'text': 'Administramos el servicio de gas y emitimos el recibo mensual por departamento además del cobro en domicilio o el pago a cuenta referenciada.',
    'img': 'suministro-administracion-gas.png',
    'enabled': false
  },
  {
    'id': 13,
    'name': 'impermeabilización',
    'text': 'Problemas con proveedores. Somos expertos en aplicación de diversos sistemas de impermeabilización, garantizamos todos nuestros servicios por escrito y por medio de un contrato de prestación de servicios.',
    'img': 'impermebilización.png',
    'enabled': true
  },
  {
    'id': 14,
    'name': 'fumigación',
    'text': 'Las plagas domésticas pueden ser mucho más que una simple molestia, estas pueden convertirse en una amenaza para su propiedad y potencialmente para su salud. Es por ello que es tan importante controlar las plagas y los insectos en su hogar.',
    'img': 'fumigacion-edificios-la-plata.png',
    'enabled': true
  },
  {
    'id': 15,
    'name': 'aire acondicionado',
    'text': 'Contamos con el servicio de suministro e instalación de equipos de aire acondicionado o calefacción, así como en el servicio preventivo y correctivo correspondiente.',
    'img': 'aire-acondicionado-edifcios-la-plata.png',
    'enabled': true
  },
  {
    'id': 16,
    'name': 'bombas de agua',
    'text': 'Contamos con el servicio de mantenimiento a las bombas de agua (periféricas, centrifugas, de presión constante, sumergibles y tanques hidroneumáticos), así como también a los tableros eléctricos de consorcios, con la finalidad de garantizar un abastecimiento constante e ininterrumpido de agua potable para consumo humano.',
    'img': 'bombas-de-agua-consorcio.png',
    'enabled': true
  },
  {
    'id': 17,
    'name': 'jardinería',
    'text': 'Le ofrecemos una Solución Integral a sus necesidades, le damos Mantenimiento a su jardín para mantener su lugar ideal para vivir, pues darles mantenimiento a sus áreas verdes contribuyen a una mejor calidad de vida.',
    'img': 'jardineria-consorcio-la-plata.png',
    'enabled': true
  },
  {
    'id': 18,
    'name': 'mantenimiento de oficinas',
    'text': 'Mantener nuestro espacio de trabajo en un estado óptimo permite no sólo que la producción de una empresa permanezca en los niveles deseados, si no que esta aumente. Por tal motivo realizamos diversos tipos de servicios de mantenimiento, trabajo en el cual contamos con una amplia experiencia.',
    'img': 'mantenimiento-de-oficinas.png',
    'enabled': false
  },
  {
    'id': 19,
    'name': 'centros comerciales',
    'text': 'Nuestro objetivo es incrementar el valor del consorcio del centro comercial y de su función al servicio de comunidad con base del reglamento del régimen de propiedad en consorcio, siendo parte fundamental y activa de los cambios necesarios para satisfacer las necesidades del mercado, entorno de los inversionistas y locatarios.',
    'img': 'administracion-de-centros-comerciales-la-plata.png',
    'enabled': false
  }
];


const getServicios = (cant) => {
  return (cant != null || typeof cant != 'undefined') ? arr.slice(0, cant) : arr;
};


export default getServicios;