<template>
  <div>            
    <h1 class="mb-5">Boletas</h1> <!-- ADMIN -->
  
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

        
        <template v-slot:activator="{ on }">
          <v-layout row>
            <v-flex>
              <v-select
                :items="users_all"
                item-text="name"
                item-value="id"
                v-model="u_selected"
                label="Edificio"
                style="margin-left:30px; margin-right:30px;"
                dark
              ></v-select>
            </v-flex>
            
            <!-- New button -->
            <v-flex style="text-align:right;">
              <v-btn color="primary" dark v-on="on" @click="formMode=null" style="margin-right:30px;">Nuevo</v-btn>
            </v-flex>  
          </v-layout>
 
        </template>

        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-layout row>

                <!-- 
                  el valor a hacer bind debe ser un array de objetos y le pasas los attributos en el item-value e item-text

                  Ejemplo: 
                  
                  items: [{id:1, nombre:"nombre 1"}]
                  <v-select :items="items" item-text="nombre" item-value="id" >
                -->  

                <v-flex style="width:100%;">                 
                  <v-select
                    :items="users"
                    item-text="name"
                    item-value="id"
                    v-model="editedItem.belongs_to"
                    label="Edificio"
                    :class="{'disable-events': formMode=='see'}"
                  ></v-select>
                </v-flex>

                  <v-flex style="width:100%;">                 
                    <v-select 
                    v-model="editedItem.billable_id" 
                    :items="tipos_servicio" 
                    item-text="name"
                    item-value="id"
                    :class="{'disable-events': formMode=='see'}" 
                    label="Concepto"
                  ></v-select>
                </v-flex>

                <v-flex cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.detail" :class="{'disable-events': formMode=='see'}" label="Detalle"></v-text-field>
                </v-flex>

                <v-flex cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.period" :class="{'disable-events': formMode=='see'}" label="Período"></v-text-field>
                </v-flex>

                <v-flex cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.amount" :class="{'disable-events': formMode=='see'}" label="Importe"></v-text-field>
                </v-flex>

                <v-flex cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.file" :class="{'disable-events': formMode=='see'}" label="Archivo"></v-text-field>
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

          <!--div style="margin-left: 25px; margin-right: 25px; margin-bottom: 10px;">
            <v-text-field v-model="search"
              append-icon="search"
              label="Buscar"
              single-line
              hide-details
            ></v-text-field>
          </div-->

          <v-data-table
            :headers="headers"
            :items="computedRegs"
            :pagination.sync="pagination"
            :rows-per-page-items="rowsPerPageItems"
            :total-items="pagination.totalItems"
            class="elevation-1"
          >
            <template  v-slot:items="props">
                <td>{{ getServicioById(props.item.billable_id).name }}</td>
                <td>{{ props.item.detail }}</td>
                <td>{{ props.item.period }}</td>
                <td>{{ props.item.amount | currency }}</td>
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
  //import getData from '@/api/bills.js';
  import getUsers from '@/api/users.js';
  //import getTipoServicio from '@/api/billable_services.js';

  export default {
    layout: 'dashboard',
    data: () => ({
      users: [],
      u_selected: null,
      dialog: false,
      delete_confirmation_dialog: false,
      formMode: 'create',
      index: null,
      headers: [
        { text: 'Concepto', value: 'billable_id' },
        { text: 'Detalle', value: 'detail' },
        { text: 'Período', value: 'period' },
        { text: 'Importe', value: 'amount' }
      ],
      regs: [],
      tipos_servicio: [],
      editedIndex: -1,
      editedItem: {
        belongs_to: null,
        billable_id: '',
        detail: '',
        period: '',
        amount: 0
      },
      defaultItem: {
        belongs_to: null,
        billable_id: '',
        detail: '',
        period: '',
        amount: 0
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
      search: '',
    }),

    computed: {
      computedRegs: function() {
        return this.u_selected === null ? this.regs : this.regs.filter((e) => e.belongs_to === this.u_selected);
      },

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
      this.fetchUsers();
      this.fetchTiposServicio();
    },

    filters: {
      boolean: function (value) {
        value = value.toString()
        return (value === 'true' || value === '1') ? 'si' : 'no';
      },

      currency: function (value) { 
        if (typeof value == 'undefined')
          return;

        let val = (value/1).toFixed(2).replace('.', ',')
        return '$ ' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      }
    },

    methods: {
      fetchUsers() {
        // this.users = [ {id: null, name: 'Todos' }, ...getUsers() ];

        this.$axios.request({
                url: `http://elgrove.co/api/v1/users?fields=id,name&pageSize=100`,  
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${this.$store.state.auth.authUser.accessToken}`
                }
            }).then( ({ data }) => {
              this.users = data.data;
              this.users_all = [ {id: null, name: 'Todos' }, ...this.users ];
            }).catch((error) => {
                console.log(error);
            });
      },

      fetchTiposServicio() {
        this.$axios.request({
                url: `http://elgrove.co/api/v1/billable_services?pageSize=100`,  
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${this.$store.state.auth.authUser.accessToken}`
                }
            }).then( ({ data }) => {
              this.tipos_servicio = data.data;
            }).catch((error) => {
                console.log(error);
            });
      },


      fetchData () {
         return new Promise((resolve, reject) => {
                const { sortBy, descending, page, rowsPerPage } = this.pagination;
                let search = this.search.trim().toLowerCase();

                this.$axios.get('http://elgrove.co/api/v1/bills' + 
                  `?pageSize=${rowsPerPage}` +
                  `&page=${page}` +
                  `&orderBy[${sortBy}]=` + (descending ? 'ASC' : 'DESC'), 
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

      getServicioById (id) {
        return this.tipos_servicio.find((e) => e.id == id);
      },

      /////////////////////////////////////////// ///////////////
      file_uploaded (obj) {
        console.log('File uploaded', obj);
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
            url: `http://elgrove.co/api/v1/bills/${id}`,  
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

      close () {
        this.dialog = false;
        this.formMode = null;
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
            url: `http://elgrove.co/api/v1/bills/${id}`,  
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
            url: `http://elgrove.co/api/v1/bills`,  
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
a {
	 text-decoration: none;
}

</style>