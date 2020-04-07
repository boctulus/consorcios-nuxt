<template>
  <div>            
    <h1 class="mb-5">Mensajes</h1>
  
    <v-layout row justify-center>
      <v-dialog v-model="delete_confirmation_dialog" persistent max-width="320">
        <v-card>
          <v-card-title class="headline">Confirmación de borrado</v-card-title>
          <v-card-text>Deseas borrar?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue" style="color:#fff;" @click="close_delete_confirmation_dialog()">Cancelar</v-btn>
            <v-btn color="red" style="color:#fff;" @click="erase">OK</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>

 
    <v-btn style="margin-left: 0;" @click="deleteSelected()">Borrar</v-btn>

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
            <a href="#" class="cross_close" @click="close">✕</a>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-layout row style="flex-direction: column !important;">
                <v-flex cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.subject" :class="{'disable-events': formMode=='see'}" label="Tema"></v-text-field>
                </v-flex>
                <v-flex cols="12" sm="6" md="4">
                  <v-textarea v-model="editedItem.content" :class="{'disable-events': formMode=='see'}" label="Consulta"></v-textarea>
                </v-flex>
                <v-flex cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.name" :class="{'disable-events': formMode=='see'}" label="Nombre"></v-text-field>
                </v-flex>
                <v-flex cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.phone" :class="{'disable-events': formMode=='see'}" label="Tel."></v-text-field>
                </v-flex>
                <v-flex cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.email" :class="{'disable-events': formMode=='see'}" label="E-mail"></v-text-field>
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

    <div style="
        background: #fff;
    ">

        <div style="margin-left: 25px; margin-right: 25px; margin-bottom: 10px;">
          <v-text-field v-model="search"
            append-icon="search"
            label="Buscar"
            single-line
            hide-details
          ></v-text-field>
        </div>

        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="regs"
          :pagination.sync="pagination"
          :rows-per-page-items="rowsPerPageItems"
          :total-items="pagination.totalItems"
          select-all
          class="elevation-1"
        >

            <template  v-slot:items="props">
              <tr>
                <td>
                  <v-checkbox
                    v-model="props.selected"
                    primary
                    hide-details
                  ></v-checkbox>
                </td>
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.subject | firstWords(6) }}</td>
                <td>{{ props.item.content | firstWords(10) }}</td>
                
                <td>      
                    <v-icon
                      small
                      style="margin-right:0.9em;"
                      @click="seeItem(props.item)"
                    >
                      fa-eye
                    </v-icon>

                    <!--v-icon
                      small
                      class="mr-2"
                      @click="editItem(props.item)"
                    >
                      edit
                    </v-icon-->

                    <v-icon
                      small
                      @click="showDeleteDialog(props.item)"
                    >
                      delete
                    </v-icon> 
                </td>
              </tr>     
            </template>            

        </v-data-table>
    </div> 
  </div>  
</template>

