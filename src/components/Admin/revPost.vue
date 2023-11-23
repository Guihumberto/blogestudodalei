<template>
  <div class="mt-10">
    <div>
      <div class="title-text-blog">
        <h1>{{ getPost[0].title }}</h1>
        <h2 class="text-grey"> {{ getPost[0].subtitle }} </h2>
        <small>Publicado em: {{ getPost[0].dateCreate }}</small>
        <small> (Atualizado em: {{ getPost[0].update }})</small>
      </div>
      <div class="mt-6 author">
        <PostFor :author="getPost[0].author" />
      </div>
      <div class="my-6 text-blog">
        <div v-html="getPost[0].text" />
      </div>
    </div>
    <inc-references class="my-10" />
    <inc-post />

  </div>
</template>

<script>
  import PostFor from '../blog/OnePost/PostFor.vue';
  import { useListPostsStore } from '@/store/ListPostsStore'
import IncReferences from './incReferences.vue';
import IncPost from './incPost.vue';
  const listStore = useListPostsStore()

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
    computed:{
      getPost(){
        return listStore.readOnePost
      }
    },
    created(){
      listStore.loadOnePost(this.$route.params.id )
    }
  }
</script>

<style lang="scss" scoped>

</style>
