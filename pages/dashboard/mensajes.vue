<template>
  <div>            
    <h1 class="mb-3">Mensajes</h1>
  
    <v-layout row justify-center>
      <v-dialog v-model="delete_confirmation_dialog" persistent max-width="320">
        <v-card>
          <v-card-title class="headline">Confirmación de borrado</v-card-title>
          <v-card-text>Deseas borrar el mensaje?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" flat @click="delete_confirmation_dialog = false">Cancelar</v-btn>
            <v-btn color="green darken-1" flat @click="erase">OK</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>

    <v-layout row justify="center">
      <v-dialog v-model="dialog" persistent max-width="500px" :style="{ position: 'absolute', elevation: 100, zIndex:6000 }">
        
        <!--template v-slot:activator="{ on }">
          <div style="text-align:right; width: 100%; margin-right: 6px; margin-bottom: 6px;">
            <v-btn color="primary" dark v-on="on">Nuevo</v-btn>
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
                  <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                </v-flex>
                <v-flex cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                </v-flex>
                <v-flex cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                </v-flex>
                <v-flex cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                </v-flex>
                <v-flex cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" text @click="save">Save</v-btn>
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
                <td>{{ props.item.nombre}}</td>
                <td >{{ props.item.tema }}</td>
                <td>{{ props.item.email }}</td>
                <td>{{ props.item.telefono }}</td>
                <td>{{ props.item.consulta }}</td>
                <td>      
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
    </v-app> 
  </div>  
</template>

<script>
  import getMsg from '@/api/mensajes.js';

  export default {
    layout: 'dashboard',
    data: () => ({
      dialog: false,
      delete_confirmation_dialog: false,
      index: null,
      headers: [
        { text: 'Nombre', value: 'nombre' },
        { text: 'E-mail', value: 'email' },
        { text: 'Teléfono', value: 'telefono' },
        { text: 'Tema', value: 'tema', align: 'start' },
        { text: 'Consulta', value: 'consulta' },
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
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Editar item'
      },
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

      editItem (item) {
        this.editedIndex = this.regs.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      showDeleteDialog (item) {
        this.index = this.regs.indexOf(item)
        this.delete_confirmation_dialog = true;
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