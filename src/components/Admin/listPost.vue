<template>
  <div>
    <h3 class="my-5">Lista de Posts</h3>
    <load v-if="loadPosts" />
    <div v-else>
      <div v-if="listPostsAll.length">
        <div>
          <h3 class="text-grey">Revisão</h3>
          <v-list
            class="border my-5 pa-0 listWrapper"
            item-props
            v-if="listPostsNoPusblish.length"
          >
            <v-list-item
              link
              v-for="item, i in listPostsNoPusblish"
              :key="i"
              @click="goTo(item.idFb)"
              :class="item.id == deleteId ? 'bg-red-lighten-5' : ''"
              class="listPosts"
            >

              <div v-if="item.id != deleteId">
                {{ item.title }}
              </div>
              <div v-else class="text-red">
                Confirma a operação?
                <v-btn variant="outlined" size="small" color="red" class="ml-5" @click.stop="deletePost(item)">Apagar</v-btn>
                <v-btn variant="tonal" size="small" color="grey" class="ml-2" @click.stop="deleteId = null">Cancelar</v-btn>
              </div>
              <template v-if="item.id != deleteId" v-slot:append>
                <v-tooltip text="Excluir">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      color="grey-lighten-1"
                      icon="mdi-delete"
                      class="btn-list"
                      variant="text"
                      v-bind="props"
                      @click.stop="deleteSelectId(item)"
                    ></v-btn>
                  </template>
                </v-tooltip>
                <v-tooltip text="Editar">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      color="grey-lighten-1"
                      icon="mdi-file-edit"
                      class="btn-list"
                      variant="text"
                      v-bind="props"
                      @click.stop="editPost(item)"
                    ></v-btn>
                  </template>
                </v-tooltip>
                <v-tooltip text="Publicar">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      color="grey-lighten-1"
                      icon="mdi-publish"
                      class="btn-list"
                      variant="text"
                      v-bind="props"
                      @click.stop="publicarPost(item)"
                    ></v-btn>
                  </template>
                </v-tooltip>
              </template>
            </v-list-item>
          </v-list>
          <v-alert icon="mdi-cancel" v-else>
            <p>Você ainda não possui posts para revisão</p>
          </v-alert>
        </div>
        <div>
          <h3 class="text-grey">Publicados</h3>
          <v-list class="border my-5 pa-0" v-if="listPostsPusblish.length">
            <v-list-item
              @click="goTo(item.idFb)"
              link
              v-for="item, i in listPostsPusblish"
              :key="i"
            >
              {{ item.title}} - {{ item.id }}
              <template v-slot:append>
                  <v-tooltip text="Editar">
                    <template v-slot:activator="{ props }">
                      <v-btn
                        color="grey-lighten-1"
                        icon="mdi-file-edit"
                        class="btn-list"
                        variant="text"
                        v-bind="props"
                        @click.stop="editPost(item, true)"
                      ></v-btn>
                    </template>
                  </v-tooltip>
                  <v-tooltip text="Desativar Pubblicação">
                    <template v-slot:activator="{ props }">
                      <v-btn
                        color="grey-lighten-1"
                        icon="mdi-cancel"
                        class="btn-list"
                        variant="text"
                        v-bind="props"
                        @click.stop="publicarPost(item)"
                      ></v-btn>
                    </template>
                  </v-tooltip>
              </template>
            </v-list-item>
          </v-list>
          <v-alert icon="mdi-cancel" v-else>
            <p>Você ainda não possui posts publicados</p>
          </v-alert>
        </div>
      </div>
      <v-alert icon="mdi-cancel" v-else>
        <p>Você ainda não possui posts criados</p>
      </v-alert>
    </div>
  </div>
</template>

<script>
import { useListPostsStore } from '@/store/ListPostsStore'
import load from '../elementos/load.vue'
const listPostsStore = useListPostsStore()

  export default {
  components: { load },
    computed:{
      listPostsNoPusblish(){
        return listPostsStore.readListPosts.filter(x => !x.publish)
      },
      listPostsPusblish(){
        return listPostsStore.readListPosts.filter(x => x.publish)
      },
      listPostsAll(){
        return listPostsStore.readListPosts
      },
      loadPosts(){
        return listPostsStore.readLoadAllPosts
      }
    },
    data(){
      return{
        deleteId: null
      }
    },
    methods:{
      goTo(id){
        this.$router.push(`/admin/post/${id}`)
      },
      publicarPost(post){
        listPostsStore.publicarPost(post)
      },
      editPost(post, publish){
        if(publish){
          this.$router.push(`/admin/post/${post.id}?edit=true&publish=true`)
        } else {
          this.$router.push(`/admin/post/${post.id}?edit=true&pusblish=false`)
        }
      },
      deleteSelectId(post){
        this.deleteId = post.id
      },
      deletePost(post){
        listPostsStore.deletePost(post.idFb)
      }
    }
  }
</script>

<style lang="scss" scoped>
.btn-list:hover{
  background: rgb(232, 229, 238);
}
.listWrapper, .listPosts{
  transition: 1s ease;
}
</style>
