<template>
		<v-img :src="require('../assets/profesionales-certificados-prosoc.png')"    lazy-src class="img img4" id="contacto">
          <b-container style="color: #ffffff;">        
                <b-row class="mb-5 mt-5 mx-auto"><h3 class="form_h text-mobile">CONTACTO</h3></b-row>  

                <b-row>
                  <b-col md="6" class="engravers">
                    <b-row class="mb-3 ml-auto info">Teléfono: (221) 15 545-2109</b-row>
                    <b-row class="mb-3 ml-auto info">Correo: adm.elgrove@outlook.com</b-row>
                    <b-row class="mb-3 ml-auto info" style="padding-bottom: 10px;">Dirección: calle 28 nro 167, La Plata, Bs As</b-row>
                    <b-row class="mb-3 ml-auto info">                      
                      <img src="https://i.imgur.com/npweaNh.png" alt="" width="20" height="20"/>
                      <span class="engravers" style="color: #ffffff; padding-left:8px;"><n-link to="/blog" style="color: white; text-decoration: none; font-size: 20px;">BLOG </n-link></span>
                    </b-row>
                    <b-row class="mx-auto">
                      <!-- https://www.maps.ie/create-google-map/ -->
                      <div style="width: 100%"><iframe width="100%" height="316" src="https://maps.google.com/maps?width=100%&amp;height=276&amp;hl=en&amp;q=CALLE%2028%20NRO%20167%2C%20LA%20PLATA%2C%20ARGENTINA+(El%20Grove)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/coordinates.html">gps coordinates</a></iframe></div>
                    </b-row>
                  </b-col>

                  <div id="form_title">
                    <h3 class="mt-3 ml-3 engravers" style="font-weight: 500;">SU CONSULTA</h3>
                  </div>

                  <b-col md="6"  class="mt-3">
                    <b-row>
                    <b-col md="6" sm="12">

                      <b-form-group
                      label="NOMBRE"
                      label-for="input-1"
                      class="engravers label"
                      >
                      <b-form-input id="input-1" trim class="footer-input"></b-form-input>
                      </b-form-group>   

                    </b-col>
                    
                    <b-col md="6" sm="12">

                      <b-form-group
                      label="TELEFONO"
                      label-for="input-2"
                      class="engravers label"
                      >
                      <b-form-input id="input-2" trim class="footer-input"></b-form-input>
                      </b-form-group>   

                    </b-col>
                    </b-row>    
                  
                  
                  <b-form-group
                    label="EMAIL"
                    label-for="input-3"
                    class="engravers label"
                  >
                    <b-form-input id="input-3" trim class="footer-input"></b-form-input>
                  </b-form-group>   

                  <b-form-group
                    label="SERVICIO"
                    label-for="input-4"
                    class="engravers label"
                  >
                    <b-form-input id="input-4" trim class="footer-input"></b-form-input>
                  </b-form-group>  

                  <b-form-group
                    label="CONSULTA"
                    label-for="input-4"
                    class="engravers label"
                  >
                    <b-form-textarea
                    id="input-5"
                    placeholder="Su consulta"
                    rows="3"
                    max-rows="6"
                    class="footer-input"
                    ></b-form-textarea>
                  </b-form-group>

                  <b-button type="submit" block class="footer-input" id="gform_submit_button_2">Enviar</b-button> 
                  </b-col>
                </b-row>                  
                
          </b-container>
        </v-img>	
</template>


<script>
export default {
     name: 'HomeFooter',
}
</script>

<style scoped>
.img4 {
  background-color: #50575E;
}

.form_h {
  font-size: 4.5em;
}

.info {
  text-transform: uppercase;
}

.footer-input {
  background-color:rgba(0,0,0,0.2) !important;
  border: 1px solid rgb(111, 66, 45) !important;
  color: #ffffff !important;
  height: 50px; 
}

#input-5 {
  height: 50px !important;
}

#input-5::-webkit-scrollbar {
   display: none;
 }

.label {
  font-size:1.5em;
  font-weight: 600;
}

#gform_submit_button_2{
    background-color: transparent;
    border: 1px solid #d0a28c;
    font-family: 'Engravers';
    font-size: 20px;
    height: 50px; 
}

#gform_submit_button_2:hover{
    background-color: #d0a28c !important;
    border: 1px solid #d0a28c;
    border-radius: 10px;
    font-family: 'Engravers';
    font-size: 25px;
}

#gform_submit_button_2{
-webkit-transition: all 1s ease; /* Safari and Chrome */
    -moz-transition: all 1s ease; /* Firefox */
    -ms-transition: all 1s ease; /* IE 9 */
    -o-transition: all 1s ease; /* Opera */
    transition: all 1s ease;
}

#form_title {
  width: 100%;
  text-align: center;
  display: none;
} 

@media screen and (max-width: 360px) {
  .form_h {
    font-size: 4em;
  }

  .footer-input {
    background-color:rgba(0,0,0,0) !important;
    border: 1px solid rgb(111, 66, 45) !important;  
    width: calc(100vw - 30px); 
  }

  h1, .txt_anim { font-size: 2em !important; }
}

@media screen and (max-width: 767px) {
  #form_title {
    display: block;
  }
} 

</style>