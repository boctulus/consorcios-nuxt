<template>
    <div v-click-outside="close">
        <transition name="slide-fade">
            <div v-show="drawer" class="drawer">
                <div style="margin-top:5em;">
                    <div style="text-align: center;">
                        <n-link to="/home">
                            <img src="/elgrove_nueva_tipo.png" style="width: 8em;" /><!-- OK -->
                        </n-link>    
                    </div>
                    
                    <v-list style="margin-top: 3em; background-color: #000000; color: #ffffff;" v-show="drawer">
                        <transition-group
                            name="staggered-fade"
                            tag="ul"
                            v-bind:css="false"
                            v-on:before-enter="beforeEnter"
                            v-on:enter="enter"
                            v-on:leave="leave"
                            class="list"
                        >
                            <li 
                                v-for="(item, index) in computedList"
                                v-bind:key="item.msg"
                                v-bind:data-index="index"
                                class="item link"
                                @click="go(item.link)"
                            >
                                <v-icon color="#CFA18B" style="margin-right:0.5em;">crop_din</v-icon>  
                                {{item.msg}}
                            </li>
                            
                        </transition-group>
                    </v-list>      
                </div>
            </div>
        </transition>
        
        <nav class="nav">
            <Hamburger @click.native="drawer = !drawer" v-bind:class="[drawer ? 'active' : '']" style="z-index: 9999; position: fixed; right: 5%; top:3vh"></Hamburger>            
        </nav>
    </div>
</template>

<script>
import Hamburger from '@/components/Hamburger';
import Velocity from 'velocity-animate';
import vClickOutside from 'v-click-outside';
import closeMixin from '@/mixins/close.js';

import VueScrollTo from 'vue-scrollto'

import Vue from 'vue'
Vue.use(VueScrollTo)


export default {
    name: 'RocketNavigation',
    mixins: [closeMixin],

    data() {
        return {
            drawer: false,
            list: [
                { msg: 'Inicio',  link: '/'},
                { msg: 'Servicios',  link: '/servicios' },
                { msg: 'Blog',  link: '/blog' },                
                { msg: 'Marco legal',  link: '/legal' },
                { msg: 'Contacto',  link: '#contacto' },
                { msg: 'Acceso clientes',  link: '/dashboard' }
            ]
        };
    },

    computed: {
        computedList: function () {
            return this.drawer ? this.list : []
        }
    },

    directives: {
      clickOutside: vClickOutside.directive
    },

    methods: {
        beforeEnter: function (elem) {
            elem.style.opacity = 0
            elem.style.height = 0
        },

        enter: function (elem, done) {
            var delay = 0;
            setTimeout(function () {
                Velocity(
                    elem,
                    { opacity: 1, height: '3em' },
                    { complete: done }
                )
            }, delay)
        },

        leave: function (elem, done) {
            var delay = elem.dataset.index * 100
            setTimeout(function () {
                Velocity(
                    elem,
                    { opacity: 0, height: 0 },
                    { complete: done }
                )
            }, delay)
        },

        close: function() {
            this.drawer = false;
        },

        go: function(link) {
            if (link[0] == '#'){
                this.scrollToBookmark(link);
            } else {
                this.navigate(link);
            }
        },

        scrollToBookmark: function(link) {
            this.drawer = false;   
            setTimeout(() => {
                VueScrollTo.scrollTo(link, 1000, {
                    easing: 'ease-in-out'
                })
            },500);  
        },

        navigate: function(link) {
            this.drawer = false;   
            setTimeout(() => {
                this.$router.push({
                    path: link
               })
            },500);  
        }
    },
    components: {
        Hamburger
    }
};
</script>


<style scoped>  

.link {
    color: #ffffff;
    -webkit-transition: all 0.5s ease; /* Safari and Chrome */
    -moz-transition: all 0.5s ease; /* Firefox */
    -ms-transition: all 0.5s ease; /* IE 9 */
    -o-transition: all 0.5s ease; /* Opera */
    transition: all 0.5s ease;
}

.link:hover {
    text-decoration: none;
    cursor: pointer;
    font-size: 1.15em;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .6s cubic-bezier(1.0, 0.5,    0.8, 1.0);
}

.slide-fade-enter
{
  transform: translateX(21em);
  opacity: 0;
}

.slide-fade-leave-to
{
  transform: translateX(21em);
  opacity: 0;
}


.list {
    list-style: none;
}

.item {
    font-size: 1.2em;
    text-transform: uppercase;
    line-height: 10px;
}

.drawer {
    opacity: 0.75; 
    z-index: 5000;
    
    position: fixed;
    top:0;
    right: 0;
    padding-right: 0;

    background-color:black;
    width: 21em;
    height: 100%;

    overflow-y: auto;
}

.nav {
    display:flex; 
    align-items: flex-start; 
    position: relative;
    left: 0;
    top: 0;
}

</style>