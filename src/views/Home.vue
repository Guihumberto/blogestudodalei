<template>
  <div class="contApp">
    <div class="breadcrumbs">
      <a
        class="pa-0"
        @click="goHome()"
      >
        Início
      </a>
    </div>
    <all-posts />

  </div>
</template>

<script setup>
  import router from '@/router';
  import AllPosts from '@/components/blog/AllPosts.vue';


  function goHome() {
    router.push('/')
  }
</script>

<style>
.contApp{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: min(100%, 1000px);
  margin-inline: auto;
  margin-bottom: 5rem;
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
  transition: .6s ease;
}
.breadcrumbs a{
  transition: .5s ease;
}
.breadcrumbs a::before{
  content: '>';
}
.breadcrumbs a:hover{
  font-weight: 500;
}
</style>
