<template>
  <div>
      <!--full-page ref="fullpage" :options="options" id="fullpage"-->
        
        <img src="https://i.imgur.com/mL8PTQ4.png" class="logo" />

        <section>
            <div class="item">
                <img src="https://i.imgur.com/QJXwf90.jpg" alt="images not found">
                <div class="cover">
                  
                    <div class="section-content">		
                      <div class="h1_wrapper">
                        <h1>ADMINISTRACIÓN DE CONSORCIOS</h1>
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
                      
                      <div class="jumbotron_btn_wrapper">
                        <div class="jumbotron_line_wrapper" style="padding: 20px 10px 20px 10px;">
                          <div class="line"></div>
                          <a href="#" class="jumbotron_btn">SABER MÁS</a>
                        </div>
                      </div>

                    </div>
                </div>
            </div>   
        </section>

        <!-- 
          https://github.com/SSENSE/vue-carousel 
        -->
        <header class="">
          <carousel 
                  :per-page="1" 
                  :autoplay="true" 
                  :loop="true" 
                  pagination-position="bottom-overlay"
                  paginationActiveColor="#D0A28C"
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

        <!-- 
          ../assets/b_color2.jpg
          ../assets/b_bn1.jpg
        -->  
        
        <v-img :src="require('../assets/b_bn3.jpg')"    lazy-src class="img img4">
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

// Install BootstrapVue
Vue.use(BootstrapVue)

// Optionally install the BootstrapVue icon components plugin
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
	background: rgba(0, 0, 0, 0.6); 
}

section .item .cover .section-content .h1_wrapper {
	position: absolute;
	top: 30vh;
	left: 0;
	width: 100%;
}

section .item .cover .section-content .h1_wrapper h1 {
	font-size: 3.5em;
	font-weight: 400;
	padding-left:  1em;
	padding-right: 1em;
	/* word-spacing: 3px; */
	color: #fff;	
	text-align: center;
}

section .item .cover .section-content .txt_anim_wrapper {
	position: absolute;
	top: 50.5vh;
	left: 0;
	width: 100%;	
	text-align: center;
}

section .item .cover .section-content .txt_anim_wrapper span {
	font-size: 3em;
	font-weight: 300;
	word-spacing: 3px;
	color: #fff;	
	
	filter: brightness(1.5); 
	text-transform: uppercase;
}

.jumbotron_btn_wrapper {
  position: absolute;
  top: 75vh;
  left: 0;
  width: 100%;
  text-align: center;
}

.jumbotron_line_wrapper {
  width: 14em;
  position: relative;
  margin: 0 auto;
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
  padding: 0.25em 0.5em 0.25em 0.5em;
  text-decoration: none;
}

.jumbotron_btn:hover {
  text-decoration: none;
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

/* Footer */

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

/* Dispositivos cuadrados o casi */

@media screen and (min-aspect-ratio:760/1000) and (max-aspect-ratio:1300/1000) {
  section .item {
    height: 105vh;
    position: relative;
  }

  section .item .cover .section-content .h1_wrapper {
    position: absolute;
    top: 35vh;
    width: 100%;
  }

  .txt_anim_wrapper {
    display:none; 
  }
  
  .jumbotron_btn_wrapper {
    display:none;
  }
}

@media screen and (max-width: 767px) {
	header {
    display:none;
  }
}

/*
  XS
*/
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
  section .item .cover .section-content .h1_wrapper {
    display: none;
  }

  section .item {
    height: 105vh;
    position: relative;
  }

	.txt_anim_wrapper { display: none; }

  .jumbotron_btn_wrapper {
    display: none;
  }
}

@media screen and (max-width: 360px) and (orientation:portrait)  {
  h1, .txt_anim { font-size: 1.5em !important; }

  section .item {
    height: 50.5vh;
    position: relative;
  }

  section .item .cover .section-content .h1_wrapper {
    position: absolute;
    top: 37vh;
    width: 100%;
  }

	.txt_anim_wrapper { display: none; }

  .jumbotron_btn_wrapper {
    display: none; 
  }
   
  header { display: none; }  
}


@media screen and (min-width: 360px) and (max-width: 575px) {
	h1, .txt_anim { font-size: 2.2em !important; }

  .jumbotron_btn {
    font-size: 0.8em;
    padding: 0.15em 0.3em 0.15em 0.3em;
  }
}

/*
  480x360 568x320
*/
@media screen and (min-width: 360px)  and (max-width: 575px) and (orientation:landscape) {
  section .item .cover .section-content .h1_wrapper {
    display: none;
  }

  section .item {
    height: 105vh;
    position: relative;
  }

	.txt_anim_wrapper { display: none; }

  .jumbotron_btn_wrapper {
    display: none;
  }

}

/* 
  360x480
*/
@media screen and (min-width: 360px)  and (max-width: 575px) and (orientation:portrait) {
  h1, .txt_anim { font-size: 1.8em !important; }

  section .item {
    height: 50.5vh;
    position: relative;
  }

  section .item .cover .section-content .h1_wrapper {
    position: absolute;
    top: 33vh;
    left: 0;
    width: 100%;
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

@media screen and (min-width: 576px) and (max-width: 767px) and (orientation:landscape) {
  h1, .txt_anim { font-size: 3em !important; }

  section .item {
    height: 105vh;
    position: relative;
  }

  section .item .cover .section-content .h1_wrapper {
    display: none;
  }

  .txt_anim_wrapper { display: none; }

  .jumbotron_btn_wrapper {
    display:none;
  }
  
}

@media screen and (min-width: 576px) and (max-width: 767px) and (orientation:portrait) {
  h1, .txt_anim { font-size: 1.9em !important; }  
  
  section .item {
    height: 50.5vh;
    position: relative;
  }

  section .item .cover .section-content .h1_wrapper {
    position: absolute;
    top: 32vh;
    width: 100%;
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
  section .item {
    height: 105vh;
    position: relative;
  }

  section .item .cover .section-content .h1_wrapper {
    display: none;
  }

  .txt_anim_wrapper { display: none; } 

  .jumbotron_btn_wrapper {
      display:none;
   }
  
}


@media screen and (min-width: 768px) and (max-width: 991px) and (orientation:portrait) {
  section .item {
    height: 50.5vh;
    position: relative;
  }

  section .item .cover .section-content .h1_wrapper {
    position: absolute;
    top: 30vh;
    width: 100%;
  }

  .txt_anim_wrapper { display: none; }
  
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
  section .item {
    height: 105vh;
    position: relative;
  }

  section .item .cover .section-content .h1_wrapper {
    position: absolute;
    top: 40vh;
    width: 100%;
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
  section .item {
    height: 50.5vh;
    position: relative;
  }

  section .item .cover .section-content .h1_wrapper {
    position: absolute;
    top: 22.5vh;
    width: 100%;
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
  section .item {
    height: 105vh;
    position: relative;
  }

  section .item .cover .section-content .h1_wrapper {
    position: absolute;
    top: 35vh;
    width: 100%;
  }

  .txt_anim_wrapper {
    position: absolute;
    top: 55vh;
    width: 100%;
    text-align: center; 
  }
}

@media screen and (min-width: 1200px) and (orientation:portrait) {
  section .item {
    height: 50.5vh;
    position: relative;
  }

  section .item .cover .section-content .h1_wrapper {
    position: absolute;
    top: 17.25vh;
    width: 100%;
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



</style>