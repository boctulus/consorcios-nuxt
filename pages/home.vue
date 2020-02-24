<template>
  <div>
      <!--full-page ref="fullpage" :options="options" id="fullpage"-->
        
        <v-img src="https://i.imgur.com/mL8PTQ4.png" lazy-src class="logo" />

        <v-img :src="require('../assets/administracion-profesional-de-condominios-1.jpg')" lazy-src class="section img img1 full_height_img" > 

          <div class="h1_wrapper">
            <h1 style="text-align: center; font-weight:700;">ADMINISTRACIÓN DE CONSORCIOS</h1>
          </div>

          <div class="txt_anim_wrapper" style="filter: brightness(1.5); font-weight: 500; text-transform: uppercase;">
            <TextAnimation 
              forward-delay="80" 
              backward-delay="15" 
              clearing-delay="1000"
              v-bind:messages = "['Seriedad',
                                  'Eficacia',
                                  'Número 1 en La Plata',
                                  'El Grove'
              ]"
              class="engravers txt_anim"
              >
            </TextAnimation>                
          </div>

          <v-layout justify-center class="btn_wrapper">              
            <div class="btn" style="text-align: center;"><span style="font-size:1.5em" class="aft">SABER MÁS</span></div>
          </v-layout>      
            
      
        </v-img>

        <!-- 
          https://github.com/SSENSE/vue-carousel 
        -->
        <header class="carousel">
          <carousel 
                  :per-page="1" 
                  :autoplay="true" 
                  :loop="true" 
                  pagination-position="bottom-overlay"
                  paginationActiveColor="#D0A28C"
          >

            <slide>
              <div class="item">
                      <img src="https://i.imgur.com/okn0Zy1.jpg" alt="images not found">
                      <div class="cover">
                          <div class="container">
                              <div class="header-content">
                                  <div class="line animated bounceInLeft"></div>
                                  <h2>Ofrecer soluciones efectivas en la administración de inmuebles</h2>
                                  <h1>Misión</h1>
                                  <h4>Brindando un alto estándar de eficiencia, confort, tranquilidad y seguridad a un precio razonable y justo.</h4>
                              </div>
                          </div>
                      </div>
                </div>
            </slide>    

            <slide>
                <div class="item">
                      <img src="https://i.imgur.com/MT4sAY6.jpg" alt="images not found">
                      <div class="cover">
                          <div class="container">
                              <div class="header-content">
                                  <div class="line"></div>
                                  <h2>Honestidad, claridad y excelente trato</h2>
                                  <h1>Visión</h1>
                                  <h4>Brindar un trato directo hacia nuestros clientes así como por el manejo eficiente de información por medio de tecnología de punta.</h4>
                              </div>
                          </div>
                      </div>
               </div>   
            </slide>

         

            <slide>
              <div class="item">
                    <img src="https://i.imgur.com/jeORORh.jpg" alt="images not found">
                    <div class="cover">
                        <div class="container">
                            <div class="header-content">
                                <div class="line animated bounceInLeft"></div>
                                <h2>Lo más importante son nuestros</h2>
                                <h1>Valores</h1>
                                <h4>Confianza, responsabilidad, transparencia, ética y respeto nos definen.</h4>
                            </div>
                        </div>
                     </div>
              </div>    
            </slide>  
          </carousel>        
        </header>


        <v-img :src="require('../assets/administracion-integral-condominios-df-cdmx_recortado1.jpg')" lazy-src >
          <b-container style="color: #ffffff; margin-top: 50px;" id="somos">     

            <b-row>
            <b-col sm="12" md="6">
              <v-img   :src="require('../assets/torre_juan2.png')" lazy-src class="quienes_img" style="margin-bottom: 50px;"   />
            </b-col>

            <b-col sm="12" md="6"  class="mt-3">  
              <div style="line-height: 2em;">
                <p><span class="engravers text-mobile" style="color: rgb(128, 139, 151); font-size: 5em; --darkreader-inline-color:#b8b3a8;" >¿QUIÉNES</span></p>
                <p><span class="engravers text-mobile" style="color: rgb(128, 139, 151); font-size: 5em; --darkreader-inline-color:#b8b3a8;" >SOMOS?</span></p>
              </div>

              <div class="pontano" style="font-size: 23px; padding-top: 15px; padding-bottom: 30px; text-align: justify; color: rgb(184, 179, 168) !important;">
                  EL GROVE es una empresa de administración de consorcios de la ciudad de La Plata con trayectoria y experiencia en el sector.<p/>

                  Somos una empresa especializada en la administración de consorcios profesional, que cuenta con un equipo de profesionales expertos en el ramo.<p/>

                  EL GROVE sabe sacar el aprovecho máximo a los recursos monetarios y activos físicos con el fin de mejorar la calidad de vida. Obteniendo los mejores niveles de sana convivencia, seguridad, limpieza, mantenimiento y la mayor plusvalía para el consorcio.
              </div>

            </b-col>

          </b-row>
        </b-container>  
        </v-img>      
           
              
        <v-img :src="require('../assets/profesionales-certificados-prosoc.png')"    lazy-src class="img img4" id="contacto">
          <b-container style="color: #ffffff;">        
                <b-row class="mb-5 mt-5 mx-auto"><h3 class="contact_form_h">CONTACTO</h3></b-row>  

                <b-row>
                  <b-col md="6" class="engravers">
                    <b-row class="mb-3 ml-auto contact_info">Teléfono: (221) 15 545-2109</b-row>
                    <b-row class="mb-3 ml-auto contact_info">Correo: adm.elgrove@outlook.com</b-row>
                    <b-row class="mb-3 ml-auto contact_info" style="padding-bottom: 10px;">Dirección: calle 28 nro 167, La Plata, Bs As</b-row>
                    <b-row class="mb-3 ml-auto contact_info">                      
                      <img src="https://i.imgur.com/npweaNh.png" alt="" width="20" height="20"/>
                      <span class="engravers" style="color: #ffffff; padding-left:8px;"><a style="color: white; text-decoration: none; font-size: 20px;" href="/blog" target="_blank" rel="noopener noreferrer">BLOG </a></span>
                    </b-row>
                    <b-row class="mx-auto">
                      <!-- https://www.maps.ie/create-google-map/ -->
                      <div style="width: 100%"><iframe width="100%" height="276" src="https://maps.google.com/maps?width=100%&amp;height=276&amp;hl=en&amp;q=CALLE%2028%20NRO%20167%2C%20LA%20PLATA%2C%20ARGENTINA+(El%20Grove)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/coordinates.html">gps coordinates</a></iframe></div>
                    </b-row>
                  </b-col>

                  <b-col md="6"  class="mt-3">
                    <b-row>
                    <b-col md="6" sm="12">

                      <b-form-group
                      label="NOMBRE"
                      label-for="input-1"
                      class="engravers label"
                      >
                      <b-form-input id="input-1" trim class="footer-input"></b-form-input>
                      </b-form-group>   

                    </b-col>
                    
                    <b-col md="6" sm="12">

                      <b-form-group
                      label="TELEFONO"
                      label-for="input-2"
                      class="engravers label"
                      >
                      <b-form-input id="input-2" trim class="footer-input"></b-form-input>
                      </b-form-group>   

                    </b-col>
                    </b-row>    
                  
                  
                  <b-form-group
                    label="EMAIL"
                    label-for="input-3"
                    class="engravers label"
                  >
                    <b-form-input id="input-3" trim class="footer-input"></b-form-input>
                  </b-form-group>   

                  <b-form-group
                    label="SERVICIO"
                    label-for="input-4"
                    class="engravers label"
                  >
                    <b-form-input id="input-4" trim class="footer-input"></b-form-input>
                  </b-form-group>  

                  <b-form-group
                    label="CONSULTA"
                    label-for="input-4"
                    class="engravers label"
                  >
                    <b-form-textarea
                    id="input-5"
                    placeholder="Su consulta"
                    rows="3"
                    max-rows="6"
                    class="footer-input"
                    ></b-form-textarea>
                  </b-form-group>

                  <b-button type="submit" block class="footer-input">Enviar</b-button> 
                  </b-col>
                </b-row>                  
                
          </b-container>
        </v-img>	


      <!--/full-page--> 
  </div>
