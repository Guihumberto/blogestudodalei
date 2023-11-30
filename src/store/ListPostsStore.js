import { defineStore } from "pinia";
import db from '@/firebase/init'
import { collection, addDoc, doc, getDocs, query, where, deleteDoc } from 'firebase/firestore'

export const useListPostsStore = defineStore("listPosts", {
  state: () => ({
    showListPosts: true,
    listPosts: [],
    post: {
      id: null,
      title: '',
      subtitle: '',
      text: '',
      author: '',
      disciplina: [],
      legislacao: [],
      doutrina: [],
      jurisprudencia: [],
      tags: [],
      dateCreate: '',
      update: '',
      publish: false
    },
    loadPosts: true
  }),
  getters: {
    readListPosts() {
      return this.listPosts
    },
    readShowListPosts(){
      return this.showListPosts
    },
    readOnePost(){
      return this.post
    },
    readLoadAllPosts(){
      return this.loadPosts
    }
  },
  actions:{
    async getAllPostsFB(){
      this.listPosts = []

      try {
        const q =  query(collection(db, 'posts'))
        const querySnap = await getDocs(q)

        querySnap.forEach((doc) => {
          let post = doc.data()
          post.idFb = doc.id
          this.listPosts.push(post)
        })
      } catch (error) {
        console.log(error);
      }finally{
        this.loadPosts = false
      }

    },
    async savePost(post) {
      this.clearPost()

      this.post.id = Date.now()
      this.post.title = post.title
      this.post.subtitle = post.subtitle
      this.post.author = post.author
      this.post.dateCreate = Date.now()
      this.post.disciplina = post.disciplina
      this.post.text = post.text
      this.post.publish = false


      const colRef = collection(db, 'posts')
      const docRef = await addDoc(colRef, this.post)

      console.log('Doc create', docRef.id);

      this.clearPost()
    },
    updatePost(post){
    this.listPosts(x => {
        if(x.id == post.id) {
          x = post
        }
      })
    },
    publicarPost(post){
      this.listPosts.map(x => {
        if(x.id == post.id) {
          x.publish = !x.publish
        }
      })
    },
    async deletePost(idFb){

      const docRef = doc(db, 'posts', idFb)
      await deleteDoc(docRef)

      this.listPosts = this.listPosts.filter(x => x.idFb != idFb)

    },
    showCreatePost(){
      this.showListPosts = !this.showListPosts
    },
    loadOnePost(id){
      this.post = this.listPosts.filter(x => x.id == id)
    },
    clearPost(){
      this.post = {
        id: null,
        title: '',
        subtitle: '',
        text: '',
        author: '',
        disciplina: [],
        legislacao: [],
        doutrina: [],
        jurisprudencia: [],
        tags: [],
        dateCreate: '',
        update: '',
        publish: false
      }
    }
  }
});
