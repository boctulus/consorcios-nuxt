<template>
    <div id="home_layout">
      <RocketNavigation></RocketNavigation>      
      <nuxt/>
      <ChatBot></ChatBot>  
      <WhatsApp :phone="54221545-2109"></WhatsApp> 
      <HomeFooter></HomeFooter>    
    </div>
</template>


<script>
import RocketNavigation from '@/components/RocketNavigation';
import HomeFooter from '@/components/HomeFooter';
import WhatsApp from '@/components/WhatsApp';
import ChatBot from '@/components/ChatBot';

export default {
  components: {
    RocketNavigation,
    HomeFooter,
    WhatsApp,
    ChatBot
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

.logo_container {
    width: 10em;  
}

.logo {
    z-index:4000; 
}    

.img {
    min-height: 100vh;
}

@media only screen and (max-width: 800px){
    .text-mobile{
        font-size: 3em !important;
    }    
}

@media only screen and (max-width: 799px){
    .logo_container {
      width: 5.5em;  
    }
}

@media only screen and (min-width: 800px) and (max-width: 1024px){
    .logo_container {
      width: 7em;  
    }
}
</style>