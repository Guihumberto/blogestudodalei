<template>
  <div class="wrapperRevisao">
    <div class="contentRevisao">
      <v-btn flat="" to="/admin" icon="mdi-arrow-left"></v-btn>
      <h1>{{ $route.query.publish ? 'Revisão de Post Publicado' : 'Revisão de post não Publicado'}}</h1>
      <v-btn @click="edit = !edit">Editar</v-btn>
      <div>
        <rev-post v-if="!edit" :post="post" />
        <post-edit v-else :postEdit="post" />
      </div>
    </div>
  </div>
</template>

<script>
import { useListPostsStore } from '@/store/ListPostsStore'
const listStore = useListPostsStore()

import revPost from '@/components/Admin/revPost.vue'
import postEdit from '@/components/Admin/postEdit.vue'
  export default {
    components: { revPost, postEdit },
    data(){
      return{
        edit: false,
        idPost: this.$route.params.id
      }
    },
    computed:{
      post(){
        return listStore.readOnePost
      }
    },
    created(){
      listStore.loadOnePost(this.idPost)
      this.edit = this.$route.query.edit
    }
  }
</script>

<style lang="scss" scoped>
.wrapperRevisao{
  min-height: 70vh;
  margin-top: 10rem;
  display: flex;
  justify-content: baseline;
  flex-direction: column;
  align-items: center;
  color: #333;
}
.wrapperRevisao .contentRevisao{
  width: 1024px;
  min-height: 50vh;
}
</style>
