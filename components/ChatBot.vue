<!-- https://github.com/mattmezza/vue-beautiful-chat -->
<template>
  <div>
    <beautiful-chat
      :participants="participants"
      :titleImageUrl="titleImageUrl"
      :onMessageWasSent="onMessageWasSent"
      :messageList="messageList"
      :newMessagesCount="newMessagesCount"
      :isOpen="isChatOpen"
      :close="closeChat"
      :icons="icons"
      :open="openChat"
      :showEmoji="false"
      :showFile="false"
      :showTypingIndicator="showTypingIndicator"
	  :showLauncher="true"
	  :showCloseButton="true"
      :colors="colors"
      :alwaysScrollToBottom="alwaysScrollToBottom"
      :messageStyling="messageStyling"
      @onType="handleOnType"
      @edit="editMessage" />
  </div>
</template>

<script>
import Vue from 'vue';
import Chat from 'vue-beautiful-chat'
Vue.use(Chat)

import CloseIcon from 'vue-beautiful-chat/src/assets/close-icon.png'
import OpenIcon from 'vue-beautiful-chat/src/assets/logo-no-bg.svg'
import FileIcon from 'vue-beautiful-chat/src/assets/file.svg'
import CloseIconSvg from 'vue-beautiful-chat/src/assets/close.svg'

//const inteligencia = require('@/util/inteligencia')
import classify from '@/util/inteligencia';

export default {
  name: 'ChatBot',
  data() {
    return {
      icons:{
        open:{
          img: OpenIcon,
          name: 'default',
        },
        close:{
          img: CloseIcon,
          name: 'default',
        },
        file:{
          img: FileIcon,
          name: 'default',
        },
        closeSvg:{
          img: CloseIconSvg,
          name: 'default',
        },
      },
      participants: [
        {
          id: 'bot',
          name: 'Soporte',
          imageUrl: 'https://i.imgur.com/Sk3mDW7.png'
        },
        /*
        {
          id: 'user2',
          name: 'Usuario',
          imageUrl: 'https://avatars3.githubusercontent.com/u/37018832?s=200&v=4'
        }
        */
      ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      titleImageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
      messageList: [
          { type: 'text', author: `bot`, data: { text: `Hola! soy AlexBot, en qué te puedo ayudar?` } },
         /* 
          { type: 'text', author: `me`, data: { text: `Qué teléfono tienen?` } } 
         */
      ], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 0,
      isChatOpen: false, // to determine whether the chat window should be open or closed
      showTypingIndicator: '', // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        launcher: {
          bg: '#4e8cff'
        },
        messageList: {
          bg: '#ffffff'
        },
        sentMessage: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        receivedMessage: {
          bg: '#eaeaea',
          text: '#222222'
        },
        userInput: {
          bg: '#f4f7f9',
          text: '#565867'
        }
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: false, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
      messageStyling: true // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
    }
  },
  methods: {
    sendMessage (text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1
        this.onMessageWasSent({ author: 'bot', type: 'text', data: { text } })
      }
    },
    onMessageWasSent (message) {
      // called when the user sends a message
      this.messageList = [ ...this.messageList, message ];

      if (message.author == 'me' && message.type == 'text'){
        this.answer(message.data.text);
      }
    },
    answer (text) {
      if (text.toLowerCase() == 'hola'){
        this.sendMessage('¡Hola!, ¿Tienes alguna duda?');
      }
      
      let respuestas = {
        'email': 'El correo es ' + 'adm.elgrove@outlook.com',
        'direccion': 'Nos encontramos en  ' + 'calle 28 # 167, La Plata, Bs As', 
        'telefono': 'Para comunicarse con Administración El Grove puede hacerlo al ' + '(221) 15 545-2109',
        'horarios': 'El horario de atención es de ' + 'lunes a viernes de 9 a 17' + ' Hs', 
        'urgencia': 'Atendemos casos de urgencia las 24 Hs ***',
        'servicios': 'Te envio la sección de servicios para que vea cuales brindamos',
        'contacto': 'Te envio la sección de contacto para que vea cuales brindamos',
      }

      let result_arr = classify(text);

      if (result_arr.urgencia > 0 && result_arr.telefono == 0){
        result_arr.telefono = 1;
      }

      if (result_arr.servicios > 0){
        setTimeout(()=>{
          this.$router.push('/servicios')
        }, 1500)
      }

      if (result_arr.contacto > 0){
        setTimeout(()=>{
          this.$router.push('#contacto')
        }, 1500)
      }

      for (let e in result_arr){
        if (result_arr[e] > 0 ){
         this.sendMessage(respuestas[e]);
        }
      }
    },
    openChat () {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = true
      this.newMessagesCount = 0
    },
    closeChat () {
      // called when the user clicks on the botton to close the chat
      this.isChatOpen = false
    },
    handleScrollToTop () {
      // called when the user scrolls message list to top
      // leverage pagination for loading another page of messages
  	},
    handleOnType () {
      console.log('Emit typing event')
    },
    editMessage(message){
      const m = this.messageList.find(m=>m.id === message.id);
      m.isEdited = true;
      m.data.text = message.data.text;
    }
  },
  created() {
    
  }
}
</script>


<style scoped>

</style>