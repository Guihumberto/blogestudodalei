<template>
  <div class="contApp">
    <div class="breadcrumbs mt-16 pt-16">
      <V-btn flat @click="generalStore.changePosts(true)"> <v-icon class="mr-1">mdi-home</v-icon>Home</V-btn>
    </div>
    <all-posts v-if="generalStore.readPosts" />
    <one-post v-else />
  </div>
</template>

<script setup>
  import { useGeneralStore } from '@/store/GeneralStore'
  const generalStore = useGeneralStore()

  import AllPosts from '@/components/blog/AllPosts.vue';
  import OnePost from '@/components/blog/OnePost/Post.vue'



</script>

<style scoped>
.contApp{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.breadcrumbs{
  width: 1320px;
  padding-bottom: 16px;
}
@media (max-width: 1558px){
  .breadcrumbs{
    width: 100%;
    padding-bottom: 0;
  }
}
</style>
