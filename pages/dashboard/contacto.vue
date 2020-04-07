<template>
  <div>            
    <h1 class="mb-5">Datos de contacto</h1>  

            <v-card>
                <v-card-text class="tt">
                    <v-text-field v-model="editedItem.phone" label="Teléfono" class="pontano"></v-text-field>
                    <span class="err" v-if="backendValidationErrors['phone']">{{ backendValidationErrors['phone'] }}</span>
                </v-card-text>

                <v-card-text class="tt">
                    <v-text-field v-model="editedItem.email" label="E-mail" class="pontano"></v-text-field>
                    <span class="err" v-if="backendValidationErrors['email']">{{ backendValidationErrors['email'] }}</span>
                </v-card-text>

                <v-card-text class="tt">
                    <v-text-field v-model="editedItem.address" label="Dirección" class="pontano"></v-text-field>
                    <span class="err" v-if="backendValidationErrors['address']">{{ backendValidationErrors['address'] }}</span>
                </v-card-text>

                <div style="text-align:right; padding-bottom:20px; padding-right: 5px;">
                    <v-btn color="blue darken-1" style="color:#fff;" @click="save">Guardar</v-btn>
                </div>
                
            </v-card>
        </div>

</template>

<script>
 
  export default {
    layout: 'dashboard',
    data: () => ({
      editedItem: {
        id: null,  
        phone: '',
        address: '',
        email: ''
      },
      backendValidationErrors: {
          'phone': null,
          'email': null,
          'address': null
      },
      defaultBackendValidationErrors: {
          'phone': null,
          'email': null,
          'address': null
      }      
    }),

    mounted() {
        this.fetchData();
    },

    methods: {
      fetchData () {         
        this.$axios.get('/contact_data', 
        { 
            headers: {
                'Authorization': `Bearer ${this.$store.state.auth.authUser.accessToken}`
            }
        })
        .then(response => {
            //console.log(response);
        
            this.editedItem.id = response.data.data[0].id;
            this.editedItem.phone = response.data.data[0].phone;
            this.editedItem.email = response.data.data[0].email;
            this.editedItem.address = response.data.data[0].address;
            
        }).catch((error) => {
            //const response = error.response;
            console.log(error);
        }); 
      },

      save () {       
          const id = this.editedItem.id; 
          
          this.$axios.request({
            url: `/contact_data/${id}`,  
            method: 'patch',
            headers: {
                'Authorization': `Bearer ${this.$store.state.auth.authUser.accessToken}`
            },
            data: this.editedItem
          }).then( ({ data }) => {

            Object.assign(this.backendValidationErrors, this.defaultBackendValidationErrors);
            // console.log(data);

          }).catch((error) => {
                console.log(error);

                let data =  error.response.data;

                if (data.error == 'Data validation error'){
                    for (const [key, arr] of Object.entries(data.error_detail)) {
                        arr.forEach(e => {
                            console.log(key + ' : ' + e.error_detail);
                            this.backendValidationErrors[key] = e.error_detail;
                        });
                    }
                }
          });
    },
  }
}
</script>


<style scoped>

.err {
    color: rgb(255,51,51);
    font-family: Engravers, sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 17px;
}

</style>