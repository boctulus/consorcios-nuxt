<template>
  <div id="homePage">
    <v-container grid-list-xl fluid style="padding: 0 0 0 0;">
      <v-layout row wrap>
        
        <v-flex lg12 sm12 xs12>
          <v-img :src="require('../assets/b_color0.jpg')" lazy-src class="img1 full_height_img">

            <div class="h1_wrapper">
              <h1 class="engravers" style="text-align: center;">ADMINISTRACIÓN DE CONDOMINIOS</h1>
            </div>

            <div class="txt_anim_wrapper">
              <TextAnimation 
                forward-delay="80" 
                backward-delay="20" 
                clearing-delay="2000"
                v-bind:messages = "['Administración de consorcios',
                                   'Número 1 en La Plata',
                                   'El Grove'
                ]"
                >
              </TextAnimation>                
            </div>

            <v-layout justify-center>
              <v-btn class="jumbotron_btn">Saber más</v-btn>
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

<style scoped>
h1.engravers {
  color: #EAD47E;
  font-weight: 300;
}	

.h1_wrapper {
  margin-top: 12em;
  filter: brightness(1.3);
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

.jumbotron_btn {
  position: absolute;
  top: 75vh;
  font-size: 1.3em;
}

.full_height_img {
    height: 105vh;
}

@media (max-width: 575px){
	h1 { font-size: 35px !important; }
  .txt_anim_wrapper { display: none; }

  .full_height_img {
    min-height: 50vh;
  }

	.modal-dialog {
		width: 100% !important;
	}
}

@media (max-width: 575px) and (orientation:landscape) {
	.jumbotron_btn { display: none }
}
 
@media (min-width: 576px) and (max-width: 767px) {
	h1 { font-size: 48px !important; }
  .txt_anim_wrapper { display: none; }

  .full_height_img {
    min-height: 50vh;
  }

	.modal-dialog {
		width: 60% !important;
	}
}

@media (min-width: 576px) and (max-width: 767px) and (orientation:landscape) {
	.jumbotron_btn { display: none }
}

@media (min-width: 768px) and (max-width: 991px){
	h1 { font-size: 60px !important; }
  .txt_anim_wrapper { display: none; }

  .full_height_img {
    height: 105vh;
  }

	.modal-dialog {
		width: 50% !important;
	}
}

@media (min-width: 992px) and (max-width: 1199px){
	h1 { font-size: 55px !important; }
  
  .full_height_img {
    height: 105vh;
  }

  .txt_anim_wrapper { 
    font-size: 55px; 
    height: 20px; 
    text-align: center; 
    margin: 2em;
    color: white;
    font-weight: lighter;
  }

	.modal-dialog {
		width: 45% !important;
	}
}

@media (min-width: 1200px){
	h1 { font-size: 55px !important; }
	
  .txt_anim_wrapper { 
    font-size: 55px; 
    height: 20px; 
    text-align: center; 
    margin: 2em;
    color: white;
    font-weight: lighter;
  }

  .full_height_img {
    height: 105vh;
  }

	.modal-dialog {
		width: 33% !important;
	}
}

/*  Correcciones a media queries */

@media (orientation : landscape) and (min-aspect-ratio: 2/1) and (max-height: 480px) {	
  .jumbotron_btn { display: none }
}

@media (orientation : portrait) and (min-aspect-ratio: 768/1366) {	
 
}
</style>