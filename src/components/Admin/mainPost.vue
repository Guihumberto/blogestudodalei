<template>
  <div>
    <v-btn
      variant="outlined" color="grey"
      @click="showListPostCreated()"
    >
    {{ showListPosts ? 'Novo' : 'Lista' }}
    </v-btn>
    <list-post v-if="showListPosts" />
    <post-create v-else />
  </div>
</template>

<script>
import listPost from './listPost.vue'
import PostCreate from './postCreate.vue'

import { useListPostsStore } from '@/store/ListPostsStore'
const listPostsStore = useListPostsStore()

  export default {
    components: { listPost, PostCreate },
    data(){
      return{

      }
    },
    computed:{
      showListPosts(){
        return listPostsStore.readShowListPosts
      }
    },
    methods:{
      showListPostCreated(){
        listPostsStore.showCreatePost()
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
