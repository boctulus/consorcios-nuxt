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
                            </li>

                    </v-list>      
                </div>
            </div>
        </transition>
        
        <nav class="nav">
            <n-link to="/dashboard" class="logo_wrapper">
                <span class="logo">El Grove</span>
            </n-link> 

            <v-icon color="#CFA18B" @click.native="drawer = !drawer" v-bind:class="[drawer ? 'active' : '']" class="ham">menu</v-icon>                   
        </nav>

        <div class="content">
            <nuxt-child/>
        </div>
        
    </div>
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
                { msg: 'Posts',  link: '/dashboard/posts', icon: 'fa-clone'},
                { msg: 'Servicios',  link: '/dashboard/servicios', icon: 'fa-bell' },
                { msg: 'Archivos',  link: '/dashboard/archivos', icon: 'fa-folder' },
                { msg: 'Mensajes',  link: '/dashboard/mensajes', icon: 'fa-envelope' },
                { msg: 'Contraseñas',  link: '/dashboard/passwords', icon: 'fa-key' }
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
}

.logo_wrapper {
    padding-left: 1em;
    padding-right: 3.6em;
    font-size:18px;
    margin-top: 10px;
    text-transform: uppercase;
    font-weight: 600;
    color: #fff;
}

.logo:hover {
  text-decoration: none !important;
}

.link {
    color: #ffffff;
    padding-left: 1em;
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
    line-height: 2.5em;
}

.drawer {
    opacity: 0.75; 
    z-index: 5000;
    
    position: fixed;
    top:0;
    left: 0;
  
    background-color:black;
    width: 12em;
    height: 100%;

    overflow-y: auto;
}

.slide-fade-enter-active {
  transition: all .7s ease;
}

.slide-fade-leave-active {
  transition: all 1.5s cubic-bezier(1.0, 0.5,    0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to
{
  transform: translateX(-12em);
  opacity: 0;
}

.content {
    padding: 1em;
}

</style>