<template>
    <div id="home_layout">
      <RocketNavigation></RocketNavigation>      
      <nuxt/>
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

</style>