<template>
  <div>
    <h2><v-icon>mdi-arrow-right</v-icon> Add Referências</h2>
    <dialog-ref :post="post" />
    <v-list class="pa-0 mt-5">
      <v-list-item class="border-b" v-for="item, i in post.legislacao" :key="i" link>
        <template v-slot:prepend>
          <v-avatar>
            <v-icon>mdi-hammer</v-icon>
          </v-avatar>
        </template>
        <v-list-item-title class="mr-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. ssumenda aut ipsa! Vitae ratione voluptates officia unde, dolores atque nulla quisquam pariatur!
        </v-list-item-title>
        <v-lis-item-subtitle>
          lorem
        </v-lis-item-subtitle>
        <template v-slot:append>
          <v-btn flat class="text-red" icon="mdi-delete"></v-btn>
        </template>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import dialogRef from './dialogRef.vue'
  export default {
  components: { dialogRef },
    data(){
      return{

      }
    },
    props:{
      post: Object
    },
    computed:{
      listRef(){
        return [0]
      }
    }
  }
</script>

<style lang="scss" scoped>
h2{
  font-size: 2rem;
}
</style>
