<template>
  <div>
    <vue-tags-input
      v-model="tag"
      :tags="tags"
      @tags-changed="newTags => tags = newTags"
    />
  </div>
</template>

<script>
// http://www.vue-tags-input.com/#/examples/nuxt
import VueTagsInput from '@johmun/vue-tags-input';

export default {
  components: {
    VueTagsInput,
  },
  data() {
    return {
      tag: '',
      tags: [],
    };
  },

  watch: {
    tags: function(arr) {
      let keywords = [];
      
      arr.forEach(e => {
        if (e.tiClasses[0] == 'ti-valid')
          keywords.push(e.text);
      });

      console.log(keywords);
    }
  },

  mounted() {
    const keywords = ["peras", "manzanas", "uvas"];

    keywords.forEach(keyword => {
      this.tags.push({"text": keyword,"tiClasses": ["ti-valid"]})
    });

  }


};
</script>