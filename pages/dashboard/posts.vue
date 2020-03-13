<template>
  <div class="container" style="min-height: 100vh;">
      <h1 class="mb-5">Posts</h1>

      <vue-editor v-model="content" class="editor"></vue-editor>

  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {  
  layout: 'home',
  layout: 'dashboard',
 
   data() {
    return {
      content: "<h1>Some initial content</h1>"
    };
  },
  
  components: {
    VueEditor
  }
}
</script>


<style scoped>
.editor {
  background-color: #fff; 
  color: #000;
}
</style>