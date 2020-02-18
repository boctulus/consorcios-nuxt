<template>
  <div style="margin-top:-30px;">
    
        <v-img :src="require('../assets/b_color5.jpg')" lazy-src class="img img1 full_height_img"> 

          <div class="h1_wrapper">
            <h1 style="text-align: center;">ADMINISTRACIÓN DE CONSORCIOS</h1>
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
              class="txt_anim"
              >
            </TextAnimation>                
          </div>

          <v-layout justify-center class="jumbotron_btn_wrapper">
            <div class="jumbotron_line_wrapper" style="padding: 20px 10px 25px 10px;">
              <div class="line"></div>
              <a href="#" class="jumbotron_btn">SABER MÁS</a>
            </div>
          </v-layout>              
      
        </v-img>

        <!-- 
          https://github.com/SSENSE/vue-carousel 
        -->
        <header>
          <carousel 
                  :per-page="1" 
                  :autoplay="true" 
                  :loop="true" 
                  pagination-position="bottom-overlay"
                  paginationActiveColor="#2D5EAD"
          >
            <slide>
              <div class="item">
                      <img src="https://cdn.pixabay.com/photo/2017/10/24/10/30/business-2884023_960_720.jpg" alt="images not found">
                      <div class="cover">
                          <div class="container">
                              <div class="header-content">
                                  <div class="line"></div>
                                  <h2>Teimagine Digital Experience with</h2>
                                  <h1>Start-ups and solutions</h1>
                                  <h4>We help entrepreneurs, start-ups and enterprises shape their ideas into products</h4>
                              </div>
                          </div>
                      </div>
                  </div>   
            </slide>

            <slide>
              <div class="item">
                      <img src="https://cdn.pixabay.com/photo/2017/05/04/16/37/meeting-2284501_960_720.jpg" alt="images not found">
                      <div class="cover">
                          <div class="container">
                              <div class="header-content">
                                  <div class="line animated bounceInLeft"></div>
                                  <h2>Peimagine Digital Experience with</h2>
                                  <h1>Intelligent Solutions</h1>
                                  <h4>We help entrepreneurs, start-ups and enterprises shape their ideas into products</h4>
                              </div>
                          </div>
                      </div>
                  </div>
            </slide>        

            <slide>
              <div class="item">
                    <img src="https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg" alt="images not found">
                    <div class="cover">
                        <div class="container">
                            <div class="header-content">
                                <div class="line animated bounceInLeft"></div>
                                <h2>Reimagine Digital Experience with</h2>
                                <h1>Intelligent solutions</h1>
                                <h4>We help entrepreneurs, start-ups and enterprises shape their ideas into products</h4>
                            </div>
                        </div>
                     </div>
                </div>    
            </slide>  
          </carousel>        
        </header>

        <v-img :src="require('../assets/b_color2.jpg')" lazy-src class="img img3 full_height_img">
          <!--  -->
        </v-img>

        <v-img :src="require('../assets/b_bn1.jpg')"    lazy-src class="img img2 full_height_img">
          <!--  -->
        </v-img>

        
        <v-img :src="require('../assets/b_bn3.jpg')"    lazy-src class="img img4 full_height_img">
              <b-container style="color: #ffffff;">        
                <b-row class="mb-5 mt-5 mx-auto"><h3 class="contact_form_h">CONTACTO</h3></b-row>  

                <b-row>
                  <b-col md="6">
                      <b-row class="mb-3 ml-auto contact_info">Teléfono: 15 545-2109</b-row>
                      <b-row class="mb-3 ml-auto contact_info">Correo: adm.elgrove@outlook.com</b-row>
                      <b-row class="mb-3 ml-auto contact_info">Dirección: calle 28 nro 167, La Plata, Arg.</b-row>
                  </b-col>

                  <b-col md="6"  class="mt-3">  
                    
                      <b-row>
                        <b-col md="6" sm="12">

                          <b-form-group
                            label="NOMBRE"
                            label-for="input-1"
                            class="label"
                          >
                            <b-form-input id="input-1" trim class="footer-input"></b-form-input>
                          </b-form-group>   

                        </b-col>
                        
                        <b-col md="6" sm="12">

                          <b-form-group
                            label="TELEFONO"
                            label-for="input-2"
                            class="label"
                          >
                            <b-form-input id="input-2" trim class="footer-input"></b-form-input>
                          </b-form-group>   

                        </b-col>
                      </b-row>    
                    
                    
                    <b-form-group
                      label="EMAIL"
                      label-for="input-3"
                      class="label"
                    >
                      <b-form-input id="input-3" trim class="footer-input"></b-form-input>
                    </b-form-group>   

                    <b-form-group
                      label="SERVICIO"
                      label-for="input-4"
                      class="label"
                    >
                      <b-form-input id="input-4" trim class="footer-input"></b-form-input>
                    </b-form-group>  

                    <b-form-group
                      label="CONSULTA"
                      label-for="input-4"
                      class="label"
                    >
                      <b-form-textarea
                        id="input-5"
                        placeholder="Su consulta"
                        rows="3"
                        max-rows="6"
                        class="footer-input"
                      ></b-form-textarea>
                   </b-form-group>
                  </b-col>

                </b-row>
              </b-container>  
        </v-img>

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

