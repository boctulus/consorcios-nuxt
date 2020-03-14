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

.logo_wrapper {
  width: 100%;
  height: 100px;
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

.required {
  outline: 1px solid red;
}

.error_msg {
  padding-top: 0.5em;
  color: red;
  display: block;
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

    .logo_wrapper {
      height: 120px !important;
    }
}


@media only screen and (min-width: 1025px){
    .logo_wrapper {
      height: 160px !important;
    }
}
</style>