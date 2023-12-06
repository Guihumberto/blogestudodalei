<template>
  <div class="container">
    <a @click="goTo('/')"> > Início</a> > Post
    <one-post class="mt-10" :post="post" />
  </div>
</template>

<script>
import OnePost from '@/components/blog/OnePost/Post.vue'
import router from '@/router'
import { useListPostsStore } from '@/store/ListPostsStore'
const listStore = useListPostsStore()

export default{
  data(){
    return{
      idPost: this.$route.params
    }
  },
  components:{
    OnePost
  },
  computed:{
    post(){
      return listStore.readOnePost
    }
  },
  methods:{
    goTo(url){
      router.push(url)
    }
  },
  created(){
    listStore.loadOnePost(this.idPost.id)
  }
}


</script>

<style lang="scss" scoped>
.container{
  width: min(100%, 1000px);
  margin-inline: auto;
  margin-bottom: 5rem;
}
</style>
