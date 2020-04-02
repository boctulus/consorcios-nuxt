<template>
    <div style="margin-top: 50px;">
        <h1>Página de prebas</h1>

        <label>Archivo
            <input type="file" id="file" ref="file" v-on:change="onChangeFileUpload()"/>
        </label>
        <v-btn v-on:click="submitForm()">Subir</v-btn>


        <p/>
        <button @click="downloadWithAxios">Download file</button>

    </div>
</template>


<script>

export default {    
    data(){
      return {
        file: '',
        url:'http://elgrove.co/download/get/44'
      }
    },

    methods: {
      /* Upload */ 

      submitForm(){
            let formData = new FormData();
            formData.append('file', this.file);
            formData.append('belongs_to',349);
  
            this.$axios.post('http://elgrove.co/api/v1/files',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${this.$store.state.auth.authUser.accessToken}`
                    }
                }
            ).then(function({data}){
              console.log(data.data.uploaded[0].id);
            })
            .catch(function(){
              console.log('File upload failure');
            });
      },
  
      onChangeFileUpload(){
        this.file = this.$refs.file.files[0];
      },

      /*      
        Download 
      
         https://codepen.io/nigamshirish/pen/ZMpvRa?editors=1010
      */

    forceFileDownload(response, filename){
      const url = window.URL.createObjectURL(new Blob([response.data]))

      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', filename) 
      document.body.appendChild(link)
      link.click()
    },
    
   
    downloadWithAxios(){

      this.$axios.get('http://elgrove.co/download/get/44', 
      { 
        responseType: 'arraybuffer',
        headers: {
          'Authorization': `Bearer ${this.$store.state.auth.authUser.accessToken}`
        }
      })
      .then(response => {
          this.forceFileDownload(response, 'imagen.jpg');
      }).catch((error) => {
          //const response = error.response;
          console.log(error);
      });
    }

  }    
  
}
</script>