<template>
  <div id="homePage">
    <v-container grid-list-xl fluid style="padding: 0 0 0 0;">
      <v-layout row wrap>
        
        <v-flex lg12 sm12 xs12>
          <v-img :src="require('../assets/b_color1.jpg')" lazy-src class="img1" style="margin-top: -200px;">
           Dentro Img 1
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
  //import RocketPlans from '@/components/home/Plans';

  export default {
    layout: 'home',
    components: {
    }
  }
</script>

<style scoped>

/*
.img1:before {
	content:'';
	position: absolute;
  top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(208,162,140,0.1);
}
*/

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

</style>