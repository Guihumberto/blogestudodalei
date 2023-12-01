<template>
  <v-alert class="my-5" :icon="alert.icon">
    <p> {{alert.title}} </p>
  </v-alert>
</template>

<script>
  export default {
    props:{
      alert: {
        default:{
          icon: 'mdi-cancel',
          title: 'Você ainda não possui posts para revisão'
        },
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
