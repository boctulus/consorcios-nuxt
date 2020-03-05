<template>
    <div>
        <transition name="slide-fade">
            <div v-if="drawer" class="drawer">
                <div style="margin-top:5em;">
                    <v-list style="margin-top: 3em; background-color: #000000; color: #ffffff;">
                            <li 
                                v-for="(item, index) in computedList"
                                v-bind:key="item.msg"
                                v-bind:data-index="index"
                                class="item"
                            >
                                <v-icon color="#CFA18B" style="padding-left:0.5em;">{{item.icon}}</v-icon>                                
                                <a @click="navigate" class="link" v-if="!item.bookmark" :id="item.link">{{item.msg}}</a>
                                <a @click="scrollToBookmark" class="link" v-if="item.bookmark" :id="item.link">{{item.msg}}</a>

                                 <b-dropdown-divider v-if="typeof item.divider != 'undefined' && item.divider"></b-dropdown-divider>
                            </li>

                           

                    </v-list>      
                </div>
            </div>
        </transition>
        
        <b-container>
            <nav class="nav">
                <!-- media queries : hacer un "pull" de content para "md" o menores -->
                <b-row>
                    <b-col>
                        <n-link to="/home" class="logo_wrapper">
                            <img :src="require('@/assets/logo_sm.png')" class="logo_img"/>
                            <span class="logo egravers">El Grove</span>
                        </n-link> 
                    </b-col>
                    <b-col class="smallScreen order-first">
                        <v-icon @click.native="drawer = !drawer" v-bind:class="[drawer ? 'active' : '']" class="ham">menu</v-icon>         
                    </b-col>
                    <b-col class="bigScreen">
                        <v-icon @click.native="drawer = !drawer" v-bind:class="[drawer ? 'active' : '']" class="ham">menu</v-icon>         
                    </b-col>

                    <b-col>
                        <b-dropdown id="dropdown-right" right text="" class="m-2">
                            <b-dropdown-item href="#" @click="logout">Salir</b-dropdown-item>
                        </b-dropdown>         
                    </b-col>
                </b-row>                 
            </nav>

            <div class="content" @click="closeDrawer">
                 Contador: {{ count }}
                <span v-if="user.username">{{ user.username }}</span>

                <nuxt-child/>
            </div>
        </b-container>
        
    </div>
</template>

<script>
import getLinks from '@/api/links.js';
import { store } from '@/store/login.js'

export default {
    name: 'DashNavigation',
    store: store,
    data() {
        return {
            drawer: false,
            list: []
        };
    },
    computed: {
        computedList: function () {
            return this.drawer ? this.list : []
        },
        count: function () {
            return this.$store.state.count;
        },
        user: function () {
            return this.$store.state.authenticatedUser;
        }
    },
    created() {
        this.list = [
            { msg: 'Panel de control',  link: '/dashboard', icon: 'fa-gears', divider: true },
            ...getLinks('habitante')  /* debo usar Vuex para saber el o los roles y así pedir los links */
        ];

        for (let i=0; i<this.list.length; i++){
            if (this.list[i].link[0] == '#')
                this.list[i].bookmark = true;
            else     
                this.list[i].bookmark = false;
        }
    },
    mounted() {
        //console.log(this.count);
        this.$store.commit('saveUser', {username: 'boctulus', id: 1});
        console.log(this.user);
    },
    methods: {
        closeDrawer: function() {
            this.drawer = false;
            console.log('CERRANDO..');
        },
        scrollToBookmark: function(element) {
            this.drawer = false;   
            setTimeout(() => {
                VueScrollTo.scrollTo(element.target.id, 1000, {
                    easing: 'ease-in-out'
                })
            },500);  
        },
        navigate: function(element) {
            this.drawer = false;   
            setTimeout(() => {
                this.$router.push({
                    path: element.target.id
               })
            },500);  
        },
        logout: function() {
            console.log('LOG OUT');
        },
        increment() {
            this.$store.commit('increment');
        },
        decrement() {
            this.$store.commit('decrement');
        }
    },
    components: {
        
    }
};
</script>


<style scoped>  

#dropdown-right {
    position:fixed; 
    right: 0.5em; 
}

.nav {
    z-index: 5001;
    display:flex; 
    align-items: flex-start; 
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    height: 50px;
    background-color:#808B97;
}

.ham {
    font-size: 26px;
    margin-top: 12px;
    cursor: pointer;
    padding-left: 0.8em;
    color: #ccc !important;
    /* 
    background-color:red; 
    border: 1px solid red;
    */
    margin-left: 1.2em;
}

.logo_wrapper {
    margin-top: 11px;
    padding-left: 1em;
    width: 9.5em;
    display:flex; 
    align-items: flex-start; 
}

.logo_wrapper:hover {
  text-decoration: none !important;
}

.logo_img {
    width: 1.4em;
    margin-top: 3px;    
}

.logo {    
    font-size:1.25em;
    text-transform: uppercase;
    font-weight: 600;
    color: #fff;
    min-width: 5em;
    padding-left: 1em;
    /*
    background-color: yellow; 
    border: 1px solid red;
    */
}

.link {
    color: #ffffff;
    padding-left: 1em;
    font-size: 0.8em;
}

.list {
    list-style: none;
}

.item {
    font-size: 1.2em;
    line-height: 2.5em;
    text-transform: uppercase;
}

.item:hover {
    text-decoration: none;
    cursor: pointer; 
    background-color: #321FDB;
}

.drawer {
    opacity: 1; 
    z-index: 5000;
    
    position: fixed;
    top:0;
    left: 0;
  
    background-color:black;
    width: 14.5em;
    height: 100%;

    overflow-y: auto;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(1.0, 0.5,    0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to
{
  transform: translateX(-14.5em);
  opacity: 0;
}

.content {
    margin-top: 50px;
    padding: 1em;
}

@media (max-width: 1023px) {
  .bigScreen {
    display:none;
  }

  .smallScreen {
    display:block;
    padding-right: 0.5em;
  }

  .logo_wrapper {
    padding-left: 0;
  }

  .ham {
    margin-left: 0 !important;
  }

}

@media (min-width: 1024px) {
  .bigScreen {
    display:block;
    padding-left: 0;
  }
  
  .smallScreen {
    display:none;
  }

}
</style>