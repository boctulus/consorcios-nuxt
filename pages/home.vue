<template>
  <div id="homePage">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        
        <v-flex lg12 sm12 xs12>
          <RocketPlans></RocketPlans>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import RocketPlans from '@/components/home/Plans';

  export default {
    layout: 'home',
    components: {
      RocketPlans 
    }
  }
</script>
