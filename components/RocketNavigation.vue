<template>
    <span>
        <v-navigation-drawer app v-model="drawer" right>
            <v-list>
                <template v-for="(list, i) in lists">
                    <v-list-tile :key="i">
                        <v-list-tile-content>
                            <transition name="component-fade" mode="out-in">
                                <span v-if="drawer">{{list.msg}}</span>
                            </transition>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${i}`"></v-divider>
                </template>
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
            lists: [
                { msg: 'Pricing' },
                { msg: 'Customers' },
                { msg: 'Docs' },
                { msg: 'Blog' },
                { msg: 'Login' },
                { msg: 'Sign Up' }
            ]
        };
    },
    components: {
        Hamburger
    }
};
</script>


<style scoped>
.component-fade-enter-active {
  transition: opacity 4s ease;
}

.component-fade-leave-active {
  transition: opacity 4s ease;
}

.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}
</style>
