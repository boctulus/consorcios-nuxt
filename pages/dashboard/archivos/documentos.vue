<template>
  <div>            
    <h1 class="mb-5">Documentos</h1> <!-- ADMIN -->
  
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
            <a href="#" class="cross_close" @click="close">✕</a>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-layout row style="flex-direction: column !important;">
               
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

                <v-flex cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.name" :class="{'disable-events': formMode=='see'}" label="Nombre"></v-text-field>
                </v-flex>

                <v-flex cols="12" sm="6" md="4" style="width:100%">
                  <input type="file" id="file" ref="file" v-on:change="onChangeFileUpload()" v-if="formMode != 'see'" />
                  <span v-else><v-icon>fa-download</v-icon><a href="#" @click="fileDownload()" style="margin-left:1em;">{{ filename }}</a></span>
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
                <td>{{ props.item.name }}</td>
                <td>{{ getNameByUserId(props.item.belongs_to) }}</td>
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

  export default {
    layout: 'dashboard',
    data: () => ({
      entity: 'documento',
      users: [],
      users_all: [],
      u_selected: null,
      prev: {},
      dialog: false,
      delete_confirmation_dialog: false,
      formMode: 'create',
      index: null,
      headers: [
        { text: 'Nombre', value: 'name' },
        { text: 'Edificio', value: 'belongs_to' },
      ],
      regs: [],
      file:  null,
      file_obj: null,
      editedIndex: -1,
      editedItem: {
		    belongs_to: null,
        name: '',
        file_id: null,
        enabled: false
      },
      defaultItem: {
	  	  belongs_to: null,
        name: '',
        file_id: null,
        enabled: true
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
      filtering: true
    }),

    computed: {
      computedRegs: function() {
        return this.u_selected === null ? this.regs : this.regs.filter((e) => e.belongs_to === this.u_selected);
      },

      formTitle: function() {
        switch(this.formMode){
          case 'see': 
            return this.capitalize(this.entity);
            break;
          case 'edit': 
            return 'Editar ' + this.capitalize(this.entity);
            break;  
          case 'create': 
            return 'Crear ' + this.capitalize(this.entity);
            break;   
          default: 
             return 'Crear ' + this.capitalize(this.entity);   
        }
      },  

      filename: function() {
        return this.file_obj == null ? { "filename": '', "id": this.editedItem.id } : this.file_obj.filename;
      }
      
    },

    watch: {
      dialog (val) {
        val || this.close()
      },

      pagination: {
          handler() {
              // evito que se dispare (de vuelta) cuando aplico un filtro
              if (!this.filtering){
                this.fetchData();
              }
          },
          deep: true
      },

      search: {
          handler() {
              this.fetchData();
          },
          deep: true
      },

      u_selected (val) {
        this.fetchData();
      }
    },

    mounted () {
      this.fetchData();
      this.fetchUsers();
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
      capitalize (s) {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
      },

      fetchUsers() {
        // this.users = [ {id: null, name: 'Todos' }, ...getUsers() ];

        this.$axios.request({
                url: `/users?fields=id,name&pageSize=100`,  
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

      getNameByUserId(user_id){
        const u = this.users.find((e) => e.id === user_id);

        if (typeof u == 'undefined')
          return 'Inexistente *';

        return u.name;  
      },

      fetchData () {
         return new Promise((resolve, reject) => {
                const { sortBy, descending, page, rowsPerPage } = this.pagination;
                let search = this.search.trim().toLowerCase();

                let url = '/documents' + 
                  `?pageSize=${rowsPerPage}` +
                  `&page=${page}` +
                  `&orderBy[${sortBy}]=` + (descending ? 'ASC' : 'DESC');

                if (this.u_selected != null) {
                  url += '&belongs_to=' + this.u_selected;
                }   

                this.$axios.get(url, 
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

                    /////////////////////////
                    this.filtering = true; 

                    this.$nextTick(()=>{ 
                      this.filtering = false;
                    });
                    /////////////////////////

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

        const file_id = this.editedItem.file_id;

        this.$axios.request({
            url: `/files/${file_id}?fields=filename`,  
            method: 'get',
            headers: {
                'Authorization': `Bearer ${this.$store.state.auth.authUser.accessToken}`
            }
        }).then(({data}) => {
          //console.log(data.data.filename);

          this.file_obj = {
            "filename": data.data.filename,
            "id": file_id
          }          

          this.dialog = true;
        
        }).catch((error) => {
            console.log(error);
        });   
      },

      editItem (item) {
        this.editedIndex = this.regs.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.formMode = 'edit';
        this.dialog = true;

        this.prev.belongs_to = this.regs[this.editedIndex].belongs_to;
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
            url: `/documents/${id}`,  
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

      onChangeFileUpload(){
        this.file = this.$refs.file.files[0];
        //console.log(this.file);
      },

      resetFile() {
        const input = this.$refs.file;
        input.type = 'text';
        input.type = 'file';
        this.file = null;
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
        this.$axios.get('https://api.administracionelgrove.com/download/get/'+ this.file_obj.id, 
        { 
          responseType: 'arraybuffer',
          headers: {
            'Authorization': `Bearer ${this.$store.state.auth.authUser.accessToken}`
          }
        })
        .then(response => {
            this.forceFileDownload(response, this.file_obj.filename);
        }).catch((error) => {
            //const response = error.response;
            console.log(error);
        });
      },

      async insert () {
        try {
          let formData = new FormData();
          formData.append('file', this.file);
          formData.append('belongs_to', this.editedItem.belongs_to); 
          
          const response = await this.$axios.post('/files',
              formData,
              {
                  headers: {
                      'Content-Type': 'multipart/form-data',
                      'Authorization': `Bearer ${this.$store.state.auth.authUser.accessToken}`
                  }
              }
          );

          //console.log(response);
          const file_id = response.data.data.uploaded[0].id;
          this.editedItem.file_id = file_id; // requiero del file_id 
        } catch (error) {
          console.error(error);
        }

        try {
          const response2 = await this.$axios.request({
            url: `/documents`,  
            method: 'post',
            headers: {
                'Authorization': `Bearer ${this.$store.state.auth.authUser.accessToken}`
            },
            data: this.editedItem
          });

          const id = response2.data.data.id; 
        
          this.editedItem.id = id;  
          this.regs.push(this.editedItem);  
          this.pagination.totalItems++;

          this.close();
          this.formMode = null;

        } catch (error) {
          console.error(error);
        }   
        
        this.resetFile();
      },

      async update() {
        const id = this.regs[this.editedIndex].id;
        
        let file_id = this.regs[this.editedIndex].file_id;

        if (this.file !== null){

          try {
            const response0 = await this.$axios.request({
              url: `/files/${file_id}`,  
              method: 'delete',
              headers: {
                  'Authorization': `Bearer ${this.$store.state.auth.authUser.accessToken}`
              }
            });            
          } catch (error) {
            console.error(error);
          }

          try {
            let formData = new FormData();  
            formData.append('file', this.file);
            formData.append('belongs_to',this.regs[this.editedIndex].belongs_to); //////
            
            const response0 = await this.$axios.post('/files',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${this.$store.state.auth.authUser.accessToken}`
                    }
                }
            );

            //console.log('POST FILE', response0);

            file_id = response0.data.data.uploaded[0].id;
            this.editedItem.file_id = file_id; // requiero del file_id 
          } catch (error) {
            console.error(error);
          }
        } else {

          if (this.editedItem.belongs_to !== this.prev.belongs_to){
            //console.log('OJO! cambio el propietario');

            this.$axios.request({
              url: `/files/${file_id}`,  
              method: 'patch',
              headers: {
                  'Authorization': `Bearer ${this.$store.state.auth.authUser.accessToken}`
              },
              data: { belongs_to: this.editedItem.belongs_to }
            }).then(({data}) => {
              // console.log(data.data);        
            }).catch((error) => {
                console.log(error);
            });  
          }

        }                  

        try {
          const response =  await this.$axios.request({
            url: `/documents/${id}`,  
            method: 'patch',
            headers: {
                'Authorization': `Bearer ${this.$store.state.auth.authUser.accessToken}`
            },
            data: this.editedItem
          });

          Object.assign(this.regs[this.editedIndex], this.editedItem);
          // console.log(data);

          this.close();
          this.formMode = null;

        } catch (error) {
            console.log(error); 
        }  

        this.resetFile();
      },

      async save () {
        if (this.editedIndex > -1) {
          this.update();
        } else {
          this.insert();   
        }       
      },


    },
  }
</script>


<style scoped>
a {
	 text-decoration: none;
}

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