<template>
    <div id="home_layout">
      <RocketNavigation></RocketNavigation>      
      <nuxt/>
      <HomeFooter></HomeFooter>
    </div>
</template>


<script>
import RocketNavigation from '@/components/RocketNavigation';
import HomeFooter from '@/components/HomeFooter';

export default {
  components: {
    RocketNavigation,
    HomeFooter,
  }  
}
</script>

<style>
@font-face {
	font-family: Pontano;  
	src: url('../static/fonts/pontano.ttf');  
	font-weight: normal;  
}

@font-face {
	font-family: Engravers;  
	src: url('../static/fonts/engravers.otf');  
	font-weight: normal;  
}

.engravers {
    font-family: 'Engravers', Sans-serif !important;
}

.pontano {
    font-family: 'Pontano', Sans-serif !important;
}

body {
    font-family: 'Pontano', Sans-serif;
}

h1 {
    font-family: 'Engravers', Sans-serif;
}

/* texto pequeño en movil*/
@media only screen and (max-width: 800px){
    .text-mobile{
        font-size: 3em !important;
        /* text-align: left; */
    }    
}
</style>