<template>
    <div id="home_layout">
      <RocketNavigation></RocketNavigation>      
      <nuxt/>
      <ChatBot></ChatBot>  
      <WhatsApp :phone="+5492215452109"></WhatsApp> 
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
  },

  head:{
      link: [
          { rel: 'stylesheet', href: require('@/assets/style/home.css') }
      ]
  }  
}
</script>

<style>


</style>