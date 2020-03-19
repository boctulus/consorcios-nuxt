<template>
    <div>
        <ul>
           <li v-for="(item, ix) in items" v-bind:key="ix">
               {{ item.title }}
           </li> 
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

let url = 'https://jsonplaceholder.typicode.com/posts'

export default {
    name: 'jsonplaceholder',
    layout: 'home',

    // recibe Context
    async asyncData (context) {
        console.log(context);

        const { data } = await axios.get(`${url}`)
        return { items: data }
    }
}
</script>

<style scoped>
    
</style>