<template>
    <div>
        <transition name="slide-fade">
            <div v-if="drawer" class="drawer">
                <div style="margin-top:5em;">
                    <v-list style="margin-top: 3em; background-color: #000000; color: #B8C7CE;">
                        <template
                            v-for="(item, index) in computedList"
                            v-bind:data-index="index"
                        >

                            <template v-if="item.hasOwnProperty('link')">
                                <a href="#" @click="navigate(item.link)" v-bind:key="`link-${item.text}`" class="link">
                                    <li class="item" style="width:100%;">
                                        <v-icon color="#CFA18B" style="padding-left:0.5em;">
                                            {{item.icon}}
                                        </v-icon>
                                        <span class="item_node engravers">{{item.text}}</span>
                                    </li>
                                </a>    

                                <b-dropdown-divider v-if="typeof item.divider != 'undefined' && item.divider" v-bind:key="`'sep-' + ${item.text}`"></b-dropdown-divider>                            
                            </template> 

                            <template v-if="item.hasOwnProperty('childs')">
                                <li v-bind:key="item.text">
                                    <div class="item">
                                        <v-icon color="#CFA18B" style="padding-left:0.5em;">{{item.icon}}</v-icon>
                                        <span class="item_node engravers">{{item.text}}</span>

                                        <span style="position: absolute; right: 10px; margin-top: 10px;">
                                            <i class="fa fa-angle-down"></i>
                                        </span> 
                                    </div>      

                                    <ul class="treeview-menu" v-for="(child, ix) in item.childs" v-bind:key="ix">
                                        <li>
                                            <a href="#" @click="navigate(child.link)" class="sub">
                                                <div>
                                                    <i class="fa fa-circle-o"></i><span style="margin-left:1em;">{{ child.text }}</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>     
                                </li>
                            </template>   
                   
                        </template>
                    </v-list>      
                </div>
            </div>
        </transition>
        
        <b-container>
            <nav class="nav">
                <!-- media queries : hacer un "pull" de content para "md" o menores -->
                <b-row>
                    <b-col>
                        <n-link to="/dashboard" class="logo_wrapper">
                            <img src="/logo_sm.png" class="logo_img"/>
                            <span class="logo engravers">El Grove</span>
                        </n-link> 
                    </b-col>
                    <b-col class="smallScreen order-first">
                        <v-icon @click.native="drawer = !drawer" v-bind:class="[drawer ? 'active' : '']" class="ham">menu</v-icon>         
                    </b-col>
                    <b-col class="bigScreen">
                        <v-icon @click.native="drawer = !drawer" v-bind:class="[drawer ? 'active' : '']" class="ham">menu</v-icon>         
                    </b-col>

                    <b-col>
                        <span v-if="username" id="username">{{ username }}</span>
                    </b-col>

                    <b-col>                        
                        <div id="dropdown-right">
                            <v-menu bottom left offset-y>
                                <template v-slot:activator="{ on }">
                                <v-btn
                                    dark
                                    icon
                                    v-on="on"
                                >
                                    <v-icon>more_vert</v-icon>
                                </v-btn>
                                </template>

                                <v-list style="margin-top: 10px;">
                                <v-list-tile
                                    v-for="(dp, i) in dropdown_items"
                                    :key="i"
                                    @click="dp.action()"
                                >
                                    <v-icon style="font-size:1em;">{{ dp.icon }}</v-icon>
                                    <v-list-tile-title style="margin-left:0.5em;">{{ dp.title }}</v-list-tile-title>
                                </v-list-tile>
                                </v-list>
                            </v-menu>
                        </div>
                        

                    </b-col>
                </b-row>                 
            </nav>

            <div class="content" @click="close">
                <nuxt-child/>
            </div>
        </b-container>
        
    </div>
</template>

<script>
import closeMixin from '@/mixins/close.js';
import getLinks from '@/api/nav_links.js';

export default {
    name: 'DashNavigation',
    mixins: [closeMixin],
    data() {
        return {
            drawer: false,
            list: [],
            dropdown_items: [
                {title: 'salir', 'action': this.logout, icon: 'logout' }
            ]
        };
    },
    computed: {
        computedList: function () {
            return this.drawer ? this.list : []
        },
        user: function () {
            return this.$store.getters['auth/get_user'];
        },
        username: function () {
            return this.$store.getters['auth/get_user'].username;
        }
    },
    created() {
        console.log(this.$store.getters['auth/get_user'].roles);

        this.list = [
            { text: 'Panel de control',  link: '/dashboard', icon: 'fa-gears', divider: true },
            //{ text: 'Inicio',  link: '/home', icon: 'fa-home' }
        ];

        this.$store.getters['auth/get_user'].roles.forEach(role => {
            getLinks(role).forEach(e => {
                this.list.push(e)
            });
        });       
    },
    mounted() {

    },
    methods: {
        close: function() {
            this.drawer = false;
            //console.log('CERRANDO..');
        },
        logout: function() {
            this.$store.dispatch('auth/logout')
            .then(resp => {
                 this.$router.replace({ path: '/login' }); ///
            })
        },
        navigate: function(to) {
            this.drawer = false;   
            setTimeout(() => {
                this.$router.push({
                    path: to
               })
            },500);  
        }
    },
    components: {
        
    }
};
</script>


<style scoped>  
.logo_wrapper {
    height: 50px !important;
}

.treeview-menu {
    list-style: none;
    color:#B8C7CE !important;
}

.treeview-menu>li {
    line-height: 2.5em;
}

.sub {
    color: #B8C7CE;
}

.link, .sub:hover {
    text-decoration: none;
    cursor: pointer;
    color: #fff;
}

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
    background-color: #145EA8; /* #808B97; */
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

#username {
    position: fixed;  
    top: 12px; 
    right: 60px;
    color: #ccc;
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

.list {
    list-style: none;
}

.item:hover {
    text-decoration: none;
    cursor: pointer; 
    background-color: #321FDB;
}

.item_node {
    padding-left: 0.5em;
    font-size: 1.25em;
    line-height: 2.5em;
    /* text-transform: uppercase;  */
}

.drawer {
    opacity: 0.75; 
    z-index: 5000;
    
    position: fixed;
    top:0;
    left: 0;
  
    background-color:black;
    width: 16em;
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
  transform: translateX(-16em);
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