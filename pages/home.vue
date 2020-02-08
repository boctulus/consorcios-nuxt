<template>
  <div id="homePage">
    <v-container grid-list-xl fluid style="padding: 0 0 0 0;">
      <v-layout row wrap>
        
        <v-flex lg12 sm12 xs12>
          <v-img :src="require('../assets/b_color1.jpg')" lazy-src class="img1" style="margin-top: -200px;">

            <div class="h1_wrapper">
              <h1 class="engravers" style="text-align: center;">ADMINISTRACIÓN DE CONDOMINIOS</h1>
            </div>

            <div style="text-align: center; font-size: 2em; margin: 2em;" class="animated_text">
                
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

          </v-img>
          
          <v-img :src="require('../assets/b_bn1.jpg')"    lazy-src class="img2">
            Dentro Img 2
          </v-img>

          <v-img :src="require('../assets/b_color2.jpg')" lazy-src class="img3">
            Dentro Img 3
          </v-img>

          <v-img :src="require('../assets/b_bn3.jpg')" lazy-src class="img4">
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
}	

.h1_wrapper {
  margin-top: 15em;
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
	h1, .animated_text { font-size: 35px !important; }

	.modal-dialog {
		width: 100% !important;
	}
}
 
@media (min-width: 576px) and (max-width: 767px){
	h1, .animated_text { font-size: 48px !important; }

	.modal-dialog {
		width: 60% !important;
	}
}

@media (min-width: 768px) and (max-width: 991px){
	h1, .animated_text { font-size: 60px !important; }

	.modal-dialog {
		width: 50% !important;
	}
}

@media (min-width: 992px) and (max-width: 1199px){
	h1, .animated_text { font-size: 55px !important; }

	.modal-dialog {
		width: 45% !important;
	}
}

@media (min-width: 1200px){
	h1, .animated_text { font-size: 55px !important; }
	
	.modal-dialog {
		width: 33% !important;
	}
}

</style>