<template>
  <div>            
    <h1 class="mb-5">Boletas</h1> <!-- copropietario -->

    <!--v-layout row justify-center>
      <v-dialog v-model="delete_confirmation_dialog" persistent max-width="320">
        <v-card>
          <v-card-title class="headline">Confirmación de borrado</v-card-title>
          <v-card-text>Deseas borrar?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" flat @click="delete_confirmation_dialog = false">Cancelar</v-btn>
            <v-btn color="green darken-1" flat @click="erase">OK</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout-->

 
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

                <!-- 
                  el valor a hacer bind debe ser un array de objetos y le pasas los attributos en el item-value e item-text

                  Ejemplo: 
                  
                  items: [{id:1, nombre:"nombre 1"}]
                  <v-select :items="items" item-text="nombre" item-value="id" >
                -->  

                <!--v-flex style="width:100%;">                 
                  <v-select
                    :items="users"
                    item-text="name"
                    item-value="id"
                    v-model="editedItem.belongs_to"
                    label="Edificio"
                    :class="{'disable-events': formMode=='see'}"
                  ></v-select>
                </v-flex-->

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

        <v-data-table
          :headers="headers"
          :items="computedBills"
          class="elevation-1"
        >
            <template  v-slot:items="props">
                <td>{{ getServicioById(props.item.billable_id).name }}</td>
                <td>{{ props.item.detail }}</td>
                <td>{{ props.item.period }}</td>
                <td>{{ props.item.amount | currency }}</td>
                <td>      
                    <a :href="props.item.file" target="_blank" rel="noopener noreferrer">     
                    <v-icon
                      small
                      class="download"
                    >
                      fa-download
                    </v-icon>
                  </a>
                </td>   
            </template>            

        </v-data-table>
    </div> 
  </div>  
</template>

<script>
  import getData from '@/api/bills.js';
  import getTipoServicio from '@/api/billable_services.js';

  export default {
    layout: 'dashboard',
    data: () => ({
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
        user: '',
        billable_id: '',
        detail: '',
        period: '',
        amount: 0
      },
      defaultItem: {
        user: '',
        billable_id: '',
        detail: '',
        period: '',
        amount: 0
      },
    }),

    computed: {
      computedBills: function() {
        return this.regs.filter((el) => el.belongs_to === this.$store.getters['auth/get_user'].id);
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
    },

    created () {
      this.initialize()
      //console.log('++++++++++++++++++++++++ USER_ID', this.$store.getters.id);
    },

    filters: {
      currency: function (value) { 
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      }
    },

    methods: {
      initialize () {
        this.regs = getData();
        this.tipos_servicio = getTipoServicio();
      },

      getServicioById (id) {
        return this.tipos_servicio.find((e) => e.id == id);
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