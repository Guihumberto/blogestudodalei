<template>
  <div>
    <div>
      <div>
        <h1>{{ post.title }}</h1>
        <h2 class="text-grey"> {{ post.subtitle }} </h2>
        <small>Publicado em: {{ post.dateCreate }}</small>
        <small> (Atualizado em: {{ post.update }})</small>
      </div>
      <div class="mt-6 author">
        <PostFor :author="post.author" />
      </div>
      <div class="my-6 text-blog">
        <div v-html="post.text" />
      </div>
    </div>
    <inc-references class="my-10" :post="post" />
    <inc-post :post="post" />

  </div>
</template>

<script>
  import PostFor from '../blog/OnePost/PostFor.vue';
  import IncReferences from './incReferences.vue';
  import IncPost from './incPost.vue';


  export default {
    data(){
      return{
        postStore: null
      }
    },
    props:{
      post: Object,
    },
    components:{
      PostFor,
      IncReferences,
      IncPost
    },
  }
</script>

<style lang="scss" scoped>
h1{
  margin: 2rem 0 0 0;
}
</style>
