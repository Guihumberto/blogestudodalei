<template>
  <v-app>
    <default-view  />
  </v-app>
</template>
<script setup>
 import DefaultView from './View.vue'
</script>

<style>
  :root{
    --bg-color: rgb(20, 20, 20);
    --card-color: rgb(23, 23, 23);
    --primary-color: #f01468;
  }
  body{
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  box-sizing: border-box;
  }
</style>
