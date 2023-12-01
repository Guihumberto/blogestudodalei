<template>
  <div class="mt-5">
    <h3>Editar</h3>
    <div>
      <v-form @submit.prevent="savePost()" ref="form">
        <v-text-field
        label="Título"
        density="comfortable"
        variant="outlined"
        class="mt-5"
        clearable
        v-model.trim="postEdit.title"
        ></v-text-field>
        <v-text-field
          label="Subtítulo"
          density="comfortable"
          variant="outlined"
          clearable
          v-model="postEdit.subtitle"
        ></v-text-field>
        <v-autocomplete
          v-model="postEdit.disciplina"
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
          <v-btn type="submit">Visualizar</v-btn>
        </div>
      </v-form>
    </div>
    <div v-if="view">
      <div class="mt-5">
        <div class="pa-5 border">
          <h1>{{ postEdit.title }}</h1>
          <h2 class="text-grey">{{ postEdit.subtitle }}</h2>
          <div class="textpost" v-html="postEdit.text"></div>
        </div>
        <v-btn class="my-5" color="primary" @click="updateFB()">Atualizar no Firebase</v-btn>
      </div>
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
        view: false,
        idPost: this.$route.params.id,
        discisplinas:[
          {id: 1, name: 'Direito Administrativo', sigla: 'DAdmin'},
          {id: 2, name: 'Direito Constitucional', sigla: 'DConst'},
          {id: 3, name: 'Direito Tributário', sigla: 'DTrib'},
        ]
      }
    },
    props:{
      postEdit: Object,
    },
    methods:{
      savePost(){
        const content = this.quill.root.innerHTML;
        this.copyPost(content)

        this.view = !this.view
      },
      copyPost(content){
        this.postEdit.text = content
      },
      clearForm(){
        this.quill.root.innerHTML = ''
      },
      updateFB(){
        listStore.updatePost(this.postEdit, this.idPost)
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
      this.quill.root.innerHTML = this.postEdit.text
    },
  }
</script>

<style lang="scss" scoped>

</style>
