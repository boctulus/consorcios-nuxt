/* 
  Insertar posts desde pruebas/posts.php
*/
const arr = [
  {  
    id: 61,
    title: '¿Qué es un condominio?',
    content: `El sector inmobiliario en la ciudad de México esta en crecimiento, la falta de espacios para vivienda se reduce por lo que vivir en condominios es cada vez mas frecuente, pero ¿Qué es un condominio? El inmueble que como propiedad privada reúne un derecho singular y exclusivo sobre una unidad de propiedad exclusiva (departamento, casa o local) y un derecho de copropiedad sobre elementos y partes comunes (terreno, cimientos, estructura, muros de carga, techos, azoteas, fachadas, patios, jardines, andadores, vestíbulos, escaleras y sus cubos, equipos e instalaciones, etc.).</p>
    <p><img title="%C2%BFQu%C3%A9-es-un-condominio ¿Qué es un condominio? " class="alignnone size-full wp-image-518" src="https://administraciondecondominios.com.mx/habita/habitia-content/uploads/2017/08/%C2%BFQu%C3%A9-es-un-condominio.jpeg" alt="%C2%BFQu%C3%A9-es-un-condominio ¿Qué es un condominio? " width="276" height="183"></p>
    <p>Los condominios de acuerdo con sus características de estructura y uso, pueden ser:</p>
    <p>Por su estructura.</p>
    <ol><li>Condominio vertical: el inmueble edificado de forma vertical en varios niveles en un terreno común, con unidades de propiedad exclusiva y derechos de copropiedad sobre el suelo y demás elementos y partes comunes para su uso y disfrute.</li>
    <li>Condominio horizontal: el inmueble con construcción horizontal donde el condómino tiene derecho de uso exclusivo de parte de un terreno y es propietario de la edificación establecida en el mismo, pudiendo compartir o no su estructura y medianería, siendo titular de un derecho de copropiedad para el uso y disfrute de las áreas del terreno, construcciones e instalaciones destinadas al uso común.</li>
    <li>Condominio mixto: formado por condominios verticales y horizontales, que pueden estar constituidos en grupos de unidades de propiedad exclusiva como: edificios, cuerpos, torres, manzanas, secciones o zonas.</li>
    </ol><p>Por su uso.</p>
    <ol><li>Habitacional: aquellos en los que las unidades de propiedad exclusiva están destinadas a la vivienda.</li>
    <li>Comercial o de servicios: aquellos en los que las unidades de propiedad exclusivas están destinadas al giro o servicio que corresponda según su actividad.</li>
    <li>Industrial: aquellos en donde las unidades de propiedad exclusiva se destinan a actividades propias del ramo.</li>
    <li>Mixtos: aquellos en donde las unidades de propiedad exclusiva se destinan a dos o más de los usos señalados en los incisos anteriores.</li>
    </ol><p>Para mayores informes del servicio profesional para <strong>administración de condominios</strong> visita: <a href="https://administraciondecondominios.com.mx/administracion-de-condominios/">ADMINISTRACIÓN DE CONDOMINIOS</a>`,
    slug: 'derechos-y-obligaciones-20200410'
  },
  {  
    id: 60,
    title: '¿Qué es una unidad de propiedad privativa?',
    content: `bla bla bla`,
    slug: 'obligaciones-20200410'
  },
  {  
    id: 59,
    title: '¿Cuáles son las áreas y bienes de propiedad común?',
    content: `bla bla 2`,
    slug: 'expensas-20200410'
  }
];


const getUsuarios = (cant) => {
  return (cant != null || typeof cant != 'undefined') ? arr.slice(0, cant) : arr;
};


export default getUsuarios;