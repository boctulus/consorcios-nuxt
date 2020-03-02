<template>
		<v-img :src="require('../assets/administracion-profesional-de-condominios-1.jpg')" lazy-src style="height:100vh;">
        <b-container style="color: #ffffff;" class="d-flex h-100">
            <div class="justify-content-center align-self-center">
            
              	<b-row style="margin-top: -40px;">    
                  <b-col md="6" offset-md="3" class="mt-5 mb-3">
                    <h3 class="form_h text-mobile">Mi Edificio</h3>
                  </b-col>
                </b-row>    

                <b-row>
                  <b-col md="6" offset-md="3">
                    <div class="form-group engravers label">
                      <label for="edificio">Edificación</label><label class="gfield_required">*</label>
                        <select v-model="edificio_sel" class="form-control input" id="edificio">
                          <option v-for="(edificio, index) in edificios" v-bind:key="index">{{ edificio }}</option>
                        </select>
                    </div>  
                  </b-col>
                </b-row>

                <b-row>
                  <b-col md="6" offset-md="3">
                    <div class="form-group engravers label">
                      <label for="password">Contraseña</label><label class="gfield_required">*</label>
                      <input type="password" class="form-control input" id="password">
                    </div>  
                  </b-col>
                </b-row>    
                      
                <b-row>
                  <b-col md="6" offset-md="3">
                    <div class="form-group engravers label">
                      <b-button type="submit" block class="input" id="gform_submit_button_2">Enviar</b-button>
                    </div>  
                  </b-col>
                </b-row>    

            </div>
        </b-container>
    </v-img>	
</template>


<script>
export default {  
  layout: 'home',
  data() {
      return {
        edificio_sel: null, 
          edificios: [
            'El Águila',
            'El fuerte',
            'Los pitufos',
            'Administración'
          ]
       }
     }    
}
</script>


<style scoped>
#edificio {
    background-color: transparent !important;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-top-color: initial !important;
    border-right-color: initial !important;
    border-left-color: initial !important;
    border-bottom-color: rgb(107, 79, 58) !important;
    color: rgb(226, 210, 180);
    width: 100% !important;
    border: none !important;
    border-bottom: 1px solid #D0A28C !important;
    height: 50px; 
}

#edificio:focus {
    outline: none !important;
    box-shadow: none;
}

.img4 {
  background-color: #50575E;
  padding-top:0 !important;
}

.form_h {
  font-size: 4.5em;
}

.info {
  text-transform: uppercase;
}

.input {
  background-color:rgba(0,0,0,0.2) !important;
  border: 1px solid  #D0A28C !important;
  color: #ccc !important;
  height: 50px; 
}

.gfield_required {
  padding-left: 5px;
  color: rgb(240, 166, 144);
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

  .input {
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