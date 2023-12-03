<template>
  <div class="mb-15">
    <h2 class="my-5"><v-icon>mdi-arrow-right</v-icon> Add Tag</h2>
    <div>
      <v-form class="d-flex" ref="form" @submit.prevent="addTag()">
        <v-text-field
          label="Nome da Tag"
          density="compact"
          variant="outlined"
          style="max-width: 400px;"
          v-model.trim="tagName"
          :rules="[rules.required]"
        ></v-text-field>
        <v-btn class="ml-5 pa-5 d-flex" color="success" type="submit">Add</v-btn>
      </v-form>
    </div>
    <div class="bg-grey pa-5 d-flex justify-center ga-2">
      <v-row
        align="center"
        justify="start"
      >
        <v-col
          v-for="tag, i in list" :key="i"
          cols="auto"
          class="py-1 pe-0"
        >
         <v-chip
            :disabled="loading"
            closable
            @click:close="removeTag(tag)"
          >
            {{ tag }}
          </v-chip>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
  import { useListPostsStore } from '@/store/ListPostsStore'
  const listStore = useListPostsStore()

  export default {
    data(){
      return{
        idPost: this.$route.params.id,
        tagName: '',
        listTags: [],
        rules:{
            required: (value) => !!value || "Campo obrigatório",
            minname: (v) => (v||'').length >= 4 || "Mínimo 4 caracteres",
            mincpf: (v) => (v||'').length == 11 || "CPF possui 11 dígitos",
        }
      }
    },
    props:{
      post: Object
    },
    computed:{
      list(){
        let list = [...this.listTags, ...this.post.tags]
        return [...new Set(list)];
      }
    },
    methods:{
      async addTag(){
        const { valid } = await this.$refs.form.validate()
        if(valid){
          this.listTags.push(this.tagName.toLowerCase())

          this.post.tags = this.list

          listStore.updatePost(this.post, this.idPost)

          this.tagName =''
        }
      },
      removeTag(tag){
        this.list = this.list.filter(x => x != tag)
        this.post.tags = this.list.filter(x => x != tag)
        listStore.updatePost(this.post, this.idPost)
      }
    }
  }
</script>

<style lang="scss" scoped>
h2{
  font-size: 2rem;
}
</style>
