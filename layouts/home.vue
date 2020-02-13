<template>
    <v-app style="margin-top: -1px;">
      <RocketNavigation></RocketNavigation>      
      <!-- v-content-->
        <nuxt/>
      <!--/v-content-->
    </v-app>
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

</style>