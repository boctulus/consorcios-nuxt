<template>
  <div :style="{'background': 'url(/administracion-profesional-de-condominios-1.jpg)', 'backgroundSize': 'cover' ,minHeight:'100vh'}">

    <div class="logo_container">
        <n-link to="/home">
          <v-img src="/elgrove_nueva_tipo.png" lazy-src class="logo" />
        </n-link>
    </div>   

    <b-container style="color: #ffffff;"> 
       
       <!-- color: #808b97 -->
        <h1 class="engravers text-mobile mt-1 mb-4">MARCO LEGAL</h1>

        <b-row>
          <b-col class="mb-5" md="6" v-for="item in regs" v-bind:key="item.name">
            <h2 style="font-size: 1.3rem;"><strong><span class="pontano" style="color: #d0a28c;">{{ item.name.toUpperCase() }}</span></strong></h2>
            <p>&nbsp;</p>   

            <div class="btn" style="text-align: center;"><span style="font-size: 1.2rem;"><strong><a href="#" @click="download(item.file_id)"><span class="aft">DESCARGAR</span></a></strong></span></div>
          </b-col>

        </b-row>
       
    </b-container>

    
  </div>
</template>

<script>

export default {  
  layout: 'home',
  data: () => ({
    regs: [],
    file_obj: null,
    loading: true,
    rowsPerPageItems: [10,20,100],
    pagination: {
      rowsPerPage: 100,
      descending: false,
      sortBy: "created_at",
      page: 1,
      totalItems: null,
    },
    search: '',
  }),
  
  computed: {
    filename: function() {
      return this.file_obj == null ? { "filename": '', "id": this.editedItem.id } : this.file_obj.filename;
    }
  },

  mounted () {
    this.fetchData();
  },

  methods: {
    fetchData () {
        return new Promise((resolve, reject) => {
          const { sortBy, descending, page, rowsPerPage } = this.pagination;
          let search = this.search.trim().toLowerCase();

          this.$axios.get('http://elgrove.co/api/v1/legal_documents' + 
            `?pageSize=${rowsPerPage}` +
            `&page=${page}` +
            `&orderBy[${sortBy}]=` + (descending ? 'ASC' : 'DESC'), 
          { 
            headers: {
             
            }
          })
          .then(response => {
              let items = response.data.data;
              const totalItems = response.data.paginator.total;
              
              if (search) {
                  items = items.filter(item => {
                      return Object.values(item)
                          .join(",")
                          .toLowerCase()
                          .includes(search);
                  });
              }
              
              this.regs = items;
              this.pagination.totalItems = totalItems;
              this.loading = false;
              resolve();
          }).catch((error) => {
              //const response = error.response;
              console.log(error);
              reject(error);
          });
         });       
      },

      forceFileDownload(response, filename){
        const url = window.URL.createObjectURL(new Blob([response.data]))

        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', filename) 
        document.body.appendChild(link)
        link.click()
      },

      fileDownload(){
        this.$axios.get('http://elgrove.co/download/get/'+ this.file_obj.id, 
        { 
          responseType: 'arraybuffer',
          headers: {
            // 'Authorization': `Bearer ${this.$store.state.auth.authUser.accessToken}`
          }
        })
        .then(response => {
            this.forceFileDownload(response, this.file_obj.filename);
        }).catch((error) => {
            //const response = error.response;
            console.log(error);
        });
      },

      download(file_id) {
        this.$axios.request({
            url: `http://elgrove.co/api/v1/files/${file_id}?fields=filename`,  
            method: 'get',
            headers: {
                // 'Authorization': `Bearer ${this.$store.state.auth.authUser.accessToken}`
            }
        }).then(({data}) => {
          //console.log(data.data.filename);

          this.file_obj = {
            "filename": data.data.filename,
            "id": file_id
          }          

          this.fileDownload();
        
        }).catch((error) => {
            console.log(error);
        });    

      }
  }
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