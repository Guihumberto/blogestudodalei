import { defineStore } from "pinia";

export const useGeneralStore = defineStore("general", {
  state: () => ({
    posts: true,
    confirm: true
  }),
  getters: {
    readPosts() {
      return this.posts
    },
    readConfirm() {
      return this.confirm
    },
  },
  actions:{
    changePosts(value) {
      this.posts = value
    },
    changeConfirm(value) {
      this.confirm = value
    }
  }
});
