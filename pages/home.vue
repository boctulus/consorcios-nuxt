<template>
  <v-container fluid style="padding-top: 0; padding-left: 0; padding-right: 0;">
    
        <v-img :src="require('../assets/b_trans.png')" lazy-src class="img img1 full_height_img"> 

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
          <!--  -->
        </v-img>


  </v-container>
</template>

<script>

import TextAnimation from '@/components/TextAnimation';

export default {
  layout: 'home',
  components: {
    TextAnimation
  }
}
</script>

<script>
import TextAnimation from '@/components/TextAnimation';

export default {
  layout: 'home',
  components: {
    TextAnimation
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


/* 

  Media Queries 

*/

/* 
  iPhone 5/SE
*/
@media screen and (max-width: 575px){
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
    position: absolute;
    top: 62vh;
    width: 100%;
    text-align: center;
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
  .txt_anim_wrapper { display: none; }
	
  .h1_wrapper {
    position: absolute;
    top: 58vh;
    width: 100%;
    text-align: center;
  }

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
  
  .jumbotron_btn_wrapper {
    position: absolute;
    top: 75vh;
    width: 100%;
    text-align: center; 
  }
}

</style>