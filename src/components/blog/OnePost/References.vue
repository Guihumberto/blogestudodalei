<template>
    <div class="references">
      <div>
        <h3  class="title">Tags</h3>
        <div>
          <v-chip
            class="mr-2"
            v-for="item, i in post.tags" :key="i">{{ item }}</v-chip>
        </div>
      </div>
      <div>
        <h3 class="title">Referências</h3>
        <div>
          <div v-for="item, i in listRef" :key="i" class="border-b pb-5 pt-3">
            <p class="font-weight-medium">{{ item.resumo }}</p>
            <p>{{ item.text }}</p>
            <p class="font-italic">{{ item.refs }}</p>
          </div>
        </div>
      </div>
      <!-- <div>
        <h3  class="title">Doutrina</h3>
        <div>
          <p v-for="item, i in 5" :key="item">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div>
        <h3  class="title">Jurisprudência</h3>
        <div>
          <p v-for="item, i in 5" :key="item">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div> -->
    </div>
</template>

<script>
import { useListPostsStore } from '@/store/ListPostsStore'
const listStore = useListPostsStore()

import { useReferenceStore } from '@/store/ReferenceStore'
const referenceStore = useReferenceStore()

  export default {
    computed:{
      post(){
        return listStore.readOnePost
      },
      listRef(){
        let list = referenceStore.readReferences
        let listPostReferencia = []

        list.forEach(listref => {
          this.post.legislacao.forEach( item => {
            if(listref.idFb == item){
              listPostReferencia.push(listref)
            }
          })
        });
        return listPostReferencia
      }
    },
  }
</script>

<style lang="scss" scoped>
.references{
  border: 2px solid grey;
  margin: 2rem 0;
  padding: 1rem ;
}
.references div .title{
  border-bottom: .5px solid grey;
  margin: 1rem 0;
}

</style>
