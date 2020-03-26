<template>
  <div>            
    <h1 class="mb-5">Servicios</h1>
  
    <v-layout row justify-center>
      <v-dialog v-model="delete_confirmation_dialog" persistent max-width="320">
        <v-card>
          <v-card-title class="headline">Confirmación de borrado</v-card-title>
          <v-card-text>Deseas borrar el mensaje?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue" style="color:#fff;" @click="close_delete_confirmation_dialog()">Cancelar</v-btn>
            <v-btn color="red" style="color:#fff;" @click="erase">OK</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>

 
    <v-layout row justify="center">
      <v-dialog v-model="dialog" persistent max-width="500px" :style="{ position: 'absolute', elevation: 100, zIndex:6000 }">

        <!-- New button -->
        <template v-slot:activator="{ on }">
          <div style="text-align:right; width: 100%; margin-right: 6px; margin-bottom: 6px;">
            <v-btn color="primary" dark v-on="on" @click="formMode=null">Nuevo</v-btn>
          </div>  
        </template>

        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
            <a href="#" class="cross_close" @click="close">✕</a>
          </v-card-title>
          <v-card-text>
            <v-container>
             
              <v-text-field v-model="editedItem.name" label="Nombre" :class="{'disable-events': formMode=='see'}" ></v-text-field>
       
              <label aria-hidden="true" class="v-label v-label--active theme--light" style="left: 0px; right: auto; position: absolute; font-size: 12px !important; margin-left: 32px;">Habilitado?</label>
              <v-checkbox type="checkbox" v-model="editedItem.enabled" :label="editedItem.enabled | boolean" :class="{'disable-events': formMode=='see'}"/>

              <v-text-field v-model="editedItem.img" label="Imagen" :class="{'disable-events': formMode=='see'}"></v-text-field>
              <div style="text-align:center;">
                <img style="max-width:90%;" :src="editedItem.img" v-if="editedItem.img.match(/^(https:|http:)/)" />
                <img style="max-width:90%;" :src="`/servicios/${editedItem.img}`" v-if="!editedItem.img.match(/^(https:|http:)/)" />
              </div>

              <v-textarea v-model="editedItem.text" auto-grow label="Texto" :class="{'disable-events': formMode=='see'}"></v-textarea>

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

    <div style="
        background: #fff;
    ">

        <v-data-table
          :headers="headers"
          :items="regs"
          class="elevation-1"
        >
            <template  v-slot:items="props">
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.text }}</td>
                <td>{{ props.item.img }}</td>
                <td>{{ props.item.enabled | boolean }}</td>
                <td>      
                    <v-icon
                      small
                      style="margin-right:0.9em;"
                      @click="seeItem(props.item)"
                    >
                      fa-eye
                    </v-icon>

                    <v-icon
                      small
                      class="mr-2"
                      @click="editItem(props.item)"
                    >
                      edit
                    </v-icon>

                    <v-icon
                      small
                      @click="showDeleteDialog(props.item)"
                    >
                      delete
                    </v-icon>
                </td>   
            </template>            

        </v-data-table>
    </div> 
  </div>  
</template>

<script>
  //import getData from '@/api/services.js';

  export default {
    layout: 'dashboard',
    data: () => ({
      dialog: false,
      delete_confirmation_dialog: false,
      formMode: 'create',
      index: null,
      headers: [
        { text: 'Nombre', value: 'name' },
        { text: 'Texto', value: 'text' },
        { text: 'Imagen', value: 'img' },
        { text: 'Habilitado', value: 'enabled' },
      ],
      regs: [],
      totalItems: null,
      editedIndex: -1,
      editedItem: {
        name: '',
        text: '',
        img: '',
        enabled: false
      },
      defaultItem: {
        name: '',
        text: '',
        img: '',
        enabled: false
      },
      loading: true,
      pagination: {
        rowsPerPage: 100,
        descending: false,
        sortBy: "name",
        page: 1
      },
      search: '',
    }),

    computed: {
      formTitle: function() {
        switch(this.formMode){
          case 'see': 
            return 'Servicio';
            break;
          case 'edit': 
            return 'Editar Servicio';
            break;  
          case 'create': 
            return 'Nuevo Servicio';
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
      //this.initialize()
    },

    mounted () {
      this.fetchData();
    },

    filters: {
      boolean: function (value) {
        value = value.toString()
        return (value === 'true' || value === '1') ? 'si' : 'no';
      }
    },

    methods: {
      fetchData () {
         return new Promise((resolve, reject) => {
                const { sortBy, descending, page, rowsPerPage } = this.pagination;
                //let search = this.search.trim().toLowerCase();

                this.$axios.get('http://elgrove.co/api/v1/services' + 
                  `?pageSize=${rowsPerPage}` +
                  `&page=${page}` +
                  `&order[${sortBy}]=` + (descending ? 'ASC' : 'DESC')
                  /* +  "&searchVal=" + search, */, 
                { 
                  headers: {
                    'Authorization': `Bearer ${this.$store.state.auth.authUser.accessToken}`
                  }
                })
                .then(response => {
                    //this.regs = response.data.data;
                    //console.log(this.regs);
                    let items = response.data.data;
                    const totalItems = response.data.paginator.total;

                    /*
                    if (search) {
                        items = items.filter(item => {
                            return Object.values(item)
                                .join(",")
                                .toLowerCase()
                                .includes(search);
                        });
                    }
                    */
        
                    this.regs = items;
                    this.totalItems = totalItems;
                    this.loading = false;
                    resolve();
                }).catch((error) => {
                    const response = error.response;
                    console.log(response.data.error);
                });
         });       
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

      close_delete_confirmation_dialog() {
        this.delete_confirmation_dialog = false; 
        this.dialog = false;
      },

      erase () {
        this.delete_confirmation_dialog = false; 
        this.formMode = null;
        this.regs.splice(this.index, 1);
      },

      close () {
        this.dialog = false;
        this.formMode = null;
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        this.formMode = null;

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
.cross_close {
    position: absolute; 
    right: 10px; 
    font-size: 1.5rem;
    color: #ccc;
    cursor: pointer !important;
  }

  .cross_close:hover {
    text-decoration: none;
    color: #000;
  }
</style>