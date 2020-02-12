<template>
  <div id="homePage">
    <v-container fluid style="padding-top: 0; padding-left: 0; padding-right: 0;">
      <v-layout row wrap>
        
        <v-flex lg12 sm12 xs12>
          <v-img :src="require('../assets/b_color0.jpg')" lazy-src class="img1 full_height_img">

            <div class="h1_wrapper">
              <h1 style="text-align: center;">ADMINISTRACIÓN DE CONDOMINIOS</h1>
            </div>

            <div class="txt_anim_wrapper" style="filter: brightness(1.3);">
              <TextAnimation 
                forward-delay="80" 
                backward-delay="20" 
                clearing-delay="2000"
                v-bind:messages = "['Administración de consorcios',
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
          
          <v-img :src="require('../assets/b_bn1.jpg')"    lazy-src class="img2 full_height_img">
            Dentro Img 2
          </v-img>

          <v-img :src="require('../assets/b_color2.jpg')" lazy-src class="img3 full_height_img">
            Dentro Img 3
          </v-img>

          <v-img :src="require('../assets/b_bn3.jpg')"    lazy-src class="img4 full_height_img">
            Dentro Img 4
          </v-img>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
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
    min-height: 50vh;
}

.h1_wrapper {
  position: absolute;
  top: 30vh;
  width: 100%;
  text-align: center;
}

h1 {
  font-size: 3.5em;
  color: #EAD47E;
  filter: brightness(1.3);
  font-weight: 300;
  padding-left:  1em;
  padding-right: 1em;
}

.txt_anim_wrapper {
  position: absolute;
  top: 50vh;
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

.img2:before {
	content:'';
	position: absolute;
  top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(208,162,140,0.5);
}

.img3:before {
	content:'';
	position: absolute;
  top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(208,162,140,0.5);
}

.img4 {
  background-color: #545B63;
}

/*
.img4:before {
	content:'';
	position: absolute;
  top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(161,177,188,0.1);
}
*/

@media (max-width: 575px){
	h1, .txt_anim { font-size: 1.8em !important; }

  .jumbotron_btn {
    font-size: 0.8em;
    padding: 0.15em 0.3em 0.15em 0.3em;
  }
}

@media (max-width: 575px) and (orientation:landscape) {
  .h1_wrapper {
    position: absolute;
    top: 40vh;
    width: 100%;
    text-align: center;
  }

  .full_height_img {
    min-height: 105vh;
  }

	.txt_anim_wrapper { display: none; }

  .jumbotron_btn_wrapper {
    position: absolute;
    top: 68vh;
    width: 100%;
    text-align: center; 
  }

}

@media (max-width: 575px) and (orientation:portrait) {

  .full_height_img {
    min-height: 50vh;
  }

  .h1_wrapper {
    position: absolute;
    top: 25vh;
    width: 100%;
    text-align: center;
  }

	.txt_anim_wrapper { display: none; }

  .jumbotron_btn_wrapper {
    display:none;
  }
   

}


@media (min-width: 576px) and (max-width: 767px) {
  h1, .txt_anim { font-size: 2.25em !important; }

  .jumbotron_btn {
    font-size: 1em;
    padding: 0.25em 0.5em 0.25em 0.5em;
  }
}

@media (min-width: 576px) and (max-width: 767px) and (orientation:landscape) {
  .txt_anim_wrapper { display: none; }
	
  .h1_wrapper {
    position: absolute;
    top: 40vh;
    width: 100%;
    text-align: center;
  }

  .jumbotron_btn_wrapper {
    position: absolute;
    top: 70vh;
    width: 100%;
    text-align: center; 
  }

  .jumbotron_btn {
    font-size: 1em;
    padding: 0.25em 0.7em 0.25em 0.7em;
  }
}

@media (min-width: 576px) and (max-width: 767px) and (orientation:portrait) {
  .full_height_img {
    min-height: 50vh;
  }

  .h1_wrapper {
    position: absolute;
    top: 20vh;
    width: 100%;
    text-align: center;
  }
  
  .txt_anim_wrapper { display: none; }

  .jumbotron_btn_wrapper {
    position: absolute;
    top: 35vh;
    width: 100%;
    text-align: center; 
  }
}


@media (min-width: 768px) and (max-width: 991px){

	h1, .txt_anim { font-size: 2.8em !important; }

  .jumbotron_btn {
    font-size: 1.15em;
    padding: 0.3em 0.6em 0.3em 0.6em;
  }
}

@media (min-width: 768px) and (max-width: 991px) and (orientation:landscape) {
  .full_height_img {
    min-height: 105vh;
  }

  .h1_wrapper {
    position: absolute;
    top: 40vh;
    width: 100%;
    text-align: center;
  }

  .txt_anim_wrapper { display: none; } 

}


@media (min-width: 768px) and (max-width: 991px) and (orientation:portrait) {
  .full_height_img {
    min-height: 50vh;
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


@media (min-width: 992px) and (max-width: 1199px){
	h1, .txt_anim { font-size: 2.8em !important; }

  .jumbotron_btn {
    font-size: 1.15em;
    padding: 0.3em 0.6em 0.3em 0.6em;
  }
}

@media (min-width: 992px) and (max-width: 1199px) and (orientation:landscape) {
  .full_height_img {
    height: 105vh;
  }
  
  .jumbotron_btn_wrapper {
    position: absolute;
    top: 70vh;
    width: 100%;
    text-align: center; 
  }

}

@media (min-width: 992px) and (max-width: 1199px) and (orientation:portrait) {
  .full_height_img {
    min-height: 50vh;
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


@media (min-width: 1200px){
	h1, .txt_anim { font-size: 3.5em !important; }

  .jumbotron_btn {
    font-size: 1.25em;
    padding: 0.3em 0.7em 0.3em 0.7em;
  }
}

@media (min-width: 1200px) and (orientation:landscape) {
  .full_height_img {
    height: 105vh;
  }
}

@media (min-width: 1200px) and (orientation:portrait) {
  .full_height_img {
    min-height: 50vh;
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

</style>