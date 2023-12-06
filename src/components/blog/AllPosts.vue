<template>
  <load v-if="loadPosts" />
  <div  v-else class="wrapperAllPosts">
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
              <h5 v-for="dis, d in nameDisciplina(item.disciplina)" :key="d"> {{ dis.name }}</h5>
            </div>
            <div>
              <v-chip class="mr-1" v-for="tag, t in item.tags" :key="t" density="compact">{{ tag }}</v-chip>
            </div>
            <small class="mt-5">por {{nameAuthors(item.author)}}, publicado em: {{ formatteDate(item.dateCreate)}}</small>
          </div>
          <div class="text">
            <p v-html="item.text"></p>
          </div>
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
    <!-- <FilterVue class="filter"/> -->
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
import load from '@/components/elementos/load.vue'
import { useGeneralStore } from '@/store/GeneralStore'
const generalStore = useGeneralStore()

import{ useListPostsStore } from '@/store/ListPostsStore'
const listStore = useListPostsStore()

import moment from 'moment'
import 'moment/locale/pt-br'

import FilterVue from './Filter/FilterAll.vue'
  export default {
    components:{
      FilterVue,
      load
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
        return listStore.readListPosts.filter( x => x.publish)
      },
      listPosts(){
        let list = this.listAllPosts

        return list.slice(0, this.qtdPosts)
      },
      loadPosts(){
        return listStore.readLoadAllPosts
      },
      discisplinas(){
        return listStore.readListDisciplinas
      },
      authors(){
        return listStore.readAuthors
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
      },
      nameDisciplina(listID){
        let discisplinas = []

        listID.forEach(id => {
          this.discisplinas.forEach(dis => {
            if(id == dis.id){
              discisplinas.push(dis)
            }
          })
        });
        return discisplinas
      },
      nameAuthors(id){
        let author = this.authors.find(x => x.id == id)
        return author.firstName
      },
      formatteDate(item){
        return moment(item).locale('pt-br').format('DD/MM/YYYY')
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
  width: 100%;
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: slideTop 1s ease forwards;
}
.post{
  padding: max(1vh, 1rem) 0;
  display: flex;
  justify-content: left;
  justify-items: center;
  border-radius: 16px;
  transition: .6s ease;
  width: 100%;
}
.post > *{
  width: 100%;
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
.filter{
  opacity: 0;
  animation: slideTop 1s ease forwards;
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
