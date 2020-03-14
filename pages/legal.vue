<template>
  <div :style="{'background': 'url(/administracion-profesional-de-condominios-1.jpg)', 'backgroundSize': 'cover' ,minHeight:'100vh'}">

    <div class="logo_container">
        <n-link to="/home">
          <v-img :src="require('../assets/logov2b_justo.png')" lazy-src class="logo" />
        </n-link>
    </div>   

    <b-container style="color: #ffffff;"> 
       
       <!-- color: #808b97 -->
        <h1 class="engravers text-mobile mt-1 mb-4">MARCO LEGAL</h1>

        <b-row>
          <b-col class="mb-5" md="6" v-for="item in documents" v-bind:key="item.name">
            <h2 style="font-size: 1.3rem;"><strong><span class="pontano" style="color: #d0a28c;">{{item.name}}</span></strong></h2>
            <p>&nbsp;</p>   

            <div class="btn" style="text-align: center;"><span style="font-size: 1.2rem;"><strong><a :href="item.file" target="_blank" rel="noopener noreferrer"><span class="aft">DESCARGAR</span></a></strong></span></div>
          </b-col>

        </b-row>
       
    </b-container>

    
  </div>
</template>

<script>

export default {  
  layout: 'home',
  data: () => ({
    documents: [
      {
        'name': 'LEY DE PROPIEDAD EN CONDOMINIO DE INMUEBLES PARA EL DISTRITO FEDERAL',
        'file': 'http://www.paot.org.mx/centro/leyes/df/pdf/2015/LEY_PROPIEDAD_CONDOMINIO_INMUEBLES_13_01_2015.pdf'
      },
      {
        'name': 'REGLAMENTO DE LA LEY DE PROPIEDAD EN CONDOMINIO DE INMUEBLES PARA EL DISTRITO FEDERAL',
        'file': 'http://www.aldf.gob.mx/archivo-0f05874fac7a0a4b94b9935dd0998eae.pdf'
      },
      {
        'name': 'LEY DE CULTURA CÍVICA D.F.',
        'file': 'http://www.aldf.gob.mx/archivo-0f05874fac7a0a4b94b9935dd0998eae.pdf'
      },
      {
        'name': 'LEY DE PROPIEDAD EN CONDOMINIO EDO. DE MEX.',
        'file': 'http://www.aldf.gob.mx/archivo-0f05874fac7a0a4b94b9935dd0998eae.pdf'
      },
      {
        'name': 'LEY DE PROCURADURÍA SOCIAL DEL D.F.',
        'file': 'http://www.aldf.gob.mx/archivo-0f05874fac7a0a4b94b9935dd0998eae.pdf'
      }
    ]
  })  
}
</script>


<style scoped>
h1 {
  color: #ccc; 
  text-align: center;
  padding-top: 0.5em !important;
}

a:hover {
  text-decoration: none;
}

.aft {
  padding: 1em 0 1em 2em;
  /* #808b97 */
  color: #ccc;
}

/*animaciòn del bot´ón*/
.btn {
  padding: 10px;
  text-align: center;
  background-image: linear-gradient(to right, #d0a28c 20%, transparent 20%), linear-gradient(to bottom, transparent, transparent), linear-gradient(to left, transparent 70%, #d0a28c 30%), linear-gradient(to top, #d0a28c 100%, #d0a28c);
  background-origin: border-box;
  background-size: 100% 3px, 3px 100%, 100% 3px, 3px 100%;
  background-position: top left, top right, bottom right, bottom left;
  background-repeat: no-repeat;
  font-family: Engravers;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
   -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.btn:hover{
  background-image:none;
}

.btn:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  right:100%;
  bottom: 0;
  background: #d0a28c;
  height: 3px;
  -webkit-transition-property: right;
  transition-property: right;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}

.btn:hover:before, .btn:focus:before, .btn:active:before {
  right: 0;
}

.logo_container {
    position: relative;
    top: 3.5vh;
    left: 3%; 
} 


@media only screen and (max-width: 799px){
    .logo_container {
      width: 5.5em;  
    }
}

@media only screen and (min-width: 800px) and (max-width: 1024px){
    .logo_container {
      width: 7em;  
    }

    .logo_wrapper {
      height: 120px !important;
    }
}


@media only screen and (min-width: 1025px){
    .logo_wrapper {
      height: 160px !important;
    }
}

/* texto pequeño en movil*/
@media only screen and (max-width: 800px){
    .text-mobile{
        font-size: 3em !important;
        /* text-align: left; */
    }    
}

@media screen and (max-width: 575px) {
  h1 {
    font-size: 1.8em !important;
  }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
  h1 {
    font-size: 2em !important;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px){
  h1 {
    font-size: 3em !important;
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px){
  h1 {
    font-size: 4em !important;
  }
}

@media screen and (min-width: 1200px){
  h1 {
    font-size: 5em !important;
  }

}

</style>