<template>
    <div style="margin-top: 50px;">
        <h1>Página de prebas</h1>

        <v-btn @click="hacerRequest()">Hacer request</v-btn>
    </div>
</template>

<script>
export default {    

    methods: {
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