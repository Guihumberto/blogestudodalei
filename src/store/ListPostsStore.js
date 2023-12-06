import { defineStore } from "pinia";
import db from '@/firebase/init'
import { collection, addDoc, doc, getDocs, query, where, deleteDoc, getDoc, updateDoc } from 'firebase/firestore'

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
    onePost: {},
    loadPosts: true,
    loadPost: true,
    discisplinas:[
      {id: 1, name: 'Direito Administrativo', sigla: 'DAdmin'},
      {id: 2, name: 'Direito Constitucional', sigla: 'DConst'},
      {id: 3, name: 'Direito Tributário', sigla: 'DTrib'},
    ],
    authors:[{
        id: 1,
        firstName: 'João Humberto',
        lastName: 'Júnior',
        email: 'juninho.joao@hotmail.com',
        photo: '',
        cargo: 'Auditor Fiscal',
        formacao: 'Ciências Contábeis',
        about: 'Pai do guilherme e do Theodoro',
        dateCreate: '29/11/2023'
      }
    ]
  }),
  getters: {
    readListPosts() {
      return this.listPosts
    },
    readShowListPosts(){
      return this.showListPosts
    },
    readOnePost(){
      return this.onePost
    },
    readLoadAllPosts(){
      return this.loadPosts
    },
    readLoadOnePost(){
      return this.loadPost
    },
    readListDisciplinas(){
      return this.discisplinas
    },
    readAuthors(){
      return this.authors
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

      this.clearPost()
    },
    async updatePost(post, idFb){
      try {
        const docRef = doc(db, 'posts', idFb)
        const docSpan = await getDoc(docRef)


        // verificar o usuário
        // if(docSpan.data().user !== auth.currentUeser.uid) {
        //   throw new Error("nao peretence ao usuario")
        // }

        if(!docSpan.exists()){
          throw new Error('no exist doc')
        }

        await updateDoc(docRef, post)

      } catch (error) {
        console.log(error);
      }
    },
    async publicarPost(post){
      try {
        const docRef = doc(db, 'posts', post.idFb)
        const docSpan = await getDoc(docRef)

        console.log(docRef);

        // verificar o usuário
        // if(docSpan.data().user !== auth.currentUeser.uid) {
        //   throw new Error("nao peretence ao usuario")
        // }

        if(!docSpan.exists()){
          throw new Error('no exist doc')
        }

        let dataPost

        this.listPosts.map(x => {
          if(x.id == post.id) {
            x.publish = !x.publish
            dataPost = x
          }
        })
        console.log(dataPost);

        await updateDoc(docRef, dataPost)

      } catch (error) {
        console.log(error);
      }
    },
    async deletePost(idFb){

      const docRef = doc(db, 'posts', idFb)
      await deleteDoc(docRef)

      this.listPosts = this.listPosts.filter(x => x.idFb != idFb)

    },
    showCreatePost(){
      this.showListPosts = !this.showListPosts
    },
    async loadOnePost(id){
      try {

        const docRef = doc(db, "posts", id)
        const docSpan = await getDoc(docRef)
        this.onePost = docSpan.data()

      } catch (error) {
        console.log(error);
      }finally{
        this.loadPost = false
      }
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