import { Carousel, Slide } from 'vue-carousel';


// Install BootstrapVue
Vue.use(BootstrapVue)

// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


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

header .owl-item.active h1 {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-name: fadeInDown;
  animation-delay: 0.3s;
}

header .owl-item.active h2 {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-name: fadeInDown;
  animation-delay: 0.3s;
}

header .owl-item.active h4 {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-name: fadeInUp;
  animation-delay: 0.3s;
}

header .owl-item.active .line {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-name: fadeInLeft;
  animation-delay: 0.3s;
}

header .owl-nav .owl-prev {
  position: absolute;
  left: 15px;
  top: 43%;
  opacity: 0;
  -webkit-transition: all 0.4s ease-out;
  transition: all 0.4s ease-out;
  background: rgba(0, 0, 0, 0.5) !important;
  width: 40px;
  cursor: pointer;
  height: 40px;
  position: absolute;
  display: block;
  z-index: 1000;
  border-radius: 0;
}

header .owl-nav .owl-prev span {
  font-size: 1.6875rem;
  color: #fff;
}

header .owl-nav .owl-prev:focus {
  outline: 0;
}

header .owl-nav .owl-prev:hover {
  background: #000 !important;
}

header .owl-nav .owl-next {
  position: absolute;
  right: 15px;
  top: 43%;
  opacity: 0;
  -webkit-transition: all 0.4s ease-out;
  transition: all 0.4s ease-out;
  background: rgba(0, 0, 0, 0.5) !important;
  width: 40px;
  cursor: pointer;
  height: 40px;
  position: absolute;
  display: block;
  z-index: 1000;
  border-radius: 0;
}

header .owl-nav .owl-next span {
  font-size: 1.6875rem;
  color: #fff;
}

header .owl-nav .owl-next:focus {
  outline: 0;
}

header .owl-nav .owl-next:hover {
  background: #000 !important;
}
header:hover .owl-prev {
  left: 0px;
  opacity: 1;
}

header:hover .owl-next {
  right: 0px;
  opacity: 1;
}

/*      */

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

.jumbotron_btn_wrapper {
  position: absolute;
  top: 75vh;
  width: 100%;
  text-align: center;
}

.jumbotron_line_wrapper {
  width: 14em;
  position: relative;
}

.jumbotron_line_wrapper .line {
  content: "";
  display: inline-block;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  border: 6px solid #D0A28C;  
  -webkit-clip-path: polygon(0 0, 36% 0, 60% 100%, 0 100%);
  clip-path: polygon(0 0, 36% 0, 60% 100%, 0 100%);
}

.jumbotron_btn {
  color: #ffffff;
  font-size: 1.3em;
  padding: 0.25em 0.5em 0.25em 0.5em
}

.jumbotron_btn:hover {
  text-decoration: none;
}

.img1 {
  background-color: #2D5EAD;
}

.img4 {
  background-color: #50575E;
}

.contact_form_h {
  font-size: 4.5em;
}

.contact_info {
  text-transform: uppercase;
}

.footer-input {
  background-color:rgba(0,0,0,0) !important;
  border: 1px solid rgb(111, 66, 45) !important;
}

.label {
  font-size:1.35em;
  font-weight: 600;
}

/* 

  Media Queries 

*/

@media screen and (max-width: 360px){
  .contact_form_h {
    font-size: 4em;
  }

  .footer-input {
    background-color:rgba(0,0,0,0) !important;
    border: 1px solid rgb(111, 66, 45) !important;  
    width: calc(100vw - 30px); 
  }

}


@media screen and (max-width: 767px) {
	header {
    display:none;
  }
}

/* 
  iPhone 5/SE
*/
@media screen and (max-width: 575px) and (orientation:landscape) {
	h1, .txt_anim { font-size: 2.2em !important; }

  .jumbotron_btn {
    font-size: 0.8em;
    padding: 0.15em 0.3em 0.15em 0.3em;
  }
}

