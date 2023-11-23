import { defineStore } from "pinia";

export const useListPostsStore = defineStore("listPosts", {
  state: () => ({
    showListPosts: true,
    listPosts: [
      {
        id: 1,
        title: 'Teste Title',
        subtitle: 'teste subtitle',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt velit cupiditate beatae deserunt minus excepturi cumque consequatur repellat, iusto nulla sunt, corporis, magni impedit itaque saepe. In distinctio cum est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt velit cupiditate beatae deserunt minus excepturi cumque consequatur repellat, iusto nulla sunt, corporis, magni impedit itaque saepe. In distinctio cum est.',
        author: 1,
        revisor: 1,
        legislacao: [1, 2, 3],
        doutrina: [1, 2, 3],
        jurisprudencia: [1, 2, 3],
        tags: [1, 2, 3],
        dateCreate: '1700131541020',
        update: '1700131541020',
        publish: false
      },
      {
        id: 2,
        title: 'Teste Title',
        subtitle: 'teste subtitle',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt velit cupiditate beatae deserunt minus excepturi cumque consequatur repellat, iusto nulla sunt, corporis, magni impedit itaque saepe. In distinctio cum est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt velit cupiditate beatae deserunt minus excepturi cumque consequatur repellat, iusto nulla sunt, corporis, magni impedit itaque saepe. In distinctio cum est.',
        author: 1,
        revisor: 1,
        legislacao: [1, 2, 3],
        doutrina: [1, 2, 3],
        jurisprudencia: [1, 2, 3],
        tags: [1, 2, 3],
        dateCreate: '1700131541020',
        update: '1700131541020',
        publish: false
      },
      {
        id: 3,
        title: 'Teste Title',
        subtitle: 'teste subtitle',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt velit cupiditate beatae deserunt minus excepturi cumque consequatur repellat, iusto nulla sunt, corporis, magni impedit itaque saepe. In distinctio cum est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt velit cupiditate beatae deserunt minus excepturi cumque consequatur repellat, iusto nulla sunt, corporis, magni impedit itaque saepe. In distinctio cum est.',
        author: 1,
        revisor: 1,
        legislacao: [1, 2, 3],
        doutrina: [1, 2, 3],
        jurisprudencia: [1, 2, 3],
        tags: [1, 2, 3],
        dateCreate: '1700131541020',
        update: '1700131541020',
        publish: false
      },
      {
        id: 4,
        title: 'Teste Title',
        subtitle: 'teste subtitle',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt velit cupiditate beatae deserunt minus excepturi cumque consequatur repellat, iusto nulla sunt, corporis, magni impedit itaque saepe. In distinctio cum est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt velit cupiditate beatae deserunt minus excepturi cumque consequatur repellat, iusto nulla sunt, corporis, magni impedit itaque saepe. In distinctio cum est.',
        author: 1,
        revisor: 1,
        legislacao: [1, 2, 3],
        doutrina: [1, 2, 3],
        jurisprudencia: [1, 2, 3],
        tags: [1, 2, 3],
        dateCreate: '1700131541020',
        update: '1700131541020',
        publish: false
      },
      {
        id: 5,
        title: 'Teste Title',
        subtitle: 'teste subtitle',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt velit cupiditate beatae deserunt minus excepturi cumque consequatur repellat, iusto nulla sunt, corporis, magni impedit itaque saepe. In distinctio cum est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt velit cupiditate beatae deserunt minus excepturi cumque consequatur repellat, iusto nulla sunt, corporis, magni impedit itaque saepe. In distinctio cum est.',
        author: 1,
        revisor: 1,
        legislacao: [1, 2, 3],
        doutrina: [1, 2, 3],
        jurisprudencia: [1, 2, 3],
        tags: [1, 2, 3],
        dateCreate: '1700131541020',
        update: '1700131541020',
        publish: false
      },
      {
        id: 6,
        title: 'Teste Title',
        subtitle: 'teste subtitle',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt velit cupiditate beatae deserunt minus excepturi cumque consequatur repellat, iusto nulla sunt, corporis, magni impedit itaque saepe. In distinctio cum est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt velit cupiditate beatae deserunt minus excepturi cumque consequatur repellat, iusto nulla sunt, corporis, magni impedit itaque saepe. In distinctio cum est.',
        author: 1,
        revisor: 1,
        legislacao: [1, 2, 3],
        doutrina: [1, 2, 3],
        jurisprudencia: [1, 2, 3],
        tags: [1, 2, 3],
        dateCreate: '1700131541020',
        update: '1700131541020',
        publish: true
      },
      {
        id: 7,
        title: 'Teste Title',
        subtitle: 'teste subtitle',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt velit cupiditate beatae deserunt minus excepturi cumque consequatur repellat, iusto nulla sunt, corporis, magni impedit itaque saepe. In distinctio cum est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt velit cupiditate beatae deserunt minus excepturi cumque consequatur repellat, iusto nulla sunt, corporis, magni impedit itaque saepe. In distinctio cum est.',
        author: 1,
        revisor: 1,
        legislacao: [1, 2, 3],
        doutrina: [1, 2, 3],
        jurisprudencia: [1, 2, 3],
        tags: [1, 2, 3],
        dateCreate: '1700131541020',
        update: '1700131541020',
        publish: true
      },
      {
        id: 8,
        title: 'Teste Title',
        subtitle: 'teste subtitle',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt velit cupiditate beatae deserunt minus excepturi cumque consequatur repellat, iusto nulla sunt, corporis, magni impedit itaque saepe. In distinctio cum est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt velit cupiditate beatae deserunt minus excepturi cumque consequatur repellat, iusto nulla sunt, corporis, magni impedit itaque saepe. In distinctio cum est.',
        author: 1,
        revisor: 1,
        legislacao: [1, 2, 3],
        doutrina: [1, 2, 3],
        jurisprudencia: [1, 2, 3],
        tags: [1, 2, 3],
        dateCreate: '1700131541020',
        update: '1700131541020',
        publish: true
      },
      {
        id: 9,
        title: 'Teste Title',
        subtitle: 'teste subtitle',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt velit cupiditate beatae deserunt minus excepturi cumque consequatur repellat, iusto nulla sunt, corporis, magni impedit itaque saepe. In distinctio cum est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt velit cupiditate beatae deserunt minus excepturi cumque consequatur repellat, iusto nulla sunt, corporis, magni impedit itaque saepe. In distinctio cum est.',
        author: 1,
        revisor: 1,
        legislacao: [1, 2, 3],
        doutrina: [1, 2, 3],
        jurisprudencia: [1, 2, 3],
        tags: [1, 2, 3],
        dateCreate: '1700131541020',
        update: '1700131541020',
        publish: true
      },
      {
        id: 10,
        title: 'Teste Title',
        subtitle: 'teste subtitle',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt velit cupiditate beatae deserunt minus excepturi cumque consequatur repellat, iusto nulla sunt, corporis, magni impedit itaque saepe. In distinctio cum est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt velit cupiditate beatae deserunt minus excepturi cumque consequatur repellat, iusto nulla sunt, corporis, magni impedit itaque saepe. In distinctio cum est.',
        author: 1,
        revisor: 1,
        legislacao: [1, 2, 3],
        doutrina: [1, 2, 3],
        jurisprudencia: [1, 2, 3],
        tags: [1, 2, 3],
        dateCreate: '1700131541020',
        update: '1700131541020',
        publish: true
      },
    ],
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
    }
  },
  actions:{
    savePost(post) {
      this.clearPost()

      this.post.id = Date.now()
      this.post.title = post.title
      this.post.subtitle = post.subtitle
      this.post.author = post.author
      this.post.dateCreate = Date.now()

      this.listPosts.push(this.post)

      this.clearPost()
      console.log('salvar')
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
    deletePost(post){
      this.listPosts = this.listPosts.filter(x => x.id != post.id)
    },
    showCreatePost(){
      this.showListPosts = !this.showListPosts
    },
    loadOnePost(id){
      this.post = this.listPosts.filter(x => x.id == id)
    },
    clearPost(){
      this.post = {
        id: '',
        title: '',
        subtitle: '',
        text: '',
        author: '',
        legislacao: [],
        doutrina: [],
        jurisprudencia: [],
        tags: [],
        dateCreate: '',
        update: ''
      }
    }
  }
});
