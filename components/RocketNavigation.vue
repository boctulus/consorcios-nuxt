<template>
    <span>
        <transition name="slide-fade">
            <div v-show="drawer" class="drawer">
                <div style="margin-top:5em;">
                    <div style="text-align: center;">
                        <img src="https://i.imgur.com/QyAAKtC.png" style="width: 8em;" /><!-- OK -->
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
                                class="item"
                            >
                                <v-icon color="#CFA18B" style="margin-right:0.5em;">crop_din</v-icon>
                                <n-link :to="item.link" class="link" v-if="!item.bookmark">{{item.msg}}</n-link>
                                <a :href="item.link" v-scroll-to="'#contacto'" class="link" v-if="item.bookmark">{{item.msg}}</a>
                            </li>
                        </transition-group>
                    </v-list>      
                </div>
            </div>
        </transition>
        
        <nav class="nav">
            <Hamburger @click.native="drawer = !drawer" v-bind:class="[drawer ? 'active' : '']" style="z-index: 9999; position: fixed; right: 5%; top:3vh"></Hamburger>            
        </nav>
    </span>
</template>

<script>
import Hamburger from '@/components/Hamburger';
import Velocity from 'velocity-animate';

import VueScrollTo from 'vue-scrollto'
import Vue from 'vue'
Vue.use(VueScrollTo)

export default {
    name: 'RocketNavigation',
    data() {
        return {
            drawer: false,
            list: [
                { msg: 'Inicio',  link: '/'},
                { msg: 'Servicios',  link: '/servicios' },
                { msg: 'Blog',  link: '/blog' },
                { msg: 'Acceso clientes',  link: '/dashboard' },
                { msg: 'Marco legal',  link: '/legal' },
                { msg: 'Contacto',  link: '#contacto' }
            ]
        };
    },
    computed: {
        computedList: function () {
            return this.drawer ? this.list : []
        }
    },
    created() {
        for (let i=0; i<this.list; i++){
            if (this.list.link[0] == '#')
                this.list.bookmark = true;
            else     
                this.list.bookmark = false;
        }
    },
    methods: {
        beforeEnter: function (elem) {
            elem.style.opacity = 0
            elem.style.height = 0
        },
        enter: function (elem, done) {
            var delay = elem.dataset.index * 150;
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
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .6s cubic-bezier(1.0, 0.5,    0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to
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

    overflow: scroll;
}

.nav {
    display:flex; 
    align-items: flex-start; 
    position: relative;
    left: 0;
    top: 0;
}

</style>
