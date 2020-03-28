<template>
  <div :style="{'background-color': '#3C4043' ,minHeight:'100vh'}">
    
    <div class="logo_wrapper">
      <div class="logo_container">
          <n-link to="/home">
            <v-img src="/elgrove_nueva_tipo.png" lazy-src class="logo" />
          </n-link>
      </div>  
    </div>  

    <div class="container" id="blog_cont">
        <h1 style="color: #fff;" class="engravers text-mobile mb-5">Blog</h1>

        <b-row>

          <b-col sm="12" md="6" class="col_link">
              <b-row v-for="(post, ix) in postsPares" v-bind:key="`'row-par-' + ${ix}`" class="area_link" @mouseover="hover = 'par-' + ix"
    @mouseleave="hover = null">
                  <n-link href="#" class="link post_link" :to="post.slug" > 
                    <li class="link_wrapper">  
                        <v-icon class="plus_link" :class="{ color2 : hover == 'par-' + ix}">fa-plus-circle</v-icon>                    
                        <span href="#" class="link text_link">{{ post.title }}</span>
                    </li>
                  </n-link>
              </b-row>
          </b-col>

          <b-col sm="12" md="6" class="col_link">
              <b-row v-for="(post, ix) in postsImpares" v-bind:key="`'row-par-' + ${ix}`" class="area_link" @mouseover="hover = 'par-' + ix"
    @mouseleave="hover = null">
                  <n-link href="#" class="link post_link" :to="`/blog/${post.slug}`">
                    <li class="link_wrapper">  
                        <v-icon class="plus_link" :class="{ color2 : hover == 'par-' + ix}">fa-plus-circle</v-icon>                    
                        <span href="#" class="link text_link">{{ post.title }}</span>
                    </li>
                  </n-link>
              </b-row>
          </b-col>
          
        </b-row>

    </div>
  </div>
</template>

<script>
//import getData from '@/api/posts.js';

export default {  
  layout: 'home',

  data: () => ({
    entity: 'post',
    regs: [],
    hover: null,
    loading: true,
    rowsPerPageItems: [10,25,100],
    pagination: {
      rowsPerPage: 50,
      descending: false,
      page: 1,
      totalItems: null,
      sortBy: "created_at",   /* cambiar a created_at */
    },
    search: '',
  }),
  
  mounted () {
    this.fetchData();
  },

  computed: {
    postsPares: function() {
      return this.regs.filter((p, ix) => {
        return ix % 2 == 0;
      })
    },

    postsImpares: function() {
      return this.regs.filter((p, ix) => {
        return ix % 2 != 0;
      })
    }

  },

  methods: {
      fetchData () {
         return new Promise((resolve, reject) => {
                const { sortBy, descending, page, rowsPerPage } = this.pagination;
                let search = this.search.trim().toLowerCase();

                this.$axios.get('http://elgrove.co/api/v1/posts' + 
                  `?pageSize=${rowsPerPage}` +
                  `&page=${page}` +
                  `&orderBy[${sortBy}]=` + (descending ? 'ASC' : 'DESC') +
                  `&content[contains]=${search}` , 
                { 
                  headers: {
                    'Authorization': `Bearer ${this.$store.state.auth.authUser.accessToken}`
                  }
                })
                .then(response => {
                    let items = response.data.data;
                    const totalItems = response.data.paginator.total;
                    
                    if (search) {
                        items = items.filter(item => {
                            return Object.values(item)
                                .join(",")
                                .toLowerCase()
                                .includes(search);
                        });
                    }
                    
                    this.regs = items;
                    this.pagination.totalItems = totalItems;
                    this.loading = false;
                    resolve();
                }).catch((error) => {
                    //const response = error.response;
                    console.log(error);
                    reject('Error');
                });
         });   
      },       
  }    
}
</script>


<style scoped>
:root {
    --color1: #D0A28C ;
    --color2: #ccc;
}

.col_link {
  padding-left: 5px;
  padding-right: 5px; 
}

.area_link {
  background-color: #27292B; 
  margin-bottom: 10px; 
  margin-left: 0.5vw; 
  margin-right: 0.5vw;
  height: 80px;
}

.area_link:hover {
  background-color: #4E8CFF !important;
}

.color2 {
  color: #ccc !important;
}

.post_link {
  width: 100% !important;
}

.link_wrapper {
  text-align: left; 
  list-style: none; 
  margin: 1.5rem;
}

.plus_link {
  color: #D0A28C; /* var(--color1); */
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