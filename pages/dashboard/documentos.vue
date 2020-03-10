<template>
  <div>
    <h1 class="mb-5">DOCUMENTOS</h1>

    
    <v-layout row justify="center">
      <v-dialog v-model="dialog" persistent max-width="500px" :style="{ position: 'absolute', elevation: 100, zIndex:6000 }">

        <!-- New button -->
        <!--template v-slot:activator="{ on }">
          <div style="text-align:right; width: 100%; margin-right: 6px; margin-bottom: 6px;">
            <v-btn color="primary" dark v-on="on" @click="formMode=null">Nuevo</v-btn>
          </div>  
        </template-->

        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-layout row>
                <v-flex cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.name" :class="{'disable-events': formMode=='see'}" label="Tema"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" style="color:#fff;" text @click="close">Cerrar</v-btn>
            <v-btn color="blue darken-1" style="color:#fff;" text @click="save" v-if="formMode == 'edit' || formMode == null">Guardar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>

    <v-app id="inspire" style="
        background: #fff;
    ">

        <v-data-table
          :headers="headers"
          :items="regs"
          class="elevation-1"
        >
            <template  v-slot:items="props">
                <td>{{ props.item.name }}</td>
                <td align="right"> 
                  <a :href="props.item.file" target="_blank" rel="noopener noreferrer">     
                    <v-icon
                      small
                      class="download"
                    >
                      fa-download
                    </v-icon>
                  </a>
                </td>   
            </template>            

        </v-data-table>
    </v-app> 
  </div>  
</template>

<script>
  import getMsg from '@/api/documentos.js';

  export default {
    layout: 'dashboard',
    data: () => ({
      dialog: false,
      delete_confirmation_dialog: false,
      formMode: 'Nuevo Documento',
      index: null,
      headers: [
        { text: 'Documento', value: 'name' },
      ],
      regs: [],
      editedIndex: -1,
      editedItem: {
        name: ''
      },
      defaultItem: {
        name: ''
      },
    }),

    computed: {
      formTitle: function() {
        switch(this.formMode){
          case 'see': 
            return'Documento';
            break;
          case 'edit': 
            return 'Editar Documento';
            break;  
          case 'create': 
            return 'Nuevo Documento';
            break;
        }
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.regs = getMsg();
      },

      seeItem (item) {
        this.editedIndex = this.regs.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.formMode = 'see';
        this.dialog = true;
      },

      editItem (item) {
        this.editedIndex = this.regs.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.formMode = 'edit';
        this.dialog = true;
      },

      showDialog(){
        this.formMode = 'create';
        this.dialog = true;
      },

      showDeleteDialog (item) {
        this.index = this.regs.indexOf(item);
        this.delete_confirmation_dialog = true;
      },

      erase () {
        this.delete_confirmation_dialog = false; 
        this.regs.splice(this.index, 1);
      },

      // https://codepen.io/nigamshirish/pen/ZMpvRa

      forceFileDownload(response){
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'file.png') //or any other extension
        document.body.appendChild(link)
        link.click()
      },
    
      downloadWithVueResource(url) {        
        this.$http({
          method: 'get',
          url: url,
          responseType: 'arraybuffer'
        })
        .then(response => {
          this.forceFileDownload(response)  
        })
        .catch(() => console.log('error occured'))
        
      },
    
      downloadWithAxios(){
        axios({
          method: 'get',
          url: this.url,
          responseType: 'arraybuffer'
        })
        .then(response => {
          
          this.forceFileDownload(response)
          
        })
        .catch(() => console.log('error occured'))
      },
      
      DownloadItem (item) {
        this.downloadWithVueResource(item.file);
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.regs[this.editedIndex], this.editedItem)
        } else {
          this.regs.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>


<style scoped>
a {
	 text-decoration: none;
}
</style>