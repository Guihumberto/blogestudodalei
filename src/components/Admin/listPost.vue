<template>
  <div>
    <h1 class="my-10">Lista de Posts</h1>
    <div v-if="listPostsAll">
      <div>
        <h2 class="text-grey">Revisão</h2>
        <v-list class="border my-5 pa-0" >
          <v-list-item
            link
            v-for="item, i in listPostsNoPusblish"
            :key="i"
            @click="goTo(item.id)"
          >
            {{ item.title }} - {{ item.id }}
            <template v-slot:append>
            <v-btn
              color="grey-lighten-1"
              icon="mdi-delete"
              variant="text"
            ></v-btn>
            <v-btn
              color="grey-lighten-1"
              icon="mdi-file-edit"
              variant="text"
            ></v-btn>
            <v-btn
              color="grey-lighten-1"
              icon="mdi-publish"
              variant="text"
            ></v-btn>
          </template>
          </v-list-item>
        </v-list>
      </div>
      <div>
        <h2 class="text-grey">Publicados</h2>
        <v-list class="border my-5 pa-0" >
          <v-list-item
            @click="goTo(item.id)"
            link
            v-for="item, i in listPostsPusblish"
            :key="i"
          >
            {{ item.title}} - {{ item.id }}
            <template v-slot:append>
            <v-btn
              color="grey-lighten-1"
              icon="mdi-file-cancel"
              variant="text"
            ></v-btn>
            <v-btn
              color="grey-lighten-1"
              icon="mdi-file-edit"
              variant="text"
            ></v-btn>
            <v-btn
              color="grey-lighten-1"
              icon="mdi-cancel"
              variant="text"
            ></v-btn>
          </template>
          </v-list-item>
        </v-list>
      </div>
    </div>
    <v-alert icon="mdi-cancel" v-else>
      <p>Você ainda nao possui posts criados</p>
    </v-alert>
  </div>
</template>

<script>
import { useListPostsStore } from '@/store/ListPostsStore'
const listPostsStore = useListPostsStore()

  export default {
    computed:{
      listPostsNoPusblish(){
        return listPostsStore.readListPosts.filter(x => !x.publish)
      },
      listPostsPusblish(){
        return listPostsStore.readListPosts.filter(x => x.publish)
      },
      listPostsAll(){
        return listPostsStore.readListPosts.lenght
        ? false
        : true
      }
    },
    methods:{
      goTo(id){
        this.$router.push(`/admin/post/${id}`)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
