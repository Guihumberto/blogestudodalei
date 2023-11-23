<template>
  <div class="contApp">
    <div class="breadcrumbs">
      <v-btn
        flat
        class="pa-0"
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

<style>
.contApp{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: min(95%, 1000px);
  margin-inline: auto;
}
.flow > * + * {
  margin-top: 1em;
}
h1, h2, h3, h4, h5, h6 {
  font-family: var(--ff-accent);
  line-height: 1.1;
  text-wrap: balance;
}
h1{
  font-size: var(--fs-700);
  margin-top: 2em;
}
h2{
  font-size: var(--fs-600);
  --flow-space: 1.5em;
}
h3{
  font-size: var(--fs-400);
}
.breadcrumbs{
  width: 100%;
  padding-bottom: 16px;
  margin-top: 6.5rem;
  transition: .6s ease;
}
</style>
