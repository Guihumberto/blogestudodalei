<template>
  <div class="wrapperRevisao">
    <div class="contentRevisao">
      <v-btn flat="" to="/admin?create=false" icon="mdi-arrow-left"></v-btn>
      <v-btn @click="edit = !edit">Editar</v-btn>
      <load v-if="loadPost" />
      <div v-else>
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
import Load from '@/components/elementos/load.vue'
  export default {
    components: { revPost, postEdit, Load },
    data(){
      return{
        edit: false,
        idPost: this.$route.params.id
      }
    },
    computed:{
      post(){
        return listStore.readOnePost
      },
      loadPost(){
        return listStore.readLoadOnePost
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
