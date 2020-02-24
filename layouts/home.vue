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

</style>