/*
  480x360 568x320
*/
@media screen and (max-width: 575px) and (orientation:landscape) {
  .h1_wrapper {
    display: none;
  }

  .full_height_img {
    min-height: 105vh;
  }

	.txt_anim_wrapper { display: none; }

  .jumbotron_btn_wrapper {
    display: none;
  }

}

/* 
  360x480
*/
@media screen and (max-width: 575px) and (orientation:portrait) {

  .full_height_img {
    min-height: 50.5vh;
  }

  .h1_wrapper {
    position: absolute;
    top: 50.5vh;
    width: 100%;
    text-align: center;
  }

	.txt_anim_wrapper { display: none; }

  .jumbotron_btn_wrapper {
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

  .full_height_img {
    min-height: 105vh;
  }

  .h1_wrapper {
    position: absolute;
    top: 58vh;
    width: 100%;
    text-align: center;
  }

  .txt_anim_wrapper { display: none; }

  .jumbotron_btn_wrapper {
    display:none;
  }
  
}

@media screen and (min-width: 576px) and (max-width: 767px) and (orientation:portrait) {
  .full_height_img {
    min-height: 50.5vh;
  }

  .h1_wrapper {
    position: absolute;
    top: 25vh;
    width: 100%;
    text-align: center;
  }
  
  .txt_anim_wrapper { display: none; }

  .jumbotron_btn_wrapper {
    display: none;
  }

  header { display: none; }  
}

/*  
  iPhone X
*/
@media screen and (min-width: 768px) and (max-width: 991px){

	h1, .txt_anim { font-size: 3.5em !important; }

  .jumbotron_btn {
    font-size: 1.15em;
    padding: 0.3em 0.6em 0.3em 0.6em;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) and (orientation:landscape) {
  .full_height_img {
    min-height: 105vh;
  }

  .h1_wrapper {
    position: absolute;
    top: 55vh;
    width: 100%;
    text-align: center;
  }

  .txt_anim_wrapper { display: none; } 

  .jumbotron_btn_wrapper {
      display:none;
   }
  
}


@media screen and (min-width: 768px) and (max-width: 991px) and (orientation:portrait) {
  .full_height_img {
    min-height: 50.5vh;
  }

  .h1_wrapper {
    position: absolute;
    top: 25vh;
    width: 100%;
    text-align: center;
  }

  .txt_anim_wrapper { display: none; }

  .jumbotron_btn_wrapper {
    position: absolute;
    top: 42vh;
    width: 100%;
    text-align: center; 
  }
  
  header { display: none; }  
}


/*
  iPad (1024x768)
*/
@media screen and (min-width: 992px) and (max-width: 1199px){
	h1, .txt_anim { font-size: 3.5em !important; }

  .jumbotron_btn {
    font-size: 1.15em;
    padding: 0.3em 0.6em 0.3em 0.6em;
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) and (orientation:landscape) {
  .full_height_img {
    height: 105vh;
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
  
  .jumbotron_btn_wrapper {
    position: absolute;
    top: 75vh;
    width: 100%;
    text-align: center; 
  }

}

@media screen and (min-width: 992px) and (max-width: 1199px) and (orientation:portrait) {
  .full_height_img {
    min-height: 50.5vh;
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

  .jumbotron_btn_wrapper {
    position: absolute;
    top: 35vh;
    width: 100%;
    text-align: center; 
  }

  header { display: none; }  
}


@media screen and (min-width: 1200px){
	h1, .txt_anim { font-size: 3.5em !important; }

  .jumbotron_btn {
    font-size: 1.25em;
    padding: 0.3em 0.7em 0.3em 0.7em;
  }
}

@media screen and (min-width: 1200px) and (orientation:landscape) {
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
    position: absolute;
    top: 55vh;
    width: 100%;
    text-align: center; 
  }
}

@media screen and (min-width: 1200px) and (orientation:portrait) {
  .full_height_img {
    min-height: 50.5vh;
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

  .jumbotron_btn_wrapper {
    position: absolute;
    top: 35vh;
    width: 100%;
    text-align: center; 
  }

  header { display: none; }  
}


/* Dispositivos cuadrados o casi */

@media screen and (min-aspect-ratio:750/1000) and (max-aspect-ratio:1333/1000) {
  .full_height_img {
    height: 105vh;
  }

  .h1_wrapper {
    position: absolute;
    top: 55vh;
    width: 100%;
    text-align: center;
  }

  .txt_anim_wrapper {
    display:none; 
  }
  
  .jumbotron_btn_wrapper {
    display:none;
  }
}

</style>