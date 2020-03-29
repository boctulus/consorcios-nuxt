<template>
  <div>            
    <h1 class="mb-5">Usuarios</h1>
  
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
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-layout row>
                <v-flex cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.name" :class="{'disable-events': formMode=='see'}" label="Nombre"></v-text-field>
                </v-flex>
                <v-flex cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.username" :class="{'disable-events': formMode=='see'}" label="Nombre de usuario"></v-text-field>
                </v-flex>
                <v-flex cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.password" :class="{'disable-events': formMode=='see'}" label="Contraseña"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text style="color:#fff;" @click="close">Cerrar</v-btn>
            <v-btn color="blue darken-1" text style="color:#fff;" @click="save" v-if="formMode == 'edit' || formMode == null">Guardar</v-btn>
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
          :headers="headers"
          :items="regs"
          :pagination.sync="pagination"
          :rows-per-page-items="rowsPerPageItems"
          :total-items="pagination.totalItems"
          class="elevation-1"
        >
            <template  v-slot:items="props">
                <td >{{ props.item.name }}</td>
                <td>{{ props.item.username }}</td>
                <td align="right">      
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
  //import getData from '@/api/users.js';

  export default {
    layout: 'dashboard',
    data: () => ({
      dialog: false,
      delete_confirmation_dialog: false,
      formMode: null,
      index: null,
      headers: [
        { text: 'Nombre', value: 'name' },
        { text: 'Usuario', value: 'username' }
      ],
      regs: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        username: '',
        password: ''
      },
      defaultItem: {
        id: null,
        name: '',
        username: '',
        password: ''
      },
      loading: true,
      rowsPerPageItems: [10,20,100],
      pagination: {
        rowsPerPage: 10,
        descending: false,
        sortBy: "name",
        page: 1,
        totalItems: null,
      },
      search: '',
    }),

    computed: {
      formTitle: function() {
        switch(this.formMode){
          case 'see': 
            return 'Usuario';
            break;
          case 'edit': 
            return 'Editar Usuario';
            break;  
          case 'create': 
            return 'Nuevo Usuario';
            break;   
          default: 
             return 'Nuevo Usuario';   
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

                this.$axios.get('http://elgrove.co/api/v1/users' + 
                  `?pageSize=${rowsPerPage}` +
                  `&page=${page}` +
                  `&orderBy[${sortBy}]=` + (descending ? 'ASC' : 'DESC') +
                  `&name[contains]=${search}` , 
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
        //console.log(item);

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

        //console.log('Vas a borrar reg con id = '+ this.regs[this.index].id);
      },

      erase () {
        this.delete_confirmation_dialog = false; 
        this.formMode = null;
        
        const id = this.regs[this.index].id;
        //console.log('[ DELETE ] ID ==', id);
        
        this.$axios.request({
            url: `http://elgrove.co/api/v1/users/${id}`,  
            method: 'delete',
            headers: {
                'Authorization': `Bearer ${this.$store.state.auth.authUser.accessToken}`
            }
        }).then( res => {
          this.regs.splice(this.index, 1);
          this.pagination.totalItems--;
          //console.log(res);

        }).catch((error) => {
            console.log('[ DELETE ] ERROR', error);
        });
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
        //console.log('------[ SAVE ]-----');

        if (this.editedIndex > -1) {
          //console.log(this.regs[this.editedIndex]); ////
          const id = this.regs[this.editedIndex].id;

          this.$axios.request({
            url: `http://elgrove.co/api/v1/users/${id}`,  
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
            url: `http://elgrove.co/api/v1/users`,  
            method: 'post',
            headers: {
                'Authorization': `Bearer ${this.$store.state.auth.authUser.accessToken}`
            },
            data: this.editedItem
          }).then( ({ data }) => {

            const uid = data.data.id;
            
            this.editedItem.id = uid;
            this.regs.push(this.editedItem);  

            // debo insertar en user_roles con rol de copropietario (2)
            this.$axios.request({
                url: `http://elgrove.co/api/v1/user_roles`,  
                method: 'post',
                headers: {
                    'Authorization': `Bearer ${this.$store.state.auth.authUser.accessToken}`
                },
                data: {
                  "belongs_to" : uid,
                  "role_id": "2"
                }
            }).then( ({ data }) => {
                  
              //console.log('Registro de usuario completo');          
              //console.log(data);
              this.pagination.totalItems++;

            }).catch((error) => {
                console.log(error);
            });

          }).catch((error) => {
              console.log(error);
          });

        }

        this.close();
        this.formMode = null;
      },
    },
  }
</script>


<style scoped>

</style>