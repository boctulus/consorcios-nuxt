<template>
  <div :style="{backgroundColor: '#3C4043'}" >

    <div class="logo_container">
        <n-link to="/home">
          <v-img :src="require('../assets/logov2b_justo.png')" lazy-src class="logo" />
        </n-link>
    </div>      

    <!-- Modal -->
    <div id="serviceModal" v-if="selectedIx">
      <b-container style="color: #ffffff; ">

        <div style="position: absolute; right: 20px; top: 20px; cursor: pointer;  overflow: hidden; z-index:9999;">
              <a href="#" @click="closeModal" class="closeModal">X</a>
        </div>

        <b-row> 
          <b-col sm="12" offset-sm="0"  md="6" offset-md="3" style="margin-top:10vh">       
              <div class="pontano mb-5" style="color: rgb(208, 162, 140); text-transform: uppercase; font-size: 4em; line-height: 0.9;">
                {{servicios[selectedIx].name}}
              </div>

              <div style="text-align:justify; font-size: 1.5em;">
                {{servicios[selectedIx].text}}
              </div>
              <div style="text-align:center;" class="mt-5 mb-4">
                <b-button type="button" id="ask_info" @click="goContactForm">Pedir información</b-button> 
              </div> 
              <div style="text-align:center;">
                <img :src="require(`../assets/servicios/${servicios[selectedIx].img}.png`)" />
              </div>  
          </b-col>          
        </b-row>          
       
      </b-container>
    </div>

    <b-container style="color: #ffffff; "> 
      
        <h1 class="engravers">SERVICIOS</h1>

        <div class="pontano mt-5 mb-5" style="font-size:1.5em; text-align: justify;">
          Nuestra especialidad es la ADMINISTRACIÓN DE CONDÓMINOS, adicional a este servicio contamos con todas las soluciones necesarias para que vivas en un ambiente de tranquilidad y comodidad. Conoce más de nuestros servicios dando click en cada uno de ellos.
        </div>

        <b-row>
         <b-col class="mb-5" md="3" sm="6" style="text-align:center;" v-for="(item, index) in servicios" v-bind:key="item.name">
           <div class="minicontainer" @click="select(index)">
              <p><img :title="item.alt"  style="border: 30px solid rgb(237, 237, 237); padding: 5px;" :src="require(`../assets/servicios/${item.img}.png`)" :alt="item.alt" width="150" height="150" ></p>            
              <h2 class="engravers" style="color: rgb(208, 162, 140); font-size: 2.5em; text-align: center;">{{item.name}}</h2>
              <p>&nbsp;</p>   
           </div>
              
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
      selectedIx: null,
      servicios: [
      {
        'name': 'administración general',
        'text': 'La representación de la administración en un condominio, es muy importante ya que sus funciones son las de preservar la equidad y armonía entre los condóminos, además de llevar los estados financieros, limpieza y mantenimiento que necesite el condominio, cuotas de cada condómino y la seguridad de sus habitantes entre otras necesidades.',
        'img': 'administracion-general-la-plata'
      },
      {
        'name': 'cobro a deudores',
        'text': 'Contamos con la experiencia necesaria para la recuperación de la cuenta vencida. La ley condominal de la Ciudad de México, manifiesta que es una obligación el pago de cuotas de mantenimiento para quienes viven en condominio en la Ciudad de México. Contamos con la experiencia necesaria para la recuperación de la cuenta vencida. La ley condominal de la Ciudad de México, manifiesta que es una obligación el pago de cuotas de mantenimiento para quienes viven en condominio en la Ciudad de México.',
        'img': 'cobro-a-deudores-inquilinos'
      },
      {
        'name': 'manejo de recursos',
        'text': 'El mecanismo por el cual garantizamos el buen manejo de los recursos financieros del condominio, es que nadie por sí sólo tenga acceso directo a las cuentas bancarias. Recomendamos la apertura de una cuenta de cheques e inversión con firmas mancomunadas por parte del comité de vigilancia. La administración únicamente tendrá la función de mediador de los recursos.',
        'img': 'manejo-de-recursos'
      },
      {
        'name': 'seguridad',
        'text': 'Contamos con la experiencia necesaria para conocer las necesidades de seguridad en su condominio. Con base a un análisis de seguridad patrimonial y necesidades del servicio de los condóminos, ofrecemos proveedores del servicio que están calificados, certificados y debidamente registrados ante el Consejo Nacional de Seguridad Privada (CNSP) además de contar con todos sus elementos registrados ante la Secretaría de Seguridad Pública (SSP).',
        'img': 'seguridad-inmuebles-la-plata'
      },
      {
        'name': 'mantenimiento general',
        'text': 'Ofrecemos el servicio de Mantenimiento Integral de Instalaciones. Los servicios que prestamos son de tipo residencial, comercial e industrial, contamos con capital humano totalmente capacitado para cada servicio brindado. Plomería, carpintería, electricidad, albañilería, remodelación y acabados en general.',
        'img': 'mantenimiento-de-inmuebles'
      },
      {
        'name': 'limpieza',
        'text': 'Contamos con un departamento especializado en la fabricación de productos químicos para limpieza; En cuanto al personal de limpieza ofrecemos opciones diversas con diferentes empresas con las que tenemos relaciones comerciales y son capacitadas por nuestro departamento técnico en el uso y manejo de nuestros productos.',
        'img': 'limpieza-de-inmuebles'
      },
      {
        'name': 'trabajos en altura',
        'text': 'Hoy en día los condominios por su estructura requieren de un servicio de mantenimiento profesional y especializado en diversas áreas, desde el año de 2005 ofrecemos diversos servicios de mantenimiento y limpieza vertical en altura.',
        'img': 'trabajos-en-altura-limpieza'
      },
      {
        'name': 'lavado de tanques',
        'text': 'Es altamente recomendable que el lavado de su cisterna y tanques se pueda programar como mínimo 2 veces por año, esto con el fin mejorar la calidad de agua para uso personal.',
        'img': 'lavado-de-tanques-edificios'
      },
      {
        'name': 'ascensores',
        'text': 'Los ascensores son una parte importante en una vivienda multifamiliar con múltiples niveles o pisos, ya que brindan al usuario la oportunidad de minimizar esfuerzo y tiempo. Sin embargo, para que un elevador instalado funcione de manera correcta y segura a través del tiempo, se recomienda darle a este equipo el mantenimiento adecuado.',
        'img': 'mantenimiento-de-ascendores-la-plata'
      },
      {
        'name': 'alquiler y venta de propiedades',
        'text': 'Nuestro equipo de especialistas expertos en el mercado inmobiliario estará dedicado a guiarlo con todo el detalle; antes, durante y después de concretada la venta / alquiler de su propiedad.',
        'img': 'venta-alquiler-propiedades'
      },
      {
        'name': 'consergería',
        'text': 'Atención personalizada a consorcios con un enfoque de servicio, solución de problemas y apoyo. Este concepto se adaptó del servicio que brindan en los hoteles.',
        'img': 'consergería-la-plata'
      },
      {
        'name': 'suministro y administración de gas',
        'text': 'Administramos el servicio de gas y emitimos el recibo mensual por departamento además del cobro en domicilio o el pago a cuenta referenciada.',
        'img': 'suministro-administracion-gas'
      },
      {
        'name': 'impermeabilización',
        'text': 'Problemas con proveedores. Somos expertos en aplicación de diversos sistemas de impermeabilización, garantizamos todos nuestros servicios por escrito y por medio de un contrato de prestación de servicios.',
        'img': 'impermebilización'
      },
      {
        'name': 'fumigación',
        'text': 'Las plagas domésticas pueden ser mucho más que una simple molestia, estas pueden convertirse en una amenaza para su propiedad y potencialmente para su salud. Es por ello que es tan importante controlar las plagas y los insectos en su hogar.',
        'img': 'fumigacion-edificios-la-plata'
      },
      {
        'name': 'aire acondicionado',
        'text': 'Contamos con el servicio de suministro e instalación de equipos de aire acondicionado o calefacción, así como en el servicio preventivo y correctivo correspondiente.',
        'img': 'aire-acondicionado-edifcios-la-plata'
      },
      {
        'name': 'bombas de agua',
        'text': 'Contamos con el servicio de mantenimiento a las bombas de agua (periféricas, centrifugas, de presión constante, sumergibles y tanques hidroneumáticos), así como también a los tableros eléctricos de condominios, con la finalidad de garantizar un abastecimiento constante e ininterrumpido de agua potable para consumo humano.',
        'img': 'bombas-de-agua-consorcio'
      },
      {
        'name': 'jardinería',
        'text': 'Le ofrecemos una Solución Integral a sus necesidades, le damos Mantenimiento a su jardín para mantener su lugar ideal para vivir, pues darles mantenimiento a sus áreas verdes contribuyen a una mejor calidad de vida.',
        'img': 'jardineria-consorcio-la-plata'
      },
      {
        'name': 'mantenimiento de oficinas',
        'text': 'Mantener nuestro espacio de trabajo en un estado óptimo permite no sólo que la producción de una empresa permanezca en los niveles deseados, si no que esta aumente. Por tal motivo realizamos diversos tipos de servicios de mantenimiento, trabajo en el cual contamos con una amplia experiencia.',
        'img': 'mantenimiento-de-oficinas'
      },
      {
        'name': 'centros comerciales',
        'text': 'Nuestro objetivo es incrementar el valor del condominio del centro comercial y de su función al servicio de comunidad con base del reglamento del régimen de propiedad en condominio, siendo parte fundamental y activa de los cambios necesarios para satisfacer las necesidades del mercado, entorno de los inversionistas y locatarios.',
        'img': 'administracion-de-centros-comerciales-la-plata'
      }
    ]
  }),
  created() {
      for (let i=0; i<this.servicios.length;i++){
        this.servicios[i].alt = this.servicios[i].img.split('-').join(' ');
      }
  },
  methods: {
    select(id) {
       this.selectedIx = id; 
       document.querySelector('#hamburger-icon').style.display = "none";
    },
    closeModal(){
      this.selectedIx = null;
      document.querySelector('#hamburger-icon').style.display = "block";
    },
    goContactForm(){
      this.closeModal();
      setTimeout(() => {
          this.$router.push({
              path: '#contacto'
          })
      },500);  
    }
  }
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
  line-height: 0.5em;
  color: #ccc; 
  padding-top:10px; 
}

