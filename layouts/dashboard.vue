<template>
    <div id="dash_layout">
      <DashNavigation></DashNavigation>      
      <nuxt/> 
    </div>
</template>


<script>
import DashNavigation from '@/components/DashNavigation';

export default {
  components: {
    DashNavigation
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

.logo {
    z-index:4000; 
}    

.img {
    min-height: 100vh;
}


</style>