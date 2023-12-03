import { defineStore } from "pinia";
import db from '@/firebase/init'
import { collection, addDoc, doc, getDocs, query, where, deleteDoc, getDoc, updateDoc } from 'firebase/firestore'

import { useListPostsStore } from '@/store/ListPostsStore'
const listStore = useListPostsStore()

export const useReferenceStore = defineStore("reference", {
  state: () => ({
    references: [],
    load:  true,
    idRef: ''
  }),
  getters: {
    readReferences() {
      return this.references
    },
    readLoad() {
      return this.load
    },
  },
  actions:{
    async addReference(item, post, idPost){
      try {
        const colRef = collection(db, 'referencias')
        const docRef = await addDoc(colRef, item)
        this.idRef = docRef.id
        console.log('redId', docRef.id);
      } catch (error) {
        console.log(error);
      } finally {
        this.load = false
        post.legislacao.push(this.idRef)
        listStore.updatePost(post, idPost)
      }

    },
    deleteREference(){

    }
  }
});
