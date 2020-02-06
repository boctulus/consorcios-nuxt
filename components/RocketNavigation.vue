<template>
    <span>
        <v-navigation-drawer app v-model="drawer" right>
            <v-list>
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
						<span v-if="drawer">{{item.msg}}</span>
					</li>
                </transition-group>
            </v-list>      
        </v-navigation-drawer>

        <nav style="display:flex; align-items: flex-start; margin: 40px">
            <v-img :src="require('../assets/logo.png')" :max-width="80"></v-img>

            <v-divider></v-divider>

            <Hamburger @click.native="drawer = !drawer" v-bind:class="[drawer ? 'active' : '']" style="z-index: 9999;"></Hamburger>            
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
            var delay = elem.dataset.index * 250;
            console.log(elem.dataset.index);
            setTimeout(function () {
                Velocity(
                    elem,
                    { opacity: 1, height: '3em' },
                    { complete: done }
                )
            }, delay)
        },
        leave: function (elem, done) {
            var delay = elem.dataset.index * 150
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
.list {
    list-style: none;
}

.item {
    font-size: 1.2em;
}
</style>
