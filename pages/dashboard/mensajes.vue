<template>
  <div>
      <h1 class="mb-3">Mensajes</h1>
      <grid :data="gridData" :columns="gridColumns"></grid>
  </div>    
</template>

<script>
import Grid from '@/components/Grid'

export default {  
  layout: 'dashboard',
  data() {
      return {
        gridData: [
          { name: 'American alligator', location: 'Southeast United States' },
          { name: 'Chinese alligator', location: 'Eastern China' },
          { name: 'Spectacled caiman', location: 'Central & South America' },
          { name: 'Broad-snouted caiman', location: 'South America' },
          { name: 'Jacaré caiman', location: 'South America' },
          { name: 'Black caiman', location: 'South America' },
          { name: 'American alligator', location: 'Southeast United States' },
          { name: 'Chinese alligator', location: 'Eastern China' },
          { name: 'Spectacled caiman', location: 'Central & South America' },
          { name: 'Broad-snouted caiman', location: 'South America' },
          { name: 'Jacaré caiman', location: 'South America' },
          { name: 'Black caiman', location: 'South America' },
          { name: 'American alligator', location: 'Southeast United States' },
          { name: 'Chinese alligator', location: 'Eastern China' },
          { name: 'Spectacled caiman', location: 'Central & South America' },
          { name: 'Broad-snouted caiman', location: 'South America' },
          { name: 'Jacaré caiman', location: 'South America' },
          { name: 'Black caiman', location: 'South America' },
          { name: 'American alligator', location: 'Southeast United States' },
          { name: 'Chinese alligator', location: 'Eastern China' },
          { name: 'Spectacled caiman', location: 'Central & South America' },
          { name: 'Broad-snouted caiman', location: 'South America' },
          { name: 'Jacaré caiman', location: 'South America' },
          { name: 'Black caiman', location: 'South America' }
        ],
        gridColumns: ['name', 'location'],        
      }
  },
  components: {
    Grid
  }  
}
</script>


<style scoped>

</style>