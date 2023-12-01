<template>
  <div class="my-5">
      <h2>Novo Post</h2>
      <v-form @submit.prevent="savePost()" ref="form">
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
        <v-autocomplete
          v-model="post.disciplina"
          :items="discisplinas"
          chips
          closable-chips
          color="blue-grey-lighten-2"
          item-title="name"
          item-value="id"
          label="Disciplina"
          density="comfortable"
          variant="outlined"
          clearable
          multiple
        >
          <template v-slot:chip="{ props, item }">
            <v-chip
              v-bind="props"
              :text="item.raw.name"
            ></v-chip>
          </template>

          <template v-slot:item="{ props, item }">
            <v-list-item
              v-bind="props"
              :title="item?.raw?.name"
            ></v-list-item>
          </template>
        </v-autocomplete>
        <div ref="editor" />
        <div class="my-5">
          <v-btn class="mr-2" @click="clearForm()">Limpar</v-btn>
          <v-btn type="submit">Visualizar</v-btn>
        </div>
      </v-form>
  </div>
  <div>
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
          disciplina: [],
          text: '',
          author: 1
        },
        discisplinas:[
          {id: 1, name: 'Direito Administrativo', sigla: 'DAdmin'},
          {id: 2, name: 'Direito Constitucional', sigla: 'DConst'},
          {id: 3, name: 'Direito Tributário', sigla: 'DTrib'},
        ]
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
