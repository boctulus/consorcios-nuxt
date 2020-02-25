<template>
  <div :style="{backgroundColor: '#3C4043'}" >

    <v-img src="https://i.imgur.com/mL8PTQ4.png" lazy-src class="logo" />

    <b-container style="color: #ffffff;"> 
             <h1 class="engravers text-mobile mb-3" style="color: #ccc; font-size: 12em;">SERVICIOS</h1>

        <b-row>
         
         <b-col class="mb-5" md="3" sm="6" style="text-align:center;" v-for="item in servicios" v-bind:key="item.name">
            <p><img title="manejo-de-recursos servicios" class="s-3 aligncenter custom-ult-modal overlay-show" style="border: 30px solid rgb(237, 237, 237); padding: 5px;" :src="item.img" alt="manejo-de-recursos-ciudad-de-mexico servicios" width="150" height="150" ></p>
            
            <h2 class="engravers s-3 fake-link custom-ult-modal overlay-show" style="color: rgb(208, 162, 140); font-size: 30px; text-align: center;">{{item.name}}</h2>
            <p>&nbsp;</p>
         </b-col>

        </b-row>
       
    </b-container>

    
  </div>
</template>

<script>

import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

export default {  
  layout: 'home',
  data: () => ({
       servicios: [
      {
        'name': 'administración general',
        'text': 'La representación de la administración en un condominio, es muy importante ya que sus funciones son las de preservar la equidad y armonía entre los condóminos, además de llevar los estados financieros, limpieza y mantenimiento que necesite el condominio, cuotas de cada condómino y la seguridad de sus habitantes entre otras necesidades.',
        'img': 'administracion-general-la-plata.png'
      },
      {
        'name': 'cobro a deudores',
        'text': 'Contamos con la experiencia necesaria para la recuperación de la cuenta vencida. La ley condominal de la Ciudad de México, manifiesta que es una obligación el pago de cuotas de mantenimiento para quienes viven en condominio en la Ciudad de México. Contamos con la experiencia necesaria para la recuperación de la cuenta vencida. La ley condominal de la Ciudad de México, manifiesta que es una obligación el pago de cuotas de mantenimiento para quienes viven en condominio en la Ciudad de México.',
        'img': 'cobro-a-deudores-inquilinos.png'
      },
      {
        'name': 'manejo de recursos',
        'text': 'El mecanismo por el cual garantizamos el buen manejo de los recursos financieros del condominio, es que nadie por sí sólo tenga acceso directo a las cuentas bancarias. <p/>Recomendamos la apertura de una cuenta de cheques e inversión con firmas mancomunadas por parte del comité de vigilancia. La administración únicamente tendrá la función de mediador de los recursos.',
        'img': 'manejo-de-recursos.png'
      },
      {
        'name': 'seguridad',
        'text': 'Contamos con la experiencia necesaria para conocer las necesidades de seguridad en su condominio. Con base a un análisis de seguridad patrimonial y necesidades del servicio de los condóminos, ofrecemos proveedores del servicio que están calificados, certificados y debidamente registrados ante el Consejo Nacional de Seguridad Privada (CNSP) además de contar con todos sus elementos registrados ante la Secretaría de Seguridad Pública (SSP).',
        'img': 'seguridad-inmuebles-la-plata.png'
      },
      {
        'name': 'mantenimiento general',
        'text': 'Ofrecemos el servicio de Mantenimiento Integral de Instalaciones. Los servicios que prestamos son de tipo residencial, comercial e industrial, contamos con capital humano totalmente capacitado para cada servicio brindado. Plomería, carpintería, electricidad, albañilería, remodelación y acabados en general.',
        'img': 'mantenimiento-de-inmuebles.png'
      },
      {
        'name': 'limpieza',
        'text': 'Contamos con un departamento especializado en la fabricación de productos químicos para limpieza; En cuanto al personal de limpieza ofrecemos opciones diversas con diferentes empresas con las que tenemos relaciones comerciales y son capacitadas por nuestro departamento técnico en el uso y manejo de nuestros productos.',
        'img': 'limpieza-de-inmuebles.png'
      },
      {
        'name': 'trabajos en altura',
        'text': 'Hoy en día los condominios por su estructura requieren de un servicio de mantenimiento profesional y especializado en diversas áreas, desde el año de 2005 ofrecemos diversos servicios de mantenimiento y limpieza vertical en altura.',
        'img': 'trabajos-en-altura-limpieza.png'
      },
      {
        'name': 'lavado de tanques',
        'text': 'Es altamente recomendable que el lavado de su cisterna y tanques se pueda programar como mínimo 2 veces por año, esto con el fin mejorar la calidad de agua para uso personal.',
        'img': 'lavado-de-tanques-edificios.png'
      },
      {
        'name': 'ascensores',
        'text': 'Los ascensores son una parte importante en una vivienda multifamiliar con múltiples niveles o pisos, ya que brindan al usuario la oportunidad de minimizar esfuerzo y tiempo. Sin embargo, para que un elevador instalado funcione de manera correcta y segura a través del tiempo, se recomienda darle a este equipo el mantenimiento adecuado.',
        'img': 'mantenimiento-de-ascendores-la-plata.png'
      },
      {
        'name': 'alquiler y venta de propiedades',
        'text': 'Nuestro equipo de especialistas expertos en el mercado inmobiliario estará dedicado a guiarlo con todo el detalle; antes, durante y después de concretada la venta / alquiler de su propiedad.',
        'img': 'venta-alquiler-propiedades.png'
      },
      {
        'name': 'consergería',
        'text': 'Atención personalizada a consorcios con un enfoque de servicio, solución de problemas y apoyo. Este concepto se adaptó del servicio que brindan en los hoteles.',
        'img': 'consergería-la-plata.png'
      },
      {
        'name': 'suministro y administración de gas',
        'text': 'Administramos el servicio de gas y emitimos el recibo mensual por departamento además del cobro en domicilio o el pago a cuenta referenciada.',
        'img': 'suministro-administracion-gas.png'
      },
      {
        'name': 'impermeabilización',
        'text': 'Problemas con proveedores. Somos expertos en aplicación de diversos sistemas de impermeabilización, garantizamos todos nuestros servicios por escrito y por medio de un contrato de prestación de servicios.',
        'img': 'impermebilización.png'
      },
      {
        'name': 'fumigación',
        'text': 'Las plagas domésticas pueden ser mucho más que una simple molestia, estas pueden convertirse en una amenaza para su propiedad y potencialmente para su salud. Es por ello que es tan importante controlar las plagas y los insectos en su hogar.',
        'img': 'fumigacion-edificios-la-plata.png'
      },
      {
        'name': 'aire acondicionado',
        'text': 'Contamos con el servicio de suministro e instalación de equipos de aire acondicionado o calefacción, así como en el servicio preventivo y correctivo correspondiente.',
        'img': 'aire-acondicionado-edifcios-la-plata.png'
      },
      {
        'name': 'bombas de agua',
        'text': 'Contamos con el servicio de mantenimiento a las bombas de agua (periféricas, centrifugas, de presión constante, sumergibles y tanques hidroneumáticos), así como también a los tableros eléctricos de condominios, con la finalidad de garantizar un abastecimiento constante e ininterrumpido de agua potable para consumo humano.',
        'img': 'bombas-de-agua-consorcio.png'
      },
      {
        'name': 'jardinería',
        'text': 'Le ofrecemos una Solución Integral a sus necesidades, le damos Mantenimiento a su jardín para mantener su lugar ideal para vivir, pues darles mantenimiento a sus áreas verdes contribuyen a una mejor calidad de vida.',
        'img': 'jardineria-consorcio-la-plata.png'
      },
      {
        'name': 'mantenimiento de oficinas',
        'text': 'Mantener nuestro espacio de trabajo en un estado óptimo permite no sólo que la producción de una empresa permanezca en los niveles deseados, si no que esta aumente. Por tal motivo realizamos diversos tipos de servicios de mantenimiento, trabajo en el cual contamos con una amplia experiencia.',
        'img': 'mantenimiento-de-oficinas.png'
      },
      {
        'name': 'centros comerciales',
        'text': 'Nuestro objetivo es incrementar el valor del condominio del centro comercial y de su función al servicio de comunidad con base del reglamento del régimen de propiedad en condominio, siendo parte fundamental y activa de los cambios necesarios para satisfacer las necesidades del mercado, entorno de los inversionistas y locatarios.',
        'img': 'administracion-de-centros-comerciales-la-plata.png'
      }
    ]
  })  
}
</script>


<style scoped>
.fake-link {
    text-transform: lowercase;
}

h1, h2, h3, h4, h5, h6 {
    color: rgb(185, 203, 217);
}

h1, h2, h3, h4, h5, h6 {
    color: #2c3e50;
}

h1 {
  text-align: center;
}


.logo {
    z-index:4000; 
    width: 14em;
    position: relative;
    top: 5vh;
    left: 3%; 
} 
</style>