.minicontainer {
  transition: all .5s ease-in-out;
}

.minicontainer:hover {
  transform: scale(1.1); 
}

#serviceModal {
  width: 100%; 
  height: 100%; 
  position: fixed; 
  top: 0;
  z-index: 6000; 
  color: #fff; 
  background-color: rgba(0, 0, 0, 0.65);
}

.close {
    background-image: url(https://administraciondecondominios.com.mx/habita/habitia-content/plugins/Ultimate_VC_Addons/assets/img/cross.png);
}

.closeModal {
  color:#fff; font-size: 6em; font-weight: 300; 
}

.closeModal:hover {
  text-decoration: none;
}

.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

#ask_info {
    background-color:rgba(0,0,0,0.2) !important;
    border: 1px solid  #D0A28C !important;
    color: #ccc !important;
    border: 1px solid #d0a28c;
    font-family: 'Engravers';
    font-size: 20px;
    height: 50px; 
    width: 300px;
}

#ask_info:hover {
    background-color: #d0a28c !important;
    border: 1px solid #d0a28c;
    border-radius: 10px;
    font-family: 'Engravers';
    font-size: 25px;
}

#ask_info {
  -webkit-transition: all 1s ease; /* Safari and Chrome */
  -moz-transition: all 1s ease; /* Firefox */
  -ms-transition: all 1s ease; /* IE 9 */
  -o-transition: all 1s ease; /* Opera */
  transition: all 1s ease;
}

.logo {
    position: relative;
    top: 1.5vh;
    left: 3%; 
} 

@media screen and (min-width: 360px) and (max-width: 575px) {
  h1 { font-size: 4.5em !important; } 
}
@media screen and (min-width: 576px) and (max-width: 767px) {
  h1 { font-size: 5em !important; } 
}

@media screen and (min-width: 768px) and (max-width: 991px){
  h1 { font-size: 8em !important; } 
}

@media screen and (min-width: 992px) and (max-width: 1199px){
  h1 { font-size: 10em !important; } 
}

@media screen and (min-width: 1200px){
  h1 { font-size: 12em !important; } 
}

</style>