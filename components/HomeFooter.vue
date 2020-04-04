<template>
		<v-img src="/profesionales-certificados-prosoc.png"    lazy-src class="img img4" id="contacto">
          <b-container style="color: #ffffff;">        
                <b-row class="mb-5 mt-5 mx-auto"><h3 class="form_h text-mobile">CONTACTO</h3></b-row>  

                <b-row class="w-100">
                  <b-col md="6" class="engravers">
                    <b-row class="mb-3 ml-auto info">Teléfono: (221) 15 545-2109</b-row>
                    <b-row class="mb-3 ml-auto info">Correo: adm.elgrove@outlook.com</b-row>
                    <b-row class="mb-3 ml-auto info" style="padding-bottom: 10px;">Dirección: calle 28 nro 167, La Plata, Bs As</b-row>
                    <b-row class="mb-3 ml-auto info">                      
                      <img src="https://i.imgur.com/npweaNh.png" alt="" width="20" height="20" style="margin-top: 2px"/>
                      <span class="engravers" style="color: #ffffff; padding-left:8px;"><n-link to="/blog" style="color: white; text-decoration: none; font-size: 20px;">BLOG </n-link></span>
                    </b-row>
                    <b-row class="mx-auto">
                      <!-- https://www.maps.ie/create-google-map/ -->
                      <div style="width: 100%"><iframe width="100%" height="308" src="https://maps.google.com/maps?width=100%&amp;height=308&amp;hl=en&amp;q=CALLE%2028%20NRO%20167%2C%20LA%20PLATA%2C%20ARGENTINA+(El%20Grove)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/coordinates.html">gps coordinates</a></iframe></div>
                    </b-row>
                  </b-col>

                  <div id="form_title">
                    <h3 class="mt-3 ml-3 engravers" style="font-weight: 500;">SU CONSULTA</h3>
                  </div>
                     
                  <b-col md="6"  class="mt-3">
                      <ValidationObserver v-slot="{ handleSubmit }" ref="form">
                        <form @submit.prevent="handleSubmit(onSubmit)"> 
                          <b-row>
                            <b-col md="6" sm="12">
                              <div class="form-group engravers label">
                                <label for="nombre">NOMBRE</label><label class="gfield_required">*</label>
                                <validation-provider rules="required|alpha_spaces|min:5" v-slot="{ errors }">  
                                  <input type="text" v-model="nombre" v-bind:class="{ required: errors[0] }"  class="form-control input" id="nombre">
                                  <div class="error_msg">{{ errors[0] }}</div>
                                </validation-provider>
                              </div>  
                            </b-col>
                            
                            <b-col md="6" sm="12">
                              <div class="form-group engravers label">
                                <label for="telefono">TELÉFONO</label><label class="gfield_required">*</label>
                                <validation-provider rules="required" v-slot="{ errors }">
                                   <input type="text" v-model="telefono" v-bind:class="{ required: errors[0] || customErrors['telefono']}" class="form-control input" id="telefono">
                                  <div class="error_msg">{{ errors[0] || customErrors['telefono'] }}</div>
                                </validation-provider>
                              </div>
                            </b-col>
                          </b-row>    
                        
                          <b-row>
                            <b-col md="6" sm="12">
                              <div class="form-group engravers label">
                                <label for="email">EMAIL</label><label class="gfield_required">*</label>
                                <validation-provider rules="required|email" v-slot="{ errors }">
                                  <input type="email" v-model="email" v-bind:class="{ required: errors[0] }" class="form-control input" name="email" id="email">
                                  <div class="error_msg">{{ errors[0] }}</div>
                                 </validation-provider>
                              </div>  
                            </b-col>
                            
                            <b-col md="6" sm="12">
                              <div class="form-group engravers label">
                                <label for="servicio">SERVICIO</label><label class="gfield_required">*</label>
                                <validation-provider rules="required" v-slot="{ errors }">
                                  <select v-model="servicio" v-bind:class="{ required: errors[0] }" class="form-control input" id="servicio">
                                    <option v-for="(el_servicio, index) in servicios" v-bind:key="index">{{ el_servicio.name }}</option>
                                  </select>
                                  <div class="error_msg">{{ errors[0] }}</div>
                                </validation-provider>
                              </div>  
                            </b-col>
                          </b-row>    
                          
                          <div class="form-group engravers label">
                            <label for="consulta">CONSULTA</label><label class="gfield_required">*</label>
                            <validation-provider rules="required" v-slot="{ errors }">
                              <textarea
                                id="consulta"
                                placeholder="Su consulta"
                                rows="3"
                                max-rows="6"
                                class="input"
                                name="consulta"
                                v-model="consulta"
                                v-bind:class="{ required: errors[0] }"
                              />
                              <div class="error_msg">{{ errors[0] }}</div>
                            </validation-provider>
                          </div>  
                          
                          <b-button type="submit" block class="input" id="gform_submit_button_2">Enviar</b-button> 
                        </form>
                      </ValidationObserver>    
                    </b-col>


                </b-row>                  
                
                <span id="theend"></span>
          </b-container>
        </v-img>	
</template>


<script>
import { extend, ValidationProvider, ValidationObserver } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import es from 'vee-validate/dist/locale/es'
import Vue from 'vue'

//Vue.component('ValidationProvider', ValidationProvider)
//Vue.component('ValidationObserver', ValidationObserver)

for (let rule in rules){
  extend(rule, {
    ...rules[rule], // add the rule
    message: es.messages[rule] // add its message
  })
} 

export default {
     name: 'HomeFooter',
     data() {
      return {
        nombre: null,
        telefono: null, 
        email: null, 
        servicio: null, 
        consulta: null,
        customErrors: [],
        servicios: []
       }
    },

    mounted() {
    this.$axios.get('/services?enabled=1')
    .then(response => {
        this.servicios = response.data.data;
    }).catch((error) => {
        const response = error.response;
        console.log(response.data.error);
    });
  },

    methods: {
      onSubmit() {
        //console.log('SUBMITTING ...');
        //console.log([this.nombre, this.email, this.telefono, this.servicio, this.consulta]);

        this.$refs.form.validate().then(success => {
          if (!success) {
            return;
          }

          console.log('Submited !!!');

          this.$axios.request({
            url: `/messages`,  
            method: 'post',
            headers: {
                
            },
            data: {
              name:  this.nombre, 
              email: this.email, 
              phone: this.telefono, 
              subject: this.servicio, 
              content: this.consulta
            }
          }).then( ({ data }) => {
            this.nombre = this.email = this.telefono = this.servicio = this.consulta = ''; 
            
            // Wait until the models are updated in the UI
            this.$nextTick(() => {
              this.$refs.form.reset();
            }); 

            // mostrar toast agradeciendo */
            console.log(data);

          }).catch((error) => {
              const response = error.response;
              console.log(response.data.error);
              console.log(response.data.error_detail);
          });

        });
        
      }
    },
    watch: {
      telefono: function(val){   
        this.customErrors['telefono'] = (val.length !=0 && val.match(/^[0-9\-\('\) +]+$/) == null) ? 'Formato de teléfono inválido' : null;
      }
    },
    components: {
      ValidationProvider,
      ValidationObserver
    }
}
</script>

<style scoped>

.error_msg {
  font-size: 0.8em;
}

#servicio {
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
    margin-bottom: 1em;
}

#servicio:focus {
    outline: none !important;
    box-shadow: none;
}

.img4 {
  background-color: #50575E;
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

#consulta {
  height: 100px !important;
  width: 100%;
}

#consulta::-webkit-scrollbar {
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