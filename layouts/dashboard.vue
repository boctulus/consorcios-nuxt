<template>
        <v-app id="inspire">    
             <div id="dash_layout">    
                <DashNavigation>
                    <nuxt/>
                </DashNavigation>
             </div>   
        </v-app>        
</template>


<script>
import DashNavigation from '@/components/DashNavigation';

export default {
    computed: {
        loginAlert() {
            return this.$store.state.auth.alert;
        }
    },

    watch: {
        loginAlert(msg){
            if (msg !== null) {
            this.$store.commit('auth/set_alert', null);
            alert(msg);
            }
        }
    },
    components: {
        DashNavigation
    }  
}
</script>

<style>
#dash_layout {
  background-image:  url(/bg/13.jpg);
  background-size: cover;
  min-height: 100vh;
  color: #fff;
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