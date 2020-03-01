<template>
    <span >
        <transition name="slide-fade">
            <div v-show="drawer" class="drawer">
                <div style="margin-top:5em;">
                    <v-list style="margin-top: 3em; background-color: #000000; color: #ffffff;" v-show="drawer">
                        
                            <li 
                                v-for="(item, index) in computedList"
                                v-bind:key="item.msg"
                                v-bind:data-index="index"
                                class="item"
                            >
                                <v-icon color="#CFA18B" style="margin-right:0.5em;">crop_din</v-icon>                                
                                <a @click="navigate" class="link" v-if="!item.bookmark" :id="item.link">{{item.msg}}</a>
                                <a @click="scrollToBookmark" class="link" v-if="item.bookmark" :id="item.link">{{item.msg}}</a>
                            </li>

                    </v-list>      
                </div>
            </div>
        </transition>
        
        <nav class="nav">
            <span class="logo">El Grove</span>

            <v-icon color="#CFA18B" @click.native="drawer = !drawer" v-bind:class="[drawer ? 'active' : '']" class="ham">menu</v-icon>                   
        </nav>
    </span>
</template>

<script>
import Hamburger from '@/components/Hamburger';
//import Velocity from 'velocity-animate';

export default {
    name: 'DashNavigation',
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
    created() {
        for (let i=0; i<this.list.length; i++){
            if (this.list[i].link[0] == '#')
                this.list[i].bookmark = true;
            else     
                this.list[i].bookmark = false;
        }
    },
    directives: {

    },
    methods: {
        closeDrawer: function() {
            this.drawer = false;
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
        }
    },
    components: {
        Hamburger
    }
};
</script>


<style scoped>  

.nav {
    z-index: 5001;
    display:flex; 
    align-items: flex-start; 
    position: relative;
    left: 0;
    top: 0;
    height: 50px;
    background-color:#808B97;
}

.ham {
    font-size: 26px;
    margin-top: 12px;
    cursor: pointer;
}

.logo {
    padding-left: 40px;
    padding-right: 40px;
    font-size:18px;
    margin-top: 10px;
    text-transform: uppercase;
    font-weight: 600;
    color: #fff;
}

.link {
    color: #ffffff;
}

.link:hover {
    text-decoration: none;
    cursor: pointer;
    font-size: 1.15em;
    filter: brightness(2);
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
    /* opacity: 0.75; */
    z-index: 5000;
    
    position: fixed;
    top:0;
    left: -16em;

    background-color:black;
    width: 16em;
    height: 100%;

    overflow-y: auto;
}

.slide-fade-leave-active {
  transition: all 2s linear;
}

.slide-fade-enter, .slide-fade-leave-to
{
  transform: translateX(16em);
  /* opacity: 0; */
}

.slide-fade-enter-active {
  transition: all .3s ease;
}



</style>