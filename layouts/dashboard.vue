<template>
    <div id="dash_layout">
      <DashNavigation>
          <nuxt/>
      </DashNavigation>
    </div>
</template>


<script>
import DashNavigation from '@/components/DashNavigation';
import { store } from '@/store/login.js'

export default {
    store: store,
    created() {
        if (!this.$store.getters.logged){
           this.$router.push('/login') 
        }        
    },
    mounted() {
        
    },
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
    margin-top: -20px !important;
}

.logo {
    z-index:4000; 
}    

.img {
    min-height: 100vh;
}


</style>