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
            <v-btn  dark class="jumbotron_btn">Saber más</v-btn>
          </v-layout>              
      
        </v-img>

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
                      <b-row class="mb-3 ml-auto contact_info">Teléfono: 55.45.69.78</b-row>
                      <b-row class="mb-3 ml-auto contact_info">Teléfono: 65.79.04.90</b-row>
                      <b-row class="mb-3 ml-auto contact_info">Correo: info@administraciondecondominios.com.mx</b-row>
                      <b-row class="mb-3 ml-auto contact_info">Dirección Gutemberg 142, Col. Anzures, 11590 Ciudad de México, CDMX</b-row>
                  </b-col>

                  <b-col md="6"  class="mt-3 input_col">  
                    
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
import TextAnimation from '@/components/TextAnimation';

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
  }
}
</script>

<style scoped>

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

.jumbotron_btn {
  font-size: 1.3em;
  padding: 0.25em 0.5em 0.25em 0.5em
}

.img1 {
  background-color: #2D5EAD;
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

  .input_col {
    padding-left: 15px;
    padding-right: 15px;
  }

  .footer-input {
    background-color:rgba(0,0,0,0) !important;
    border: 1px solid rgb(111, 66, 45) !important;  
    width: calc(100vw - 30px); 
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

  .jumbotron_btn {
    font-size: 1em;
    padding: 0.25em 0.7em 0.25em 0.7em;
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

  .jumbotron_btn { display: none; } 

}

/* 
  iPad 
*/  
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

  .jumbotron_btn_wrapper {
    position: absolute;
    top: 35vh;
    width: 100%;
    text-align: center; 
  }
  
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