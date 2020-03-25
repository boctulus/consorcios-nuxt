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
                  <v-text-field v-model="editedItem.subject" :class="{'disable-events': formMode=='see'}" label="Tema"></v-text-field>
                </v-flex>
                <v-flex cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.content" :class="{'disable-events': formMode=='see'}" label="Consulta"></v-text-field>
                </v-flex>
                <v-flex cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.name" :class="{'disable-events': formMode=='see'}" label="Nombre"></v-text-field>
                </v-flex>
                <v-flex cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.phone" :class="{'disable-events': formMode=='see'}" label="Tel."></v-text-field>
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
                <td >{{ props.item.subject }}</td>
                <td>{{ props.item.content }}</td>
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.phone }}</td>
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
  //import getMsg from '@/api/messages.js';

  export default {
    layout: 'dashboard',
    data: () => ({
      dialog: false,
      delete_confirmation_dialog: false,
      formMode: 'Nuevo Mensaje',
      index: null,
      headers: [
        { text: 'Tema', value: 'subject', align: 'start' },
        { text: 'Consulta', value: 'content' },
        { text: 'Nombre', value: 'name' },
        { text: 'Teléfono', value: 'phone' },
        { text: 'E-mail', value: 'email' },
      ],
      regs: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        content: ''
      },
      defaultItem: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        content: ''
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
        this.$axios.get('http://elgrove.co/api/v1/messages', 
        { 
          headers: {
            'Authorization': `Bearer ${this.$store.state.auth.authUser.accessToken}`
          }
        })
        .then(response => {
            this.regs = response.data.data;
        }).catch((error) => {
            const response = error.response;
            console.log(response.data.error);
        });
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
            url: `http://elgrove.co/api/v1/messages/${id}`,  
            method: 'delete',
            headers: {
                'Authorization': `Bearer ${this.$store.state.auth.authUser.accessToken}`
            }
        }).then( res => {
          this.regs.splice(this.index, 1);
          console.log(res);

        }).catch((error) => {
            console.log('[ DELETE ] ERROR', error);
        });
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
          //console.log(this.regs[this.editedIndex]); ////
          const id = this.regs[this.editedIndex].id;

          this.$axios.request({
            url: `http://elgrove.co/api/v1/messages/${id}`,  
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
            url: `http://elgrove.co/api/v1/messages`,  
            method: 'post',
            headers: {
                'Authorization': `Bearer ${this.$store.state.auth.authUser.accessToken}`
            },
            data: this.editedItem
          }).then( ({ data }) => {

            const uid = data.data.id;
            
            this.editedItem.id = uid;
            this.regs.push(this.editedItem);  

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