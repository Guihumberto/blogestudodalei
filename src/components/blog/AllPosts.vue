<template>
  <div class="wrapperAllPosts">
    <div class="posts">
      <div class="post" v-for="i in 5" :key="i" @click="onePostIn(i)">
        <div class="imgPost">
          Imagem
        </div>
        <div>
          <div class="mb-2">
            <h2>Alteração do art. 18 do CTN </h2>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h4>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Odio molestiae voluptatem fugiat sequi temporibus dignissimos sapiente voluptas ad eligendi, q
             uidem rerum. Accusantium nobis sequi laudantium magni ea delectus debitis nulla?
          </p>
          <small class="mt-5">publicado em: 12 de janeiro de 2023</small>
          <div class="line_divider"></div>
        </div>
      </div>
      <v-btn class="mt-10" color="black" width="50%">VEja Mais</v-btn>
    </div>
    <FilterVue class="filter"/>
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

import FilterVue from './Filter/FilterAll.vue'
  export default {
    components:{
      FilterVue,
    },
    data(){
      return{
        dialog: false,
      }
    },
    computed:{
      dialogFilter(){
        return generalStore.readFilter
      }
    },
    methods:{
      onePostIn(namePost){
        generalStore.changePosts(false)
        this.$router.push(`/post/${namePost}`)
      },
      disableFilter(){
        generalStore.changeFilter(false)
      }
    }
  }
</script>

<style scoped>
.wrapperAllPosts {
  display: flex;
  justify-content: center;
  align-items: first baseline;
  width: 100vw;
  margin: .5rem 0;
}
.posts{
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.post{
  width: 80%;
  padding: 2rem 1rem;
  display: flex;
  justify-content: left;
  justify-items: center;
  border-radius: 16px;
  transition: .6s ease;
}
.post:hover{
  background: rgb(230, 234, 238);
  cursor: pointer;
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

@media (max-width: 1024px){
  .posts{
    max-width: 1024px;
  }
  .post{
    padding: 1rem;
    width: 95%;
  }
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
