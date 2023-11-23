<template>
  <div class="my-10">
      <h1>Novo Post</h1>
      <v-text-field
      label="Título"
      density="comfortable"
      variant="outlined"
      class="mt-5"
      clearable
      v-model.trim="post.title"
    ></v-text-field>
    <v-text-field
      label="Subtítulo"
      density="comfortable"
      variant="outlined"
      clearable
      v-model="post.subtitle"
    ></v-text-field>
    <v-select
      label="Disciplina"
      density="comfortable"
      variant="outlined"
      clearable
    ></v-select>
  </div>
  <div>
    <div ref="editor" />
    <div class="my-5">
      <v-btn class="mr-2" @click="clearForm()">Limpar</v-btn>
      <v-btn @click="savePost()" >Visualizar</v-btn>
    </div>
    <div class="mt-5">
      <div class="pa-5 border">
        <h1>{{ post.title }}</h1>
        <h2 class="text-grey">{{ post.subtitle }}</h2>
        <div class="textpost" v-html="post.text"></div>
      </div>
      <v-btn class="my-5" color="primary" @click="saveFB()">Salvar no Firebase</v-btn>
    </div>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import Quill from 'quill'

import { useListPostsStore } from '@/store/ListPostsStore'
const listStore = useListPostsStore()

  export default {
    data(){
      return{
        quill: null,
        viewText: true,
        post:{
          title: '',
          subtitle: '',
          text: '',
          author: 1
        }
      }
    },
    computed:{
      preparPost(){
          return this.post.title
      },
      isEmptyForm(){
        return this.preparPost
      }
    },
    methods:{
      savePost(){
        const content = this.quill.root.innerHTML;
        this.copyPost(content)
      },
      copyPost(content){
        this.post.text = content
      },
      clearForm(){
        this.quill.root.innerHTML = ''
      },
      saveFB(){
        listStore.savePost(this.post)
      }
    },
    mounted() {
      this.quill = new Quill(this.$refs.editor, {
        theme: 'snow', // 'snow' é um tema popular
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            ['image', 'code-block'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link'],
          ],
        },
      });
    },
  }
</script>

<style lang="scss" scoped>
.textpost p{
  padding: 50px;
}
</style>
