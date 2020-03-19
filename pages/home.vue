<template>
  <div>
      <!--full-page ref="fullpage" :options="options" id="fullpage"-->
     
        <n-link to="/home">
          <v-img src="/elgrove_nueva_tipo.png" lazy-src class="logo_container logo" />
        </n-link>

        <v-img src="/administracion-profesional-de-condominios-1.jpg" lazy-src class="section img img1 full_height_img" > 

          <div class="h1_wrapper">
            <h1 style="text-align: center; font-weight:700;">ADMINISTRACIÓN DE CONSORCIOS</h1>
          </div>

          <div class="txt_anim_wrapper" style="filter: brightness(1.5); font-weight: 500; text-transform: uppercase;">
            <TextAnimation 
              forward-delay="80" 
              backward-delay="15" 
              clearing-delay="1000"
              v-bind:messages = "['Seriedad',
                                  'Honestidad',
                                  'Eficacia',
                                  'Administración El Grove'
              ]"
              class="engravers txt_anim"
              >
            </TextAnimation>                
          </div>

          <v-layout justify-center class="btn_wrapper">              
            <div class="btn_enmarcado" style="text-align: center;"><span style="font-size:1.5em;" class="aft">

              <!--n-link to="#contacto" class="link">SABER MÁS</n-link-->
              <a href="#" class="link" v-scroll-to="{
                el: '#theend',
                duration: 1000,
                easing: 'ease-in-out',
                offset: -200
                }">
                SABER MÁS
              </a>
              
              </span></div>
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

            <slide v-for="(slide, ix) in slides" v-bind:key="ix">
              <div class="item">
                      <img :src="slide.img" v-if="slide.img.match(/^(https:|http:)/)"  alt="images not found" />
                      <img :src="`/home_slider/${slide.img}`" v-if="!slide.img.match(/^(https:|http:)/)"  alt="images not found" />
                      <div class="cover">
                          <div class="container">
                              <div class="header-content">
                                  <div class="line animated bounceInLeft"></div>
                                  <h2>{{ slide.line1 }}</h2>
                                  <h1 style="padding-top:40px;">{{ slide.line2 }}</h1>
                                  <h4>{{ slide.line3 }}</h4>
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
           

      <!--/full-page--> 
  </div>
</template>

<script>
import TextAnimation from '@/components/TextAnimation'
import { Carousel, Slide } from 'vue-carousel';
import getSlider from '@/api/slider.js';

