<!-- https://codepen.io/cmaranho/pen/jvNeLL  -->
<template>
	<div>

		<!-- pop-up -->
		<div class="popup-whatsapp" v-if="fab">
			<div class="content-whatsapp -top">
				<button type="button" class="closePopup" @click="toogle">
					<i class="material-icons icon-font-color">close</i>
				</button>
				<p>Hola 😊 te colaboro?</p>
			</div>
			<div class="content-whatsapp -bottom">
				<input class="whats-input" v-model="text" id="whats-in" type="text" Placeholder="Escriba el mensaje..." />
				<button class="send-msPopup" id="send-btn" type="button" @click="sendMsg">
					<i class="material-icons icon-font-color--black">send</i>
				</button>

			</div>
		</div>	

          <!-- botón principal que abre la cajita -->
		  <v-fab-transition>
            <v-btn
              v-model="fab"
              color='green darken-1'
              @click="toogle"
              dark
              fixed
              bottom
              right
              fab
			  class="nodeco"	
            >
              <v-icon size="50">{{icon}}</v-icon> <!-- comment -->
              <v-icon size="50">close</v-icon>
            </v-btn>
          </v-fab-transition>

	</div>
</template>


<script>
export default {
	name: 'WhatsApp',
	props: ['phone'],
	data: () => ({
		fab: false,
		menu: false,
		message: false,
		hints: true,
		text: "",
		apilink: "",
		onlyapi: false,
		icon: process.env.NODE_ENV == 'development' ? 'comment' : 'fa-whatsapp' // parche
	}),

	watch: {	  
		/* https://web.whatsapp.com/send?phone=5215533352894&text=Hola,%20estoy%20interesado%20en%20sus%20servicios! */ 
		text(val) {
			this.apilink = 'http://';
			this.apilink += this.onlyapi ? 'api' :  (this.isMobile() ? 'api' : 'web');
			this.apilink += '.whatsapp.com/send?phone=' + this.phone + '&text=' + encodeURI(this.text);
			//console.log(this.apilink);
		}
	},

	created: function () {
		this.apilink = 'http://';
		this.apilink += this.isMobile() ? 'api' : 'web';
		this.apilink += '.whatsapp.com/send?phone=' + this.phone + '&text=' + encodeURI("Hola!!!");
  },
  
	methods: {
		sendMsg() {
			window.open(this.apilink, '_blank');
			setTimeout(()=>{
				this.text = '';
				this.close();
			}, 500);
    },
    
		toogle() {
			this.fab = !this.fab; 
    },
    
		close() {
			this.fab = false;
    },	
    
		isMobile() {
      var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    }
    
  }	 
}
</script>


<style scoped>

/* pop up */

@import url('https://fonts.googleapis.com/css?family=Roboto');

/* offset-x > | offset-y ^| blur-radius | spread-radius | color */
@keyframes pulse {
  0% {
    transform: scale(1, 1);
  }
  50% {
    opacity: 0.3;
  }
  100% {
    transform: scale(1.45);
    opacity: 0;
  }
}

.pulse {
  -webkit-animation-name: pulse;
  animation-name: pulse;
}

.nav-bottom {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-content: flex-end;
  width: auto;
  height: auto;
  position: fixed;
  z-index: 8;
  bottom: 0px;
  right: 0px;
  padding: 5px;
  margin: 0px;
}
@media (max-width: 360px) {
  .nav-bottom {
    width: 320px;
  }
}
.whatsapp-button {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 60px;
  height: 60px;
  z-index: 8;
  transition: 0.3s;
  margin: 10px;
  padding: 7px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  background-color: white;
  /* offset-x > | offset-y ^| blur-radius | spread-radius | color */
  -webkit-box-shadow: 1px 1px 6px 0px rgba(68, 68, 68, 0.705);
  -moz-box-shadow: 1px 1px 6px 0px rgba(68, 68, 68, 0.705);
  box-shadow: 1px 1px 6px 0px rgba(68, 68, 68, 0.705);
}
.circle-anime {
  display: flex;
  position: absolute;
  justify-content: center;
  align-content: center;
  width: 60px;
  height: 60px;
  top: 15px;
  right: 15px;
  border-radius: 50%;
  transition: 0.3s;
  background-color: #77bb4a;
  animation: pulse 1.2s 4s ease 4;
}

