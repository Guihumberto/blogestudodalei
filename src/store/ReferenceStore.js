import { defineStore } from "pinia";
import db from '@/firebase/init'
import { collection, addDoc, doc, getDocs, query, where, deleteDoc, getDoc, updateDoc } from 'firebase/firestore'

import { useListPostsStore } from '@/store/ListPostsStore'
const listStore = useListPostsStore()

export const useReferenceStore = defineStore("reference", {
  state: () => ({
    listReferences: [],
    load:  true,
    idRef: ''
  }),
  getters: {
    readReferences() {
      return this.listReferences
    },
    readLoad() {
      return this.load
    },
  },
  actions:{
    async getAllReferences(){
      this.listReferences = []

      try {
        const q =  query(collection(db, 'referencias'))
        const querySnap = await getDocs(q)

        querySnap.forEach((doc) => {
          let referencia = doc.data()
          referencia.idFb = doc.id
          console.log(referencia);
          this.listReferences.push(referencia)
        })
      } catch (error) {
        console.log(error);
      }finally{
        this.load = false
      }
    },
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
    async deleteReference(idFb){
      const docRef = doc(db, 'referencias', idFb)
      await deleteDoc(docRef)
    }
  }
});
