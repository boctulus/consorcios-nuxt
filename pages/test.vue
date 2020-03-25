<template>
    <div style="margin-top: 50px;">
        <h1>Página de prebas</h1>

        <v-btn @click="hacerRequest()">Hacer request</v-btn>
        
        <hr/>

        <v-btn @click="cargarDatos()">Cargar datos</v-btn>
    </div>
</template>


<script>
import getData from '@/api/services.js';

export default {    

    methods: {
        cargarDatos() {
            let regs = getData();            
            
            for (let i=0; i<regs.length; i++){
                let reg = regs[i];
                //console.log(data.enabled);

                   
                if (reg.enabled ===  true)
                    reg.enabled = '1';
                else if (reg.enabled === false)
                    reg.enabled = '0';   
                

                console.log(reg);    
                
                this.$axios.request({
                    url: `http://elgrove.co/api/v1/services`,  
                    method: 'post',
                    headers: {
                        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImlhdCI6MTU4NTA3NjU1NiwiZXhwIjoxNTk0MDc2NTU2LCJpcCI6IjEyNy4wLjAuMSIsInVpZCI6MzMyLCJyb2xlcyI6WyJhZG1pbiJdLCJjb25maXJtZWRfZW1haWwiOm51bGwsInBlcm1pc3Npb25zIjpbXX0.UlUXiLCqhHFFwfhjwt4SgBtJ1v68ZvKAp8Drg-z5Ro8`
                    },  
                    data: reg
                }).then( res => {
                    console.log(res);

                }).catch((error) => {
                    console.log(error);
                });
                
            }
            

        },

        hacerRequest() {
            this.$axios.request({
            url: `http://elgrove.co/api/v1/messages/104`,  
            method: 'patch',
            headers: {
                // boctulus (admin)
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImlhdCI6MTU4NTA3NjU1NiwiZXhwIjoxNTk0MDc2NTU2LCJpcCI6IjEyNy4wLjAuMSIsInVpZCI6MzMyLCJyb2xlcyI6WyJhZG1pbiJdLCJjb25maXJtZWRfZW1haWwiOm51bGwsInBlcm1pc3Npb25zIjpbXX0.UlUXiLCqhHFFwfhjwt4SgBtJ1v68ZvKAp8Drg-z5Ro8`
            },  
            data: { phone: '7777777' }
          }).then( ({ data }) => {
             console.log(data);

          }).catch((error) => {
              console.log(error);
          });
        }

    }
}
</script>