<template>
  <div class="wrapperAllPosts">
    <div class="posts">
      <div class="post" v-for="item, i in listPosts" :key="i" @click="onePostIn(i)">
        <!-- <div class="imgPost">
          Imagem
        </div> -->
        <div>
          <div class="mb-2">
            <div class="d-flex justify-space-between titles">
              <div class="titlesubtitle">
                <h2>{{ item.title }} </h2>
                <h4 class="text-grey">
                  {{ item.subtitle }}
                </h4>
              </div>
              <div class="boxpin"></div>
            </div>
            <div class="bg-grey-lighten-3 pa-2">
              <h5>Direito Tributário</h5>
            </div>
          </div>
          <div class="text">
            <p> {{item.text }}</p>
          </div>
          <small class="mt-5">publicado em: {{ item.dateCreate}}</small>
          <div class="line_divider"></div>
        </div>
      </div>
      <!-- btn include more posts -->
      <v-btn
        class="mt-10" color="black" width="50%"
        @click="includeMorePostsinList()"
        v-if="qtdPosts <= listAllPosts.length"
      >Veja Mais</v-btn>
    </div>
    <!-- sideRigthBar -->
    <FilterVue class="filter"/>
    <!-- dialog -->
    <template>
      <div class="text-center">
        <v-btn
          color="primary"
        >
          Open Dialog

          <v-dialog
            v-model="dialogFilter"
            activator="parent"
            width="auto"
            class="dialogFIlter"
          >
            <v-card>
                <FilterVue/>
              <v-card-actions>
                <v-btn color="primary" block @click="disableFilter()">Close Dialog</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-btn>
      </div>
    </template>
  </div>
</template>

<script>
import { useGeneralStore } from '@/store/GeneralStore'
const generalStore = useGeneralStore()

import{ useListPostsStore } from '@/store/ListPostsStore'
const listStore = useListPostsStore()

import FilterVue from './Filter/FilterAll.vue'
  export default {
    components:{
      FilterVue,
    },
    data(){
      return{
        dialog: false,
        qtdPosts: 5
      }
    },
    computed:{
      dialogFilter(){
        return generalStore.readFilter
      },
      listAllPosts(){
        return listStore.readListPosts
      },
      listPosts(){
        let list = this.listAllPosts

        return list.slice(0, this.qtdPosts)
      }
    },
    methods:{
      onePostIn(namePost){
        generalStore.changePosts(false)
        this.$router.push(`/post/${namePost}`)
      },
      disableFilter(){
        generalStore.changeFilter(false)
      },
      includeMorePostsinList(){
        this.qtdPosts += 5
        this.$router.push(`?qtdpost=${this.qtdPosts}`)
      }
    },
    created(){
      this.qtdPosts = this.$route.query.qtdpost ? this.$route.query.qtdpost : 5
    }
  }
</script>

<style scoped>
h2{
  font-size: var(--step-2);
}
h4{
  font-size: var(--step-1);
}

.wrapperAllPosts {
  display: flex;
  justify-content: center;
  align-items: first baseline;
  width: 100%;
  margin: .5rem 0;
}
.posts{
  max-width: 80%;
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.post{
  padding: max(1vh, 1rem) 0;
  display: flex;
  justify-content: left;
  justify-items: center;
  border-radius: 16px;
  transition: .6s ease;
}
.post:hover{
  cursor: pointer;
}
.titles{
  position: relative;
}
.titlesubtitle{
  z-index: 1;
}
.boxpin{
  position: absolute;
  right: 0;
  width: 2rem;
  height: 100%;
  background: rgb(212,219,221);
background: linear-gradient(90deg, rgba(212,219,221,1) 0%, rgba(203,242,250,1) 30%, rgba(152,220,230,1) 60%, rgba(107,224,247,1) 68%, rgba(20,203,240,1) 100%);transition: .5s ease;
  opacity: 0;
}
.post:hover .boxpin{
  opacity: 1;
  width: 80%;
}
.imgPost{
  width: 15rem;
  height: 9rem;
  margin-right: 1rem;
  border: 1px solid grey;
  padding: 1rem;
  border-radius: 16px;
}
.line_divider{
  width: 100%;
  border-bottom: 1px solid rgb(202, 192, 192);
  margin-top: 1rem;
}
.dialogFIlter{
  display: none;
}
.text p {
  max-height: 3em;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}
@media (max-width: 500px){
  .imgPost{
    display: none;
  }
}
@media (max-width: 924px){
  .filter{
    display: none;
  }.dialogFIlter{
    display: flex;
  }
}
</style>