<script>
  //import getMsg from '@/api/messages.js';

  export default {
    layout: 'dashboard',
    data: () => ({
      dialog: false,
      delete_confirmation_dialog: false,
      formMode: 'Nuevo Mensaje',
      index: null,
      headers: [
        { text: 'Nombre', value: 'name', sortable: false  },
        { text: 'Tema', value: 'subject', sortable: false },
        { text: 'Consulta', value: 'content', sortable: false },
      ],
      selected: [],
      regs: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        content: ''
      },
      defaultItem: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        content: ''
      },
      loading: true,
      rowsPerPageItems: [10,20,100],
      pagination: {
        rowsPerPage: 10,
        descending: false,
        sortBy: "created_at",
        page: 1,
        totalItems: null,
      },
      search: ''
    }),

    computed: {
      formTitle: function() {
        switch(this.formMode){
          case 'see': 
            return'Mensaje';
            break;
          case 'edit': 
            return 'Editar Mensaje';
            break;  
          case 'create': 
            return 'Nuevo Mensaje';
            break;
        }
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      },

      pagination: {
          handler() {
              this.fetchData();
          },
          deep: true
      },

      search: {
          handler() {
              this.fetchData();
          },
          deep: true
      },

      /*
      selected: function(arr) {
        console.log(arr);
      }
      */
    },

    mounted () {
      this.fetchData();
    },

    filters: {
      firstWords: function (str, n) {
        const out = str.split(' ').slice(0,n).join(' ');
        return out.length < str.length ? out + ' ...' : out;
      }  
    },

    methods: {      
      fetchData () {
         return new Promise((resolve, reject) => {
                const { sortBy, descending, page, rowsPerPage } = this.pagination;
                let search = this.search.trim().toLowerCase();

                this.$axios.get('/messages?orderBy[created_at]=DESC' + 
                  `&pageSize=${rowsPerPage}` +
                  `&page=${page}` +
                  `&orderBy[${sortBy}]=` + (descending ? 'ASC' : 'DESC') +
                  `&content[contains]=${search}` , 
                { 
                  headers: {
                    'Authorization': `Bearer ${this.$store.state.auth.authUser.accessToken}`
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
        
        const id = this.regs[this.index].id;
        //console.log('[ DELETE ] ID ==', id);
        
        this.$axios.request({
            url: `/messages/${id}`,  
            method: 'delete',
            headers: {
                'Authorization': `Bearer ${this.$store.state.auth.authUser.accessToken}`
            }
        }).then( res => {
          this.regs.splice(this.index, 1);
          this.pagination.totalItems--;
          console.log(res);

        }).catch((error) => {
            console.log('[ DELETE ] ERROR', error);
        });
      },

      deleteSelected () {
        const refs = [];
        this.selected.forEach(row => {
           refs.push(row.id); 
        });

        //console.log(refs);

        this.$axios.request({
            url: `/collections`,  
            method: 'post',
            headers: {
                'Authorization': `Bearer ${this.$store.state.auth.authUser.accessToken}`
            },
            data: { 
              entity: 'messages',
              refs: refs
            }  
          }).then( ({ data }) => {
            const id = data.data.id;

            this.$axios.request({
                url: `/collections/${id}`,  
                method: 'delete',
                headers: {
                    'Authorization': `Bearer ${this.$store.state.auth.authUser.accessToken}`
                }
            }).then( res => {              
              console.log(res);

              this.selected.forEach(item => {
                this.index = this.regs.indexOf(item);
                this.regs.splice(this.index, 1);
                this.pagination.totalItems--;
              })
         
            }).catch((error) => {
                console.log('[ DELETE ] ERROR', error);
            });

          }).catch((error) => {
              const response = error.response;
              console.log(response.data.error);
              console.log(response.data.error_detail);
          });
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
          //console.log(this.regs[this.editedIndex]); ////
          const id = this.regs[this.editedIndex].id;

          this.$axios.request({
            url: `/messages/${id}`,  
            method: 'patch',
            headers: {
                'Authorization': `Bearer ${this.$store.state.auth.authUser.accessToken}`
            },
            data: this.editedItem
          }).then( ({ data }) => {
            Object.assign(this.regs[this.editedIndex], this.editedItem);
            // console.log(data);

          }).catch((error) => {
              console.log(error);
          });

        } else {

          this.$axios.request({
            url: `/messages`,  
            method: 'post',
            headers: {
                'Authorization': `Bearer ${this.$store.state.auth.authUser.accessToken}`
            },
            data: this.editedItem
          }).then( ({ data }) => {

            const uid = data.data.id;
            
            this.editedItem.id = uid;
            this.regs.push(this.editedItem);  
            this.pagination.totalItems++;

          }).catch((error) => {
              const response = error.response;
              //console.log('Error', error);
              console.log(response.data.error);
              console.log(response.data.error_detail);
              //this.error = response.data.error;
          });

        }

        this.close();
        this.formMode = null;
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