</template>

<script>
import TextAnimation from '@/components/TextAnimation'

import { required, email, max } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import { Carousel, Slide } from 'vue-carousel';

setInteractionMode('eager')

extend('required', {
  ...required,
  message: 'Field can not be empty',
})

extend('max', {
  ...max,
  message: 'The name field may not be greater than {length} characters',
})

extend('email', {
  ...email,
  message: 'This field must be a valid email',
})

export default {  
  layout: 'home',
  data: () => ({
    /*
    options: {
      licenseKey: 'YOUR KEY HERE',
    },
    */
    name: '',
    email: '',
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: null,
  }),
  methods: {
    submit () {
      this.$refs.observer.validate()
    },
    clear () {
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = null
      this.$refs.observer.reset()
    },
  },
  components: {
    TextAnimation,
    ValidationProvider,
    ValidationObserver,    
    Carousel,
    Slide
  }
}
</script>


<style scoped>

.aft {
  color: #ccc;
  padding: 1em 0 1em 2em;
  font-size: 1.5em;
}

#coti{
    background-image:url(https://administraciondecondominios.com.mx/habita/habitia-content/uploads/2019/07/administracion-profesional-de-condominios-1.jpg); 
    background-repeat: no-repeat;
    background-attachment: fixed;
}

@font-face {
	font-family: Pontano;  
	src: url(https://administraciondecondominios.com.mx/habita/fonts/pontano.ttf);  
	font-weight: normal;  
}

@font-face {
	font-family: Engravers;  
	src: url(https://administraciondecondominios.com.mx/habita/fonts/engravers.otf);  
	font-weight: normal;  
}

.engravers {
    font-family: 'Engravers', Sans-serif !important;
}

.pontano {
    font-family: 'Pontano', Sans-serif !important;
}

h1 {
    font-family: 'Engravers', Sans-serif;
}

body {
    font-family: 'Pontano', Sans-serif;
}

section .item {
	height: 100vh;
	position: relative;
}

section .item img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

section .item .cover {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	/* background: rgba(0, 0, 0, 0.6); */
}

.img1 {
  background-color: #2D5EAD;
}

.img4 {
  background-color: #50575E;
}

.full_height_img {
    min-height: 50.5vh;
}

.h1_wrapper {
  position: absolute;
  top: 30vh;
  width: 100%;
  text-align: center;
}

h1 {
  font-size: 3.5em;
  color: #FFFFFF;
  filter: brightness(1.3);
  font-weight: 400;
  padding-left:  1em;
  padding-right: 1em;
}

.txt_anim_wrapper {
  position: absolute;
  top: 50.5vh;
  width: 100%;
  text-align: center; 
}

.txt_anim { 
  font-size: 3.5em;
  color: white;
  font-weight: lighter;
}

.btn_wrapper {
  position: absolute;
  top: 75vh;
  width: 100%;
  text-align: center;
}

/* animaciòn del botón */

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

/*  */

.logo {
    z-index:4000; 
    width: 14em;
    position: absolute;
    top: 5vh;
    left: 3%; 
}    

header .item {
  height: 100vh;
  position: relative;
}

header .item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

header .item .cover {
  padding: 75px 0;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
}

header .item .cover .header-content {
  position: relative;
  padding: 56px;
  overflow: hidden;
}

header .item .cover .header-content .line {
  content: "";
  display: inline-block;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  border: 9px solid #D0A28C;  
  -webkit-clip-path: polygon(0 0, 60% 0, 36% 100%, 0 100%);
  clip-path: polygon(0 0, 60% 0, 36% 100%, 0 100%);
}

header .item .cover .header-content h2 {
  font-weight: 300;
  font-size: 35px;
  color: #fff;
}

header .item .cover .header-content h1 {
  font-size: 56px;
  font-weight: 600;
  margin: 5px 0 20px;
  word-spacing: 3px;
  color: #fff;
}

header .item .cover .header-content h4 {
  font-size: 24px;
  font-weight: 300;
  line-height: 36px;
  color: #fff;
}

.txt_anim { 
  font-size: 3.5em;
  color: white;
  font-weight: lighter;
}

.img1 {
  background-color: #2D5EAD;
}

.img4 {
  background-color: #50575E;
}

/* Quienes somos */

.quienes_img {
  margin-top:24px;
}


/* Footer */

.contact_form_h {
  font-size: 4.5em;
}

.contact_info {
  text-transform: uppercase;
}

.footer-input {
  background-color:rgba(0,0,0,0.2) !important;
  border: 1px solid rgb(111, 66, 45) !important;
  color: #ffffff;
}

.label {
  font-size:1.5em;
  font-weight: 600;
}

.carousel {
    display:none;
}

/* 

  Media Queries 

*/

/* 

  Media Queries 

*/

/* Dispositivos cuadrados o casi */

@media screen and (min-aspect-ratio:760/1000) and (max-aspect-ratio:1300/1000) {
  .full_height_img {
    height: 105vh;
  }

  .h1_wrapper {
    position: absolute;
    top: 35vh;
    width: 100%;
    text-align: center;
  }

  .txt_anim_wrapper {
    display:none; 
  }
  
  .btn_wrapper {
    display:none;
  }
}

@media screen and (min-width: 1024px) {
	.carousel {
    display:block;
  }
}


@media screen and (max-width: 360px) {
  .contact_form_h {
    font-size: 4em;
  }

  .footer-input {
    background-color:rgba(0,0,0,0) !important;
    border: 1px solid rgb(111, 66, 45) !important;  
    width: calc(100vw - 30px); 
  }

  h1, .txt_anim { font-size: 2em !important; }
}

@media screen and (max-width: 360px) and (orientation:landscape)  {
 .h1_wrapper {
    display: none;
  }

  .full_height_img {
    min-height: 105vh;
  }

  .img4 {
    min-height: 105vh;
  }

	.txt_anim_wrapper { display: none; }

  .btn_wrapper {
    display: none;
  }
}

@media screen and (max-width: 360px) and (orientation:portrait)  {
  h1, .txt_anim { font-size: 2em !important; }

  .full_height_img {
    min-height: 50.5vh;
  }

  .h1_wrapper {
    display:none;
  }

	.txt_anim_wrapper { display: none; }

  .btn_wrapper {
    display: none; 
  }
   
  header { display: none; }  
}


/* 
  iPhone 5/SE
*/
@media screen and (min-width: 360px) and (max-width: 575px) {
	h1, .txt_anim { font-size: 2.2em !important; }

  .aft {
    font-size: 0.8em;
    padding: 0.15em 0.3em 0.15em 0.3em;
  }
}

/*
  480x360 568x320
*/
@media screen and (min-width: 360px)  and (max-width: 575px) and (orientation:landscape) {
  .h1_wrapper {
    display: none;
  }

  .full_height_img {
    height: 105vh;
  }

  .img4 {
    min-height: 105vh;
  }

	.txt_anim_wrapper { display: none; }

  .btn_wrapper {
    display: none;
  }

}

/* 
  360x480
*/
@media screen and (min-width: 360px)  and (max-width: 575px) and (orientation:portrait) {

  h1, .txt_anim { font-size: 1.8em !important; }

  .full_height_img {
    height: 50.5vh;
  }

  .h1_wrapper {
    position: absolute;
    top: 33vh;
    width: 100%;
    text-align: center;
  }

	.txt_anim_wrapper { display: none; }

  .btn_wrapper {
    display: none; 
  }
   
  header { display: none; }  
}

@media screen and (min-width: 576px) and (max-width: 767px) {
  h1, .txt_anim { font-size: 3em !important; }
}

/*
  Galaxy S5, Pixel 2, iPhone 5/SE, iPhone 6/7/8
*/
@media screen and (min-width: 576px) and (max-width: 767px) and (orientation:landscape) {

  h1, .txt_anim { font-size: 3em !important; }

  .full_height_img {
    height: 105vh;
  }

  .img4 {
    min-height: 105vh;
  }

  .h1_wrapper {
    position: absolute;
    top: 50vh;
    width: 100%;
    text-align: center;
  }

  .txt_anim_wrapper { display: none; }

  .btn_wrapper {
    display:none;
  }
  
}

@media screen and (min-width: 576px) and (max-width: 767px) and (orientation:portrait) {
  h1, .txt_anim { font-size: 1.85em !important; }  
  
  .full_height_img {
    height: 50.5vh;
  }

  .h1_wrapper {
    position: absolute;
    top: 35vh;
    width: 100%;
    text-align: center;
  }
  
  .txt_anim_wrapper { display: none; }

  .btn_wrapper {
    display: none;
  }

  header { display: none; }  
}

/*  
  iPhone X
*/
@media screen and (min-width: 768px) and (max-width: 991px){

	h1, .txt_anim { font-size: 3.5em !important; }

  .aft {
    font-size: 1.15em;
    padding: 0.3em 0.6em 0.3em 0.6em;
  }

  .quienes_img {
    margin-top: 50%;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) and (orientation:landscape) {
  .full_height_img {
    height: 105vh;
  }

  .img4 {
    min-height: 105vh;
  }

  .h1_wrapper {
    position: absolute;
    top: 45vh;
    width: 100%;
    text-align: center;
  }

  .txt_anim_wrapper { display: none; } 

  .btn_wrapper {
      display:none;
   }
  
}


@media screen and (min-width: 768px) and (max-width: 991px) and (orientation:portrait) {
  .full_height_img {
    height: 50.5vh;
  }

  .h1_wrapper {
    position: absolute;
    top: 30vh;
    width: 100%;
    text-align: center;
  }

  .txt_anim_wrapper { display: none; }
  
  header { display: none; }  
}


/*
  iPad (1024x768)
*/
@media screen and (min-width: 992px) and (max-width: 1199px){
	h1, .txt_anim { font-size: 3.5em !important; }

  .aft {
    font-size: 1.15em;
    padding: 0.3em 0.6em 0.3em 0.6em;
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) and (orientation:landscape) {
  .full_height_img {
    height: 105vh;
  }

  .img4 {
    min-height: 105vh;
  }

  .h1_wrapper {
    position: absolute;
    top: 40vh;
    width: 100%;
    text-align: center;
  }

  .txt_anim_wrapper {
    position: absolute;
    top: 55vh;
    width: 100%;
    text-align: center; 
  }
  
  .btn_wrapper {
    position: absolute;
    top: 75vh;
    width: 100%;
    text-align: center; 
  }

}

@media screen and (min-width: 992px) and (max-width: 1199px) and (orientation:portrait) {
  .full_height_img {
    height: 50.5vh;
  }

  .h1_wrapper {
    position: absolute;
    top: 20vh;
    width: 100%;
    text-align: center;
  }

  .txt_anim_wrapper {
    display: none;
  }

  .btn_wrapper {
    position: absolute;
    top: 35vh;
    width: 100%;
    text-align: center; 
  }

  header { display: none; }  
}


@media screen and (min-width: 1200px){
	h1, .txt_anim { font-size: 3.5em !important; }

  .aft {
    font-size: 1.25em;
    padding: 0.3em 0.7em 0.3em 0.7em;
  }
}

@media screen and (min-width: 1200px) and (orientation:landscape) {
  .full_height_img {
    height: 105vh;
  }

  .img4 {
    min-height: 105vh;
  }

  .h1_wrapper {
    position: absolute;
    top: 35vh;
    width: 100%;
    text-align: center;
  }

  .txt_anim_wrapper {
    position: absolute;
    top: 55vh;
    width: 100%;
    text-align: center; 
  }
}

@media screen and (min-width: 1200px) and (orientation:portrait) {
  .full_height_img {
    height: 50.5vh;
  }

  .h1_wrapper {
    position: absolute;
    top: 17.25vh;
    width: 100%;
    text-align: center;
  }

  .txt_anim_wrapper {
    position: absolute;
    top: 25vh;
    width: 100%;
    text-align: center; 
  }

  .btn_wrapper {
    position: absolute;
    top: 35vh;
    width: 100%;
    text-align: center; 
  }

  header { display: none; }  
}




</style>