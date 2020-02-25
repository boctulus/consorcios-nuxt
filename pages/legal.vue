<template>
  <div :style="{backgroundImage:'url(https://i.imgur.com/urEubtE.jpg)', minHeight: '100vh'}" >
  
    <!-- https://i.imgur.com/eR7p5XE.png -->
    <v-img src="https://i.imgur.com/mL8PTQ4.png" lazy-src class="logo" />

    <b-container style="color: #ffffff;"> 
       
       <!-- color: #808b97 -->
        <h1 class="engravers text-mobile mt-3 mb-3" style="color: #ccc; font-size: 6em;">MARCO LEGAL</h1>

        <b-row>
          <b-col class="mb-5" md="6" v-for="item in documents" v-bind:key="item.name">
            <h2 style="font-size: 20px;"><strong><span class="pontano" style="color: #d0a28c;">{{item.name}}L</span></strong></h2>
            <p>&nbsp;</p>   

            <div class="btn" style="text-align: center;"><span style="font-size: 1.2em;"><strong><a :href="item.file" target="_blank" rel="noopener noreferrer"><span class="aft">DESCARGAR</span></a></strong></span></div>
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
    documents: [
      {
        'name': 'LEY DE PROPIEDAD EN CONDOMINIO DE INMUEBLES PARA EL DISTRITO FEDERAL',
        'file': 'http://www.paot.org.mx/centro/leyes/df/pdf/2015/LEY_PROPIEDAD_CONDOMINIO_INMUEBLES_13_01_2015.pdf'
      },
      {
        'name': 'REGLAMENTO DE LA LEY DE PROPIEDAD EN CONDOMINIO DE INMUEBLES PARA EL DISTRITO FEDERAL',
        'file': 'http://www.aldf.gob.mx/archivo-0f05874fac7a0a4b94b9935dd0998eae.pdf'
      },
      {
        'name': 'LEY DE CULTURA CÍVICA D.F.',
        'file': 'http://www.aldf.gob.mx/archivo-0f05874fac7a0a4b94b9935dd0998eae.pdf'
      },
      {
        'name': 'LEY DE PROPIEDAD EN CONDOMINIO EDO. DE MEX.',
        'file': 'http://www.aldf.gob.mx/archivo-0f05874fac7a0a4b94b9935dd0998eae.pdf'
      },
      {
        'name': 'LEY DE PROCURADURÍA SOCIAL DEL D.F.',
        'file': 'http://www.aldf.gob.mx/archivo-0f05874fac7a0a4b94b9935dd0998eae.pdf'
      }
    ]
  })  
}
</script>


<style scoped>
@font-face {
	font-family: Pontano;  
	src: url('../static/fonts/pontano.ttf');  
	font-weight: normal;  
}

@font-face {
	font-family: Engravers;  
	src: url('../static/fonts/engravers.otf');  
	font-weight: normal;  
}

.pontano{
    font-family: Pontano;
}

.engravers{
    font-family: Engravers;
}

h1{
    font-family: 'Engravers', Sans-serif;
    text-align: center;
}

body{
    font-family: 'Pontano', Sans-serif;
}

a:hover {
  text-decoration: none;
}

.aft {
  padding: 1em 0 1em 2em;
  /* #808b97 */
  color: #ccc;
}

/*animaciòn del bot´ón*/
.btn {
  padding: 10px;
  text-align: center;
  background-image: linear-gradient(to right, #d0a28c 20%, transparent 20%), linear-gradient(to bottom, transparent, transparent), linear-gradient(to left, transparent 70%, #d0a28c 30%), linear-gradient(to top, #d0a28c 100%, #d0a28c);
  background-origin: border-box;
  background-size: 100% 3px, 3px 100%, 100% 3px, 3px 100%;
  background-position: top left, top right, bottom right, bottom left;
  background-repeat: no-repeat;
  font-family: Engravers;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
   -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.btn:hover{
  background-image:none;
}

.btn:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  right:100%;
  bottom: 0;
  background: #d0a28c;
  height: 3px;
  -webkit-transition-property: right;
  transition-property: right;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}

.btn:hover:before, .btn:focus:before, .btn:active:before {
  right: 0;
}

.logo {
    position: relative;
    top: 5vh;
    left: 3%; 
} 

/* texto pequeño en movil*/
@media only screen and (max-width: 800px){
    .text-mobile{
        font-size: 3em !important;
        /* text-align: left; */
    }    
}
</style>