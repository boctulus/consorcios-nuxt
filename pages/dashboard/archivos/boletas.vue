<template>
  <div>            
    <h1 class="mb-5">Boletas</h1> <!-- ADMIN -->
  
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

                <!-- 
                  el valor a hacer bind debe ser un array de objetos y le pasas los attributos en el item-value e item-text

                  Ejemplo: 
                  
                  items: [{id:1, nombre:"nombre 1"}]
                  <v-select :items="items" item-text="nombre" item-value="id" >
                -->  
                <v-flex cols="12" sm="6" md="4">                 
                  <v-select v-model="editedItem.type" :items="tipos_servicio" :class="{'disable-events': formMode=='see'}" label="Servicio"></v-select>
                </v-flex>

                <v-flex cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.ticket_number" :class="{'disable-events': formMode=='see'}" label="Numeración"></v-text-field>
                </v-flex>

                <v-flex cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.from" :class="{'disable-events': formMode=='see'}" label="Desde"></v-text-field>
                </v-flex>

                <v-flex cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.to" :class="{'disable-events': formMode=='see'}" label="Hasta"></v-text-field>
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

        <v-data-table
          :headers="headers"
          :items="regs"
          class="elevation-1"
        >
            <template  v-slot:items="props">
                <td>{{ props.item.type }}</td>
                <td>{{ props.item.ticket_number }}</td>
                <td>{{ props.item.from }}</td>
                <td>{{ props.item.to }}</td>
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
  import getData from '@/api/boletas.js';
  import getTipoServicio from '@/api/servicios_facturables.js';

  export default {
    layout: 'dashboard',
    data: () => ({
      dialog: false,
      delete_confirmation_dialog: false,
      formMode: 'create',
      index: null,
      headers: [
        { text: 'Servicio', value: 'type' },
        { text: 'Númeración', value: 'ticket_number' },
        { text: 'Desde', value: 'from' },
        { text: 'Hasta', value: 'to' },
        { text: 'Cantidad', value: 'amount' }
      ],
      regs: [],
      tipos_servicio: [],
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
      this.initialize()
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
      initialize () {
        this.regs = getData();

        getTipoServicio().forEach(el => {
          this.tipos_servicio.push(el.name);
        });

        console.log(this.tipos_servicio);
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
a {
	 text-decoration: none;
}
</style>