<template>
  <div>
    <v-btn
      variant="outlined" color="grey"
      @click="showListPostCreated()"
    >
    {{ createPost ? 'Novo' : 'Voltar' }}
    </v-btn>
    <list-post v-if="createPost" />
    <post-create v-else />
  </div>
</template>

<script>
import listPost from './listPost.vue'
import PostCreate from './postCreate.vue'

  export default {
    components: { listPost, PostCreate },
    data(){
      return{
        createPost: this.$route.query.create
      }
    },
    computed:{
      showListPosts(){
        return this.createPost
      }
    },
    methods:{
      showListPostCreated(){
       this.createPost = !this.createPost
       this.$router.push(`/admin/?create=${this.createPost}`)
      }
    },
    mounted(){
      this.createPost = this.$route.query.create
    }
  }
</script>

<style lang="scss" scoped>

</style>
