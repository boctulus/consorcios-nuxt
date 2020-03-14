<template>
  <div :style="{'background-color': '#3C4043' ,minHeight:'100vh'}">
    
    <div class="logo_wrapper">
      <div class="logo_container">
          <n-link to="/home">
            <v-img :src="require('../assets/logov2b_justo.png')" lazy-src class="logo" />
          </n-link>
      </div>  
    </div>  

    <div class="container" id="blog_cont">
        <h1 style="color: #fff;" class="engravers text-mobile mt-1 mb-5">Blog</h1>

        <b-row>

          <b-col sm="12" md="6">
              <b-row v-for="(post, ix) in postsPares" v-bind:key="ix" class="area_link" @mouseover="hover = ix"
    @mouseleave="hover = null">
                  <a href="#" class="link">
                    <li class="link_wrapper">  
                        <v-icon class="plus_link" :class="{ golden : hover == ix }">fa-plus-circle</v-icon>                    
                        <span href="#" class="link text_link">{{ post.title }}</span>
                    </li>
                  </a>
              </b-row>
          </b-col>

          <b-col sm="12" md="6">
              <b-row v-for="(post, ix) in postsImpares" v-bind:key="ix" class="area_link" @mouseover="hover = ix"
    @mouseleave="hover = null">
                <a href="#" class="link">
                  <li class="link_wrapper">  
                      <v-icon class="plus_link" :class="{ golden : hover == ix }">fa-plus-circle</v-icon>                    
                      <span href="#" class="link text_link">{{ post.title }}</span>
                  </li>
                </a>
              </b-row>
          </b-col>

        </b-row>

    </div>
  </div>
</template>

<script>
import getData from '@/api/posts.js';

export default {  
  layout: 'home',

  data: () => ({
    entity: 'post',
    posts: [],
    hover: null
  }),
  
  created () {
      this.initialize()
  },

  computed: {
    postsPares: function() {
      return this.posts.filter((p, ix) => {
        return ix % 2 == 0;
      })
    },

    postsImpares: function() {
      return this.posts.filter((p, ix) => {
        return ix % 2 != 0;
      })
    }

  },

  methods: {
      initialize () {
        this.posts = getData();
      }
  }    
}
</script>


<style scoped>
.area_link {
  background-color: #27292B; 
  margin-bottom: 10px; 
  margin-left: 5px; 
  margin-right: 5px;
  height: 80px;
}

.area_link:hover {
  background-color: #4E8CFF !important;
  color: #D0A28C;
}

.golden {
  color: #D0A28C !important;
}

.link_wrapper {
  text-align: left; 
  list-style: none; 
  margin: 1.5rem;
}

.plus_link {
  color: #ccc;
}

.plus_link:hover {
  color: #D0A28C;
  text-decoration: none;
}

.text_link {
  text-transform: uppercase; 
  color: #ccc;
  margin-left: 0.5rem;
}

#blog_cont {
  text-align: center;
  color: #ccc;
}

.logo_container {
    position: relative;
    top: 3.5vh;
    left: 3%; 
} 

/* texto pequeño en movil*/
@media only screen and (max-width: 800px){
    .text-mobile{
        font-size: 3em !important;
        /* text-align: left; */
    }    
}

@media screen and (max-width: 575px) {
  h1 {
    font-size: 1.8em !important;
  }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
  h1 {
    font-size: 2em !important;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px){
  h1 {
    font-size: 3em !important;
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px){
  h1 {
    font-size: 4em !important;
  }
}

@media screen and (min-width: 1200px){
  h1 {
    font-size: 5em !important;
  }

}
</style>