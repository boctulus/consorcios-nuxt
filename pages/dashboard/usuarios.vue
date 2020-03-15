<template>
  <div>            
    <h1 class="mb-5">Usuarios</h1>
  
    <v-layout row justify-center>
      <v-dialog v-model="delete_confirmation_dialog" persistent max-width="320">
        <v-card :style="{ position: 'absolute', elevation: 101, zIndex:10000 }">
          <v-card-title class="headline">Confirmación de borrado</v-card-title>
          <v-card-text>Deseas borrar?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" @click="close_delete_confirmation_dialog()">Cancelar</v-btn>
            <v-btn color="red darken-1" @click="erase">OK</v-btn>
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
                  <v-text-field v-model="editedItem.nombre" :class="{'disable-events': formMode=='see'}" label="Nombre"></v-text-field>
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

        <v-data-table
          :headers="headers"
          :items="regs"
          class="elevation-1"
        >
            <template  v-slot:items="props">
                <td >{{ props.item.nombre }}</td>
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
  import getData from '@/api/usuarios.js';

  export default {
    layout: 'dashboard',
    data: () => ({
      dialog: false,
      delete_confirmation_dialog: false,
      formMode: null,
      index: null,
      headers: [
        { text: 'Nombre', value: 'nombre' },
        { text: 'Usuario', value: 'username' },
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
    },

    created () {
      this.initialize()
    },

    methods: {
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
  
</style>