<template>
    <span>
        <v-navigation-drawer app v-model="drawer" right>
            <v-list>
                <template v-for="(menu, i) in menus">
                    <v-list-tile :key="i">
                        <v-list-tile-content>
                            {{menu.value}}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${i}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>

        <nav style="display:flex; align-items: flex-start; margin: 40px">
            <v-img :src="require('../assets/logo.png')" :max-width="80"></v-img>

            <v-divider></v-divider>
            
            <a id="hamburger-icon" href="#" title="Menu" @click="drawer = !drawer" v-bind:class="[drawer ? 'active' : '']" style="z-index: 9999;">
                <span class="line line-1"></span>
                <span class="line line-2"></span>
                <span class="line line-3"></span>
            </a>
        </nav>

        

    </span>
</template>

<script>
export default {
    name: 'RocketNavigation',
    data() {
        return {
            drawer: false,
            menus: [
                { value: 'Pricing' },
                { value: 'Customers' },
                { value: 'Docs' },
                { value: 'Blog' },
                { value: 'Login' },
                { value: 'Sign Up' }
            ]
        };
    },
    components: {
    }
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);
 body {
	 background: #3d566e;
	 color: #ecf0f1;
	 font-family: 'Montserrat', sans-serif;
	 -webkit-font-smoothing: antialiased;
	 text-align: center;
}
 #hamburger-icon {
	 width: 40px;
	 height: 20px;
	 position: relative;
	 display: block;
	 margin: 40px auto 20px auto;
}
 #hamburger-icon .line {
	 display: block;
	 background: #B38C25;
	 width: 40px;
	 height: 4px;
	 position: absolute;
	 left: 0;
	 border-radius: 2px;
	 transition: all 0.4s;
	 -webkit-transition: all 0.4s;
	 -moz-transition: all 0.4s;
}
 #hamburger-icon .line.line-1 {
	 top: 0;
}
 #hamburger-icon .line.line-2 {
	 top: 50%;
}
 #hamburger-icon .line.line-3 {
	 top: 100%;
}
 #hamburger-icon:hover .line-1, #hamburger-icon:focus .line-1 {
	 transform: translateY(-2px);
	 -webkit-transform: translateY(-2px);
	 -moz-transform: translateY(-2px);
}
 #hamburger-icon:hover .line-3, #hamburger-icon:focus .line-3 {
	 transform: translateY(2px);
	 -webkit-transform: translateY(2px);
	 -moz-transform: translateY(2px);
}
 #hamburger-icon.active .line-1 {
	 transform: translateY(10px) translateX(0) rotate(45deg);
	 -webkit-transform: translateY(10px) translateX(0) rotate(45deg);
	 -moz-transform: translateY(10px) translateX(0) rotate(45deg);
}
 #hamburger-icon.active .line-2 {
	 opacity: 0;
}
 #hamburger-icon.active .line-3 {
	 transform: translateY(-10px) translateX(0) rotate(-45deg);
	 -webkit-transform: translateY(-10px) translateX(0) rotate(-45deg);
	 -moz-transform: translateY(-10px) translateX(0) rotate(-45deg);
}
 h1 {
	 text-transform: uppercase;
}
 a {
	 text-decoration: none;
	 color: #95a5a6;
	 margin: 0.5em 1.5em;
	 display: inline-block;
}
 a:hover, a:focus {
	 color: #ecf0f1;
} 
</style>