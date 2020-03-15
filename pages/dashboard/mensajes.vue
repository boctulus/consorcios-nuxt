<template>
  <div>            
    <h1 class="mb-5">Mensajes</h1>
  
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
                  <v-text-field v-model="editedItem.tema" :class="{'disable-events': formMode=='see'}" label="Tema"></v-text-field>
                </v-flex>
                <v-flex cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.consulta" :class="{'disable-events': formMode=='see'}" label="Consulta"></v-text-field>
                </v-flex>
                <v-flex cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.nombre" :class="{'disable-events': formMode=='see'}" label="Nombre"></v-text-field>
                </v-flex>
                <v-flex cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.telefono" :class="{'disable-events': formMode=='see'}" label="Tel."></v-text-field>
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

        <v-data-table
          :headers="headers"
          :items="regs"
          class="elevation-1"
        >
            <template  v-slot:items="props">
                <td >{{ props.item.tema }}</td>
                <td>{{ props.item.consulta }}</td>
                <td>{{ props.item.nombre}}</td>
                <td>{{ props.item.telefono }}</td>
                <td>{{ props.item.email }}</td>
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
            </template>            

        </v-data-table>
    </div> 
  </div>  
</template>

<script>
  import getMsg from '@/api/mensajes.js';

  export default {
    layout: 'dashboard',
    data: () => ({
      dialog: false,
      delete_confirmation_dialog: false,
      formMode: 'Nuevo Mensaje',
      index: null,
      headers: [
        { text: 'Tema', value: 'tema', align: 'start' },
        { text: 'Consulta', value: 'consulta' },
        { text: 'Nombre', value: 'nombre' },
        { text: 'Teléfono', value: 'telefono' },
        { text: 'E-mail', value: 'email' },
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

      close_delete_confirmation_dialog() {
        this.delete_confirmation_dialog = false; 
        this.dialog = false;
      },

      erase () {
        this.delete_confirmation_dialog = false; 
        this.regs.splice(this.index, 1);
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
  
</style>