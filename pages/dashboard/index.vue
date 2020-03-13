<template>
  <div>
      <h1>Dashboard</h1>

      <v-content>
            <v-container grid-list-md text-xs-center>
                  <v-layout row wrap >
                      <template v-for="card in cards">  
                        <v-flex v-bind:key="card.name" style="margin-top: 20px;">
                              <a href="#" @click="navigate(card.to)" class="link">
                                    <div class="imc" v-bind:style="{ width: computedWidth, minHeight : computedMinHeight }">
                                          <div class="im overlay" :style="{backgroundImage:'url('+ card.img + ')', backgroundSize: 'cover'}" >
                                                <span class="headline engravers" :style="{ fontSize: computedHeadlineFontSize }" >{{card.name}}</span>
                                          </div>
                                    </div>
                              </a>      
                        </v-flex>    
  
                      </template>    
                  </v-layout>      
            </v-container>
      </v-content>
  </div>
</template>

<script>
import getCards from '@/api/cards.js';
import { store } from '@/store/login.js'

export default {  
      layout: 'dashboard',
      store: store,
      data: () => ({
            cards: [],
            headlineFontSize:  '2em !important'
      }),

      computed: {
            computedWidth: function () {
                  return this.width;
            },

            computedMinHeight: function () {
                  return this.minHeight;
            },

            computedHeadlineFontSize: function () {
                  return this.headlineFontSize;
            }
      },

      created() {
            
            this.$store.getters.roles.forEach(role => {
                  getCards(role).forEach(e => {
                        this.cards.push(e)
                  });
            });         

            if (this.cards.length <= 3){
                  this.width = '60vw';

                  if (window.innerHeight < window.innerWidth){
                     this.minHeight = parseInt(60 * 1.25) + 'vh';
                  }  
                  
                  this.headlineFontSize = parseFloat(1.1  * 5 * window.innerWidth / 1200) + 'em !important';
            }
      },

      mounted() {

      },

      methods: {
            navigate: function(to) { 
                  setTimeout(() => {
                        this.$router.push({
                              path: to
                        })
                  },500);  
            }
      }  
}
</script>


<style scoped>
.imc {
      width: 280px;
      height: 200px;
      margin: 0 auto; 
      transition: all .5s ease-in-out;
}

.imc:hover {
      transform: scale(1.1);
}

.im {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      max-width:100%;
      height: 100%;
}

.overlay {
      position: relative;
}

.overlay::after {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: 0.3;
}

.headline {
      opacity: 1;
      z-index: 999;
}

.link {
      color: white;
}

@media screen and (max-width: 320px) {
      .imc {
            width: 240px;
      }
}

</style>