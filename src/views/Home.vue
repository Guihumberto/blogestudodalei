<template>
  <div class="contApp">
    <div class="breadcrumbs">
      <v-btn
        flat
        @click="goHome()"
      >
        <v-icon class="mr-1">mdi-home</v-icon>Home
      </v-btn>
    </div>
    <all-posts v-if="generalStore.readPosts" />
    <one-post v-else />
  </div>
</template>

<script setup>
  import router from '@/router';
  import { useGeneralStore } from '@/store/GeneralStore'
  const generalStore = useGeneralStore()

  import AllPosts from '@/components/blog/AllPosts.vue';
  import OnePost from '@/components/blog/OnePost/Post.vue'

  function goHome() {
    router.push('/')
    generalStore.changePosts(true)
  }



</script>

<style scoped>
.contApp{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.breadcrumbs{
  width: 1110px;
  padding-bottom: 16px;
  margin-top: 6.5rem;
  transition: .6s ease;
}
@media (max-width: 1024px){
  .breadcrumbs{
    width: 100%;
  }
}
@media (max-width: 924px){
  .breadcrumbs{
    margin-top: 4.5rem;
  }
}
</style>