export default {  
  layout: 'home',
  
  data: () => ({
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

  created() {
    this.slides = getSlider();
  },

  mounted() {
    //document.querySelector('#hamburger-icon').style.display = "block";
  },

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
    Carousel,
    Slide
  }
}
</script>


<style scoped>

#coti{
    background-image:url(https://i.imgur.com/urEubtE.jpg); 
    background-repeat: no-repeat;
    background-attachment: fixed;
}

.aft {
  color: #ccc;
  padding: 1em 0 1em 2em;
  font-size: 1.5em;
}

.link {
  color: #ccc;
}

.link:visited {
  color: #ccc;
}

.link:hover {
  text-decoration: none;
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

.btn_enmarcado {
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

.btn_enmarcado:hover{
  background-image:none;
}

.btn_enmarcado:before {
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

.btn_enmarcado:hover:before, .btn_enmarcado:focus:before, .btn_enmarcado:active:before {
  right: 0;
}

/*  */

.logo_container {
    position: absolute;
    top: 3.5vh;
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

.carousel {
  display: none;
}

@media screen and (min-width: 1024px) {
	.carousel {
    display:block !important;
  }
}

@media screen and (orientation: portrait) {
	.carousel {
    display:none;
  }
}
</style>

<style>
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
    top: 35vh;
  }

  .txt_anim_wrapper {
    display:none; 
  }
}

@media screen and (max-width: 360px) {
 
}

@media screen and (max-width: 360px) and (orientation:portrait)  {
  h1, .txt_anim { font-size: 2em !important; }

  .full_height_img {
    height: 50.5vh;
  }

  .h1_wrapper {
    top: 22vh !important;
  }

	.txt_anim_wrapper { display: none; }

  .btn_wrapper {
    display: none; 
  }
   
  header { display: none; }  
}

@media screen and (max-width: 360px) and (orientation:landscape)  {
  h1, .txt_anim { font-size: 2em !important; }

 .h1_wrapper {
    display: none;
  }

  .full_height_img {
    min-height: 105vh;
  }

  .img4 {
    min-height: 100vh;
  }

	.txt_anim_wrapper { display: none; }

  .btn_wrapper {
    display: none;
  }
}


/* 
  iPhone 5/SE
*/
@media screen and (min-width: 360px) and (max-width: 575px) {
  .aft {
    font-size: 0.8em;
    padding: 0.15em 0.3em 0.15em 0.3em;
  }
}

/* 
  360x480
*/
@media screen and (min-width: 360px)  and (max-width: 575px) and (orientation:portrait) {

  h1, .txt_anim { font-size: 2em !important; }

  .full_height_img {
    height: 50.5vh;
  }

  .h1_wrapper {
    top: 22vh !important;
  }

	.txt_anim_wrapper { display: none; }

  .btn_wrapper {
    display: none; 
  }
   
  header { display: none; }  
}

/*
  480x360 568x320
*/
@media screen and (min-width: 360px)  and (max-width: 575px) and (orientation:landscape) {
	h1, .txt_anim { font-size: 2.2em !important; }

  .h1_wrapper {
    top: 35vh !important;
  }

  .full_height_img {
    height: 105vh;
  }

  .img4 {
    min-height: 100vh;
  }

	.txt_anim_wrapper { display: none; }

  .btn_wrapper {
    top: 65vh !important;
  }

}



@media screen and (min-width: 576px) and (max-width: 767px) {
  h1, .txt_anim { font-size: 3em !important; }
}

@media screen and (min-width: 576px) and (max-width: 767px) and (orientation:portrait) {
  h1, .txt_anim { font-size: 1.85em !important; }  
  
  .full_height_img {
    height: 50.5vh;
  }

  .h1_wrapper {
    top: 20vh !important;
  }
  
  .txt_anim_wrapper { display: none; }

  .btn_wrapper {
    top: 30vh !important;
  }

  header { display: none; }  
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
    min-height: 100vh;
  }

  .h1_wrapper {
    top: 30vh !important;
  }

  .txt_anim_wrapper { display: none; }

  .btn_wrapper {
    top: 70vh !important;
  }
  
}


/*  
  iPhone X
*/
@media screen and (min-width: 768px) and (max-width: 991px){
  .aft {
    font-size: 1.15em;
    padding: 0.3em 0.6em 0.3em 0.6em;
  }

  .quienes_img {
    margin-top: 50%;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) and (orientation:portrait) {
  h1, .txt_anim { font-size: 3.5em !important; }

  .full_height_img {
    height: 50.5vh;
  }

  .h1_wrapper {
    top: 20vh !important;
    width: 100%;
    text-align: center;
  }

  .txt_anim_wrapper { display: none; }
  
  header { display: none; }  
}


@media screen and (min-width: 768px) and (max-width: 991px) and (orientation:landscape) {
  h1, .txt_anim { font-size: 3.5em !important; }

  .full_height_img {
    height: 105vh;
  }

  .img4 {
    min-height: 100vh;
  }

  .h1_wrapper {
    top: 30vh !important;
  }

  .txt_anim_wrapper { display: none; }

  .btn_wrapper {
    top: 70vh !important;
  }
  
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

@media screen and (min-width: 992px) and (max-width: 1199px) and (orientation:portrait) {
  .full_height_img {
    height: 50.5vh;
  }

  .h1_wrapper {
    top: 20vh !important;
  }

  .txt_anim_wrapper {
    display: none;
  }

  .btn_wrapper {
    top: 35vh !important;
    font-size: 1.2em;
  }

  header { display: none; }  
}


@media screen and (min-width: 992px) and (max-width: 1199px) and (orientation:landscape) {
  .full_height_img {
    height: 105vh;
  }

  .img4 {
    min-height: 105vh;
  }

  .h1_wrapper {
    top: 40vh !important; 
  }

  .txt_anim_wrapper {
    top: 55vh;
  }
  
  .btn_wrapper {
    top: 75vh;
  }

}



@media screen and (min-width: 1200px){
	h1, .txt_anim { font-size: 3.5em !important; }

  .aft {
    font-size: 1.25em;
    padding: 0.3em 0.7em 0.3em 0.7em;
  }
}


@media screen and (min-width: 1200px) and (orientation:portrait) {
  .full_height_img {
    height: 50.5vh;
  }

  .h1_wrapper {
    top: 17.25vh !important;
  }

  .txt_anim_wrapper {
    top: 25vh;
  }

  .btn_wrapper {
    top: 35vh;
  }

  header { display: none; }  
}

@media screen and (min-width: 1200px) and (orientation:landscape) {
  .full_height_img {
    height: 105vh;
  }

  .img4 {
    min-height: 100vh;
  }

  .h1_wrapper {
    top: 35vh !important;
  }

  .txt_anim_wrapper {
    top: 55vh;
  }

  .btn_wrapper {
    top: 70vh !important;
    font-size: 1.1em;
  }
}

</style>