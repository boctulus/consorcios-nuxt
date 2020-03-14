<template>
  <div :style="{backgroundColor: '#3C4043'}" >

    <div class="logo_wrapper">
      <div class="logo_container">
          <n-link to="/home">
            <v-img :src="require('../assets/logov2b_justo.png')" lazy-src class="logo" />
          </n-link>
      </div>  
    </div>    

    <!-- Modal -->
    <div id="serviceModal" v-if="selected != null" style="font-size: 0.8em;">
      <b-container style="color: #ffffff;" class="d-flex h-100">

        <div style="position: absolute; right: 20px; top: 10px; cursor: pointer; overflow-x: hidden; z-index:9999; filter: brightness(0.75);">
              <a href="#" @click="closeModal" class="closeModal">X</a>
        </div>

        <b-row class="align-self-center"> 

          <b-col  sm="12"  
                  md="10" offset-md="1"   
                  xl="8"  offset-xl="2"
                  class="scrollable"
                  style="padding-top: 5%; padding-bottom: 5%;"
          >       
           
              <div class="pontano mb-5 name">
                {{selected.name}}
              </div>

              <div class="text"> 
                {{selected.text}}
              </div>
              <div style="text-align:center;" class="mt-5 mb-4 ask_info_wrapper">
                <b-button type="button" id="ask_info" @click="goContactForm">Pedir información</b-button> 
              </div> 
              <div style="text-align:center;">
                <img :src="`/servicios/${selected.img}`" id="selected_img"/>
              </div> 
        
          </b-col>    
        </b-row> 

      </b-container>
    </div>

    <b-container style="color: #ffffff;"> 
      
        <h1 class="mt-1 engravers text-mobile">SERVICIOS</h1>

        <div class="pontano mt-5 mb-5" style="font-size:1.5em; text-align: justify;">
          Nuestra especialidad es la ADMINISTRACIÓN DE CONSORCIOS, adicional a este servicio contamos con todas las soluciones necesarias para que vivas en un ambiente de tranquilidad y comodidad. Conoce más de nuestros servicios dando click en cada uno de ellos.
        </div>

        <b-row>
         <b-col class="mb-5" sm="12" md="6" xl="3"  style="text-align:center;" v-for="item in serviciosComputados" v-bind:key="item.id">
           <div class="minicontainer" :id="item.id" @click="select(item.id)">
              <p><img :title="item.alt"  style="border: 30px solid rgb(237, 237, 237); padding: 5px;" :src="require(`../static/servicios/${item.img}`)" :alt="item.alt" width="150" height="150" ></p> 

              <h2 class="engravers" style="color: rgb(208, 162, 140); font-size: 2.5em; text-align: center;">{{item.name}}</h2>  
           </div>              
         </b-col>
        </b-row>
       
    </b-container>

    
  </div>
</template>

<script>
import getData from '@/api/servicios.js';

export default {  
  layout: 'home',
  data: () => ({
      selected: null,
      servicios: []
  }),

  created() {
      this.servicios = getData();
  },

  computed: {
    serviciosComputados: function () {
      let servicios = this.servicios;

      for (let i=0; i<servicios.length;i++){
        let img = servicios[i].img.split('.').slice(0, -1).join('.');
        servicios[i].alt = img.split('-').join(' ');
      }

      return servicios.filter((e) => e.enabled); 
    }
  },

  methods: {
    select(id) {
      this.selected = this.servicios.find((e) => { return e.id == id} ); 
      document.querySelector('#hamburger-icon').style.display = "none";
    },

    closeModal(){
      this.selected = null;
      document.querySelector('#hamburger-icon').style.display = "block";
    },

    goContactForm(){
      this.closeModal();
      setTimeout(() => {
          this.$router.push({
              path: '/contacto'
          })
      },500);  
    }
  }
}
</script>


<style scoped>
h1, h2, h3, h4, h5, h6 {
    color: rgb(185, 203, 217);
}