.popup-whatsapp {
  z-index: 9999;	
  /* display: none; */
  position: fixed;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: auto;
  height: auto;
  padding: 10px;
  bottom: 85px;
  right: 6px;
  transition: 0.5s;
  border-radius: 10px;
  background-color: white;
  /* offset-x > | offset-y ^| blur-radius | spread-radius | color */
  -webkit-box-shadow: 2px 1px 6px 0px rgba(68, 68, 68, 0.705);
  -moz-box-shadow: 2px 1px 6px 0px rgba(68, 68, 68, 0.705);
  box-shadow: 2px 1px 6px 0px rgba(68, 68, 68, 0.705);
  animation: slideInRight 0.6s 0s both;
}

.popup-whatsapp > div {
  margin: 5px;
}

@media (max-width: 680px) {
  .popup-whatsapp p {
    font-size: 0.9em;
  }
}
.popup-whatsapp > .content-whatsapp.-top {
  display: flex;
  flex-direction: column;
}
.popup-whatsapp > .content-whatsapp.-top p {
  color: #585858;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 1em;
}
.popup-whatsapp > .content-whatsapp.-bottom {
  display: flex;
  flex-direction: row;
}
.closePopup {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  margin: 0px 0px 15px 0px;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #f76060;
  -webkit-box-shadow: 1px 1px 2px 0px rgba(68, 68, 68, 0.705);
  -moz-box-shadow: 1px 1px 2px 0px rgba(68, 68, 68, 0.705);
  box-shadow: 1px 1px 2px 0px rgba(68, 68, 68, 0.705);
}
.closePopup:hover {
  background-color: #f71d1d;
  transition: 0.3s;
}
.send-msPopup {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  margin: 0px 0px 0px 5px;
  border: none;
  outline: none;
  cursor: pointer;
  -webkit-box-shadow: 1px 1px 2px 0px rgba(68, 68, 68, 0.705);
  -moz-box-shadow: 1px 1px 2px 0px rgba(68, 68, 68, 0.705);
  box-shadow: 1px 1px 2px 0px rgba(68, 68, 68, 0.705);
}
.send-msPopup:hover {
  background-color: #f8f8f8;
  transition: 0.3s;
}
.is-active-whatsapp-popup {
  display: flex;
  animation: slideInRight 0.6s 0s both;
}
input.whats-input[type=text] {
  width: 250px;
  height: 40px;
  box-sizing: border-box;
  border: 0px solid #ffffff;
  border-radius: 20px;
  font-size: 1em;
  background-color: #ffffff;
  padding: 0px 0px 0px 10px;
  -webkit-transition: width 0.3s ease-in-out;
  transition: width 0.3s ease-in-out;
  outline: none;
  transition: 0.3s;
}

@media (max-width: 420px) {
  input.whats-input[type=text] {
    width: 225px;
  }
}
input.whats-input::placeholder {
  /* Most modern browsers support this now. */
  color: rgba(68, 68, 68, 0.705);
  opacity: 1;
}
input.whats-input[type=text]:focus {
  background-color: #f8f8f8;
  -webkit-transition: width 0.3s ease-in-out;
  transition: width 0.3s ease-in-out;
  transition: 0.3s;
}
.icon-whatsapp-small {
  width: 24px;
  height: 24px;
}
.icon-whatsapp {
  width: 45px;
  height: 45px;
}
.icon-font-color {
  color: #ffffff;
}
.icon-font-color--black {
  color: #333333;
}


/*  Botón */ 
.my-input.v-input .v-input__slot {
  border-radius: 100px;
}

.chat-background {
  background-color: #ECE5DD !important
}

.chat-header {
  background-color: #075E54 !important
}

.chip-chat {
  background-color: #DCF8C6 !important
}

.nodeco {
	outline: none !important;
    box-shadow: none;
}

</style>