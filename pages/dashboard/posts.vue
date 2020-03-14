<template>
  <div>            
    <h1 class="mb-5">Posts</h1>
  
    <v-layout row justify-center>
      <v-dialog v-model="delete_confirmation_dialog" persistent max-width="320">
        <v-card :style="{ position: 'absolute', elevation: 101, zIndex:10000 }">
          <v-card-title class="headline">Confirmación de borrado</v-card-title>
          <v-card-text>Deseas borrar?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close_delete_confirmation_dialog()">Cancelar</v-btn>
            <v-btn color="red darken-1" flat @click="erase">OK</v-btn>
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
          
            <vue-editor v-model="editedItem.text" :class="{'disable-events': formMode=='see'}" label="Texto" class="editor"></vue-editor>
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

        <v-data-table
          :headers="headers"
          :items="regs"
          class="elevation-1"
        >
            <template  v-slot:items="props">
                <td width="33%">{{ props.item.title }}</td>
                <td>{{ props.item.text  | stripHtml | firstWords(50) }}</td>
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
  import getData from '@/api/posts.js';
  import { VueEditor } from "vue2-editor";
  //import  '/assets/style/dashboard.styl';

  export default {
    layout: 'dashboard',
    data: () => ({
      entity: 'post',
      dialog: false,
      delete_confirmation_dialog: false,
      formMode: null,
      index: null,
      headers: [
        { text: 'Título', value: 'title' },
        { text: 'Texto', value: 'text' },
      ],
      regs: [],
      editedIndex: -1,
      editedItem: {
        nombre: '',
        email: '',
        telefono: '',
        tema: '',
        consulta: ''
      },
      defaultItem: {
        nombre: '',
        email: '',
        telefono: '',
        tema: '',
        consulta: ''
      },
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
    },

    created () {
      this.initialize()
    },

    filters: {
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

      initialize () {
        this.regs = getData();
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
        this.dialog = true;

        setTimeout(() => { this.delete_confirmation_dialog = true; }, 500);
      },

      erase () {
        this.close_delete_confirmation_dialog();
        this.formMode = null;
        this.regs.splice(this.index, 1);
      },

      close_delete_confirmation_dialog() {
        this.delete_confirmation_dialog = false; 
        this.dialog = false;
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
      }

      
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