h1, h2, h3, h4, h5, h6 {
    color: #2c3e50;
}

h1 {
  text-align: center;
  line-height: 0.5em;
  color: #ccc; 
  padding-top:10px; 
}

.minicontainer {
  transition: all .5s ease-in-out;
}

.minicontainer:hover {
  transform: scale(1.1); 
}

#serviceModal {
  width: 100%; 
  height: 100%; 
  position: fixed; 
  top: 0;
  z-index: 9999; 
  color: #fff; 
  background-color: rgba(0, 0, 0, 0.65);
}

.closeModal {
  color:#fff; font-size: 6em; font-weight: 300; 
}

.closeModal:hover {
  text-decoration: none;
}

.name {
		color: rgb(208, 162, 140); 
    text-transform: uppercase; 
    font-size: 4em; 
    text-align: center;
    line-height: 1.25;
}

.text {
  text-align:justify; font-size: 1.5em;
}

#ask_info {
    background-color:rgba(0,0,0,0.2) !important;
    border: 1px solid  #D0A28C !important;
    color: #ccc !important;
    border: 1px solid #d0a28c;
    font-family: 'Engravers';
    font-size: 20px;
    height: 50px; 
    width: 300px;
}

#ask_info:hover {
    background-color: #d0a28c !important;
    border: 1px solid #d0a28c;
    border-radius: 10px;
    font-family: 'Engravers';
    font-size: 25px;
}

#ask_info {
  -webkit-transition: all 1s ease; /* Safari and Chrome */
  -moz-transition: all 1s ease; /* Firefox */
  -ms-transition: all 1s ease; /* IE 9 */
  -o-transition: all 1s ease; /* Opera */
  transition: all 1s ease;
}

.logo_container {
    position: relative;
    top: 3.5vh;
    left: 3%; 
} 

h1 {
  padding-bottom: 10px;
}

.scrollable {
  overflow-y: auto; 
  max-height: 100vh;
}

/* texto pequeño en movil*/
@media only screen and (max-width: 800px){
    .text-mobile{
        font-size: 3em !important;
        /* text-align: left; */
    }    
}

@media screen and (max-width: 359px) {
  h1 { font-size: 4.5em !important; } 
  .closeModal { font-size: 3em; }	
  .name { font-size: 2.5em;}	
	.text { font-size: 1.25em; }
  .ask_info_wrapper { }	
	#ask_info {  font-size: 1.25em;	  }	
	#selected_img { max-width: 30%;	}
}

@media screen and (min-width: 360px) and (max-width: 575px) {
  h1 { font-size: 1.8em !important; } 
  .closeModal { font-size: 3.5em; }	
  .name { font-size: 2.5em;}	
	.text { font-size: 1.5em; }	
  .ask_info_wrapper { }	
	#ask_info {  font-size: 1.25em;	}		
	#selected_img { max-width: 30%;	}
}

@media screen and (min-width: 576px) and (max-width: 767px) {
  h1 { font-size: 2em !important; }
  .closeModal { font-size: 4em; }	
  .name { font-size: 3em;}	
	.text { font-size: 1.6em; }	
	#ask_info { 	}	
	#selected_img { max-width: 30%;	} 
}

@media screen and (min-width: 768px) and (max-width: 991px){
  h1 { font-size: 3em !important; } 
  .closeModal { font-size: 5em; }	
  .name { font-size: 3.5em;}	
	.text { font-size: 1.7em; }	
	#ask_info { 	}	
}

@media screen and (min-width: 992px) and (max-width: 1199px){
  h1 { font-size: 4em !important; } 
  .closeModal { font-size: 5.5em; }	
  .name { font-size: 4em;}	
	.text { font-size: 1.8em; }	
}

@media screen and (min-width: 1200px){
  h1 { font-size: 5em !important; } 
  .closeModal { font-size: 6em; }	
  .name { font-size: 4.5em;}	
	.text { font-size: 2em; }	
}

</style>