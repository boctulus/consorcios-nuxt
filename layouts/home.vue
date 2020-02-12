<template>
    <div id="cont">
      <div id="subcont">
          <v-app>
            <RocketNavigation></RocketNavigation>      
            <v-content>
              <nuxt/>
            </v-content>
          </v-app>
      </div>
    </div> 
</template>


<script>
import RocketNavigation from '@/components/RocketNavigation';
import RocketFooter from '@/components/home/Footer';

export default {
  components: {
    RocketNavigation,
    RocketFooter
  }  
}
</script>

<style>
  #cont {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  #subcont{
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding-right: 17px; /* Increase/decrease this value for cross-browser compatibility */
    box-sizing: content-box; /* So the width will be 100% + 17px */
}
</style>