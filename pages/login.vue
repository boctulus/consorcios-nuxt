<template>
		<v-img src="/administracion-profesional-de-condominios-1.jpg" lazy-src style="height:100vh;">
        <b-container style="color: #ffffff;" class="d-flex h-100">
            <div class="justify-content-center align-self-center w-100">
              <ValidationObserver v-slot="{ handleSubmit }" ref="form">
                <form @submit.prevent="handleSubmit(onSubmit)">                  
                  <b-row style="margin-top: -40px;">    
                    <b-col  xl="6" offset-xl="3"
                            lg="6" offset-lg="3" 
                            md="6" offset-md="3"
                            sm="6" offset-sm="3"
                            class="mt-5 mb-3">
                      <h3 class="form_h text-mobile">Mi Edificio</h3>
                    </b-col>
                  </b-row>    

                  <b-row>
                    <b-col  xl="6" offset-xl="3"
                            lg="6" offset-lg="3" 
                            md="6" offset-md="3"
                    >
                      <div class="form-group engravers label">
                        <label for="edificio">Edificación</label><label class="gfield_required">*</label>
                          <validation-provider rules="required" v-slot="{ errors }">
                            
                            <select v-model="selected" v-bind:class="{ required: errors[0] }" class="form-control input" name="selected" id="selected">
                              <option v-for="(usuario, index) in usuarios" v-bind:key="index">{{ usuario.name }}</option>
                            </select>

                            <span class="error_msg">{{ errors[0] }}</span>
                          </validation-provider>  
                      </div>  
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col  xl="6" offset-xl="3"
                            lg="6" offset-lg="3" 
                            md="6" offset-md="3"
                    >
                      <div class="form-group engravers label">
                        <label for="password">Contraseña</label><label class="gfield_required">*</label>
                        <validation-provider rules="required" v-slot="{ errors }">
                          <input type="password" v-model="password" class="form-control input" name="password" id="password" v-bind:class="{ required: errors[0] }" />
                          <span class="error_msg">{{ errors[0] }}</span>
                          <span class="error_msg" v-if="other_error">{{ other_error }}</span>
                        </validation-provider>
                      </div>  
                    </b-col>
                  </b-row>    
                  <b-row>
                    <b-col  xl="6" offset-xl="3"
                            lg="6" offset-lg="3" 
                            md="6" offset-md="3"
                    >
                      <div class="form-group engravers label">
                        <b-button type="submit" block class="input" id="gform_submit_button_2">Enviar</b-button>
                      </div>  
                    </b-col>
                  </b-row>    

                </form>
              </ValidationObserver>
            </div>
        </b-container>
    </v-img>	
</template>


<script>
import { ValidationProvider, extend, ValidationObserver } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
//import getData from '@/api/users.js';

extend('required', {
  ...required,
  message: 'Campo requerido'
});

export default {  
  layout: 'home',
  data() {
      return {
        other_error: null,
        usuarios: [],
        selected: null, 
        password: null
       }
  },
  watch: {
    selected: function(val) {
      this.other_error = null;
    },
    password: function(val) {
      this.other_error = null;
    }
  },

  created() {    
      this.$axios.get('/users?fields=id,name,username')
      .then(response => {
          //console.log(response);
          this.usuarios = response.data.data;
      }).catch((error) => {
          const response = error.response;
          //console.log('Error', error);
          console.log(response.data.error);
          //this.error = response.data.error;
      });
  },

  methods: {
    onSubmit() {
      //console.log('SUBMITTING ...');
      //console.log([this.selected, this.password]);

      this.$refs.form.validate().then(success => {
        if (!success) {
          return;
        }

        const username = this.usuarios.find(e => e.name == this.selected)['username'];

        this.$store.dispatch('auth/login', { username : username, password: this.password })
        .then(() => {

          this.$router.push('/dashboard');
        }) 
        .catch(err => {
          //console.log(err);  
          this.other_error = 'Usuario o contraseña incorrectos';
        })
      });
      
      
    }
  },
  components: {
    ValidationProvider,
    ValidationObserver
  }
}
</script>


<style scoped>

.required {
  outline: 1px solid red;
}

.error_msg {
  padding-top: 0.5em;
  color: red;
}

#selected {
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