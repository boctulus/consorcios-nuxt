<template>
    <span>
        <transition name="slide-fade">
            <div v-show="drawer" class="drawer">
                <div style="margin-top:5em;">
                    <div style="text-align: center;">
                        <img src="https://i.imgur.com/QyAAKtC.png" style="width: 7em;" />
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
                                <v-icon color="#CFA18B" style="margin-right:0.5em;">crop_din</v-icon>{{item.msg}}
                            </li>
                        </transition-group>
                    </v-list>      
                </div>
            </div>
        </transition>
        
        <nav class="nav">
            <img src="https://i.imgur.com/QyAAKtC.png" class="logo"/>

            <v-divider></v-divider>

            <Hamburger @click.native="drawer = !drawer" v-bind:class="[drawer ? 'active' : '']" style="z-index: 9999; position: fixed; right: 5%; top:3vh"></Hamburger>            
        </nav>
    </span>
</template>

<script>
import Hamburger from '@/components/Hamburger';
import Velocity from 'velocity-animate';

export default {
    name: 'RocketNavigation',
    data() {
        return {
            drawer: false,
            list: [
                { msg: 'Pricing' },
                { msg: 'Customers' },
                { msg: 'Docs' },
                { msg: 'Blog' },
                { msg: 'Login' },
                { msg: 'Sign Up' }
            ]
        };
    },
    computed: {
        computedList: function () {
            return this.drawer ? this.list : []
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
    opacity: 0.85; 
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

.logo {
    z-index:4000; 
    width: 14em;
    position: absolute;
    top: 5vh;
    left: 3%; 
}    

.nav {
    display:flex; 
    align-items: flex-start; 
    position: relative;
    left: 0;
    top: 0;
}

</style>
