import { defineStore } from "pinia";

export const useGeneralStore = defineStore("general", {
  state: () => ({
    posts: true,
    confirm: true,
    filterAll: false,
    dark: false
  }),
  getters: {
    readPosts() {
      return this.posts
    },
    readConfirm() {
      return this.confirm
    },
    readFilter() {
      return this.filterAll
    },
    readDark() {
      return this.dark
    },
  },
  actions:{
    changePosts(value) {
      this.posts = value
    },
    changeConfirm(value) {
      this.confirm = value
    },
    changeFilter(value){
      this.filterAll = value
    },
    changeDark(){
      this.dark = !this.dark
    }
  }
});
