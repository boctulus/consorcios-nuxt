<template>
  <div id="appRoot">
    <nuxt />
  </div>
</template>

<script>
  export default {}
</script>


<style>
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
}

.logo_container {
    width: 10em;  
}

.logo {
    z-index:4000; 
}    

.img {
    min-height: 100vh;
}

@media only screen and (max-width: 800px){
    .text-mobile{
        font-size: 3em !important;
    }    
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
}
</style>