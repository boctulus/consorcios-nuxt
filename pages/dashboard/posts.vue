<template>
  <div>            
    <h1 class="mb-5">Posts</h1>
  
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
      <v-dialog v-model="dialog" persistent   max-width="800px" :style="{ position: 'absolute', elevation: 100, zIndex:6000 }">

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
            <v-text-field v-model="editedItem.title" :class="{'disable-events': formMode=='see'}" label="Título"></v-text-field>

            <label aria-hidden="true" class="v-label v-label--active theme--light" style="left: 0px; right: auto; position: absolute; font-size: 12px !important; margin-left: 32px;">Habilitado?</label>
            <v-checkbox type="checkbox" v-model="editedItem.enabled" :label="editedItem.enabled | boolean" :class="{'disable-events': formMode=='see'}"/>
          
            <!-- editedItem.content --> 
            <vue-editor v-model="editedItem.content" :class="{'disable-events': formMode=='see'}" label="Texto" class="editor"></vue-editor>
          
            <div style="margin-top: 40px;">
              <div v-if="formMode != 'see'">
                <label aria-hidden="true" class="v-label v-label--active theme--light" style="font-size: 12px !important;">Slug editable?</label>
                <v-switch
                  :label="slug_editable| boolean"
                  v-model="slug_editable"
                ></v-switch>
              </div>

              <v-text-field v-model="editedItem.slug" :class="{'disable-events': formMode=='see' || !slug_editable}" label="Slug"></v-text-field>
            </div>

          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text style="color:#fff;" @click="close">Cerrar</v-btn>
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
                <td width="33%">{{ props.item.title }}</td>
                <td>{{ props.item.content  | stripHtml | firstWords(50) }}</td>
                <td>{{ props.item.enabled | boolean }}</td>
                <td align="right">      

                <v-menu bottom left offset-y>
                  <template v-slot:activator="{ on }">
                  <v-btn
                      dark
                      icon
                      v-on="on"
                  >
                      <v-icon style="color: #000;">more_vert</v-icon>
                  </v-btn>
                  </template>

                  <v-list style="margin-top: 10px;">
    
                    <v-list-tile
                      @click="seeItem(props.item)"
                    >
                      <v-icon
                        small
                        style="margin-right:0.9em;"
                        @click="seeItem(props.item)"
                      >
                        fa-eye
                      </v-icon>
                    </v-list-tile>
                    
                    <v-list-tile
                      @click="editItem(props.item)"
                    >
                      <v-icon
                        small
                        style="margin-right:0.9em;"
                        @click="seeItem(props.item)"
                      >
                        edit
                      </v-icon>
                    </v-list-tile>

                    <v-list-tile
                      @click="showDeleteDialog(props.item)"
                    >
                      <v-icon
                        small
                        style="margin-right:0.9em;"
                        @click="seeItem(props.item)"
                      >
                        delete
                      </v-icon>
                    </v-list-tile>
								
                  </v-list>
                </v-menu>

                </td>   
            </template>            

        </v-data-table>
    </div> 
  </div>  
</template>

<script>
  //import getData from '@/api/posts.js';
  import { VueEditor } from "vue2-editor";

  export default {
    layout: 'dashboard',
    data: () => ({
      entity: 'post',
      slug_editable: true,
      dialog: false,
      delete_confirmation_dialog: false,
      formMode: null,
      index: null,
      headers: [
        { text: 'Título', value: 'title' },
        { text: 'Texto', value: 'content' },
        { text: 'Habilitado', value: 'enabled' },
      ],
      regs: [],
      editedIndex: -1,
      editedItem: {
        title: '',
        content: '',
        slug: '',
        enabled: false
      },
      defaultItem: {
        id: null,
        title: '',
        content: '',
        slug: '',
        enabled: false
      },
      loading: true,
      rowsPerPageItems: [10,25,100],
      pagination: {
        rowsPerPage: 10,
        descending: false,
        sortBy: "title",
        page: 1,
        totalItems: null,
      },
      search: '',
    }),

    computed: {
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

      'editedItem.title': function(val, old_val) {
          if (!this.slug_editable)
            return;

          if ((old_val !== null || old_val === '') && (this.editedItem.slug !== null ||this.editedItem.slug === '')) {
            const d = new Date();
            this.editedItem.slug = val.toLowerCase().replace(/[.,!*¿?]/g,'').trim().split(' ').join('-') + 
            '-' + d.getFullYear() + ("0" + (d.getMonth() + 1)).slice(-2) + ("0" + d.getDate()).slice(-2);
          }
      },
      
      /*
      'editedItem.enabled': function(val, old_val) {
        console.log('VAL', val);
      }
      */
    },

    mounted () {
      this.fetchData();
    },

    filters: {
      toBoolean: function (value) {
        value = value.toString()
        return value === 0 ? 'true' : 'false';
      },

      boolean: function (value) {
        value = value.toString()
        return (value === 'true' || value === '1') ? 'si' : 'no';
      },

      stripHtml: function (html)
      {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
      },

      firstWords: function (str, n) {
        const out = str.split(' ').slice(0,n).join(' ');

        return out.length < str.length ? out + ' ...' : out;
      }
    },

    methods: {
      capitalize (s) {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
      },

      fetchData () {
         return new Promise((resolve, reject) => {
                const { sortBy, descending, page, rowsPerPage } = this.pagination;
                let search = this.search.trim().toLowerCase();

                this.$axios.get('/posts' + 
                  `?pageSize=${rowsPerPage}` +
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
                    console.log(error.response);
                    //reject('Error');
                });
         });   
      },       

      seeItem (item) {
        this.editedIndex = this.regs.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.editedItem.enabled = (this.editedItem.enabled == 1) ? true : false;
        this.formMode = 'see';
        this.dialog = true;
        this.slug_editable = false; 
      },

      editItem (item) {
        this.editedIndex = this.regs.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.editedItem.enabled = (this.editedItem.enabled == 1) ? true : false;
        this.formMode = 'edit';
        this.dialog = true;
        this.slug_editable = false; 
      },

      showDialog(){
        this.formMode = 'create';
        this.dialog = true;
        this.slug_editable = true; 
      },

      showDeleteDialog (item) {
        this.index = this.regs.indexOf(item);
        this.dialog = false;

        setTimeout(() => { this.delete_confirmation_dialog = true; }, 0);
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
            url: `/posts/${id}`,  
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
        this.slug_editable = true;

        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1;
        }, 300)
      },

      save () {
        this.editedItem.enabled = this.editedItem.enabled ? 1 : 0;

        if (this.editedIndex > -1) {
          //console.log(this.regs[this.editedIndex]); ////
          const id = this.regs[this.editedIndex].id;

          this.$axios.request({
            url: `/posts/${id}`,  
            method: 'patch',
            headers: {
                'Authorization': `Bearer ${this.$store.state.auth.authUser.accessToken}`
            },
            data: this.editedItem
          }).then( ({ data }) => {
          
            Object.assign(this.regs[this.editedIndex], this.editedItem);
            // console.log(data);

            this.close();
            this.formMode = null;
          }).catch((error) => {
              console.log('ERROR', error);
          });

        } else {
         
          this.$axios.request({
            url: `/posts`,  
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

            this.close();
            this.formMode = null;
          }).catch((error) => {
              const response = error.response;
              //console.log('Error', error);
              console.log(response.data.error);
              console.log(response.data.error_detail);
              //this.error = response.data.error;
          });

        }
       
      },

      
    },

    components: {
      VueEditor
    }
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