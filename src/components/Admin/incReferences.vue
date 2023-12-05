<template>
  <div>
    <h2><v-icon>mdi-arrow-right</v-icon> Add Referências</h2>
    <dialog-ref :post="post" />
    <v-list class="pa-0 mt-5">
      <v-list-item class="border-b" v-for="item, i in listRef" :key="i" link>
        <!-- tela de delete -->
        <div class="d-flex justify-space-between align-center py-3 bg-red-lighten-4 px-2" v-if="idDelete == item.idFb">
          <small>Deseja Apagar essa referência?</small>
          <div>
            <v-btn @click.stop="deleteRef(item.idFb)" class="mx-2" color="red">Apagar</v-btn>
            <v-btn variant="outlined" color="grey" @click.stop="idDelete = null">Cancelar</v-btn>
          </div>
        </div>
        <template v-slot:prepend v-if="idDelete != item.idFb">
          <v-avatar>
            {{ item.type }}
          </v-avatar>
        </template>
        <v-list-item-title class="mr-10" v-if="idDelete != item.idFb">
         {{ item.resumo }}
        </v-list-item-title>
        <v-list-item-subtitle v-if="idDelete != item.idFb">
          {{ item.text }} -  {{ item.refs }}
        </v-list-item-subtitle>
        <template v-slot:append v-if="idDelete != item.idFb">
          <v-btn flat class="text-red" icon="mdi-delete" @click.stop="idDelete = item.idFb"></v-btn>
        </template>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
 import { useReferenceStore } from '@/store/ReferenceStore'
  const referenceStore = useReferenceStore()

import dialogRef from './dialogRef.vue'
  export default {
  components: { dialogRef },
    data(){
      return{
        idDelete: null
      }
    },
    props:{
      post: Object
    },
    computed:{
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
    methods:{
      deleteRef(idFb){
        if(this.idDelete == idFb)
          referenceStore.deleteReference(idFb)
          this.post.legislacao.splice(idFb, 1)
          this.idDelete = null
        }
    }
  }
</script>

<style lang="scss" scoped>
h2{
  font-size: 2rem;
}
</style>
