<template>
  <div>
    <v-btn
      color="success"
    >
      Add Referência
      <v-dialog
        v-model="dialog"
        activator="parent"
        width="auto"
      >
        <v-card width="700">
          <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Adicionar Referência</v-toolbar-title>
          </v-toolbar>
          <v-form @submit.prevent="saveRef()" ref="form">
          <v-card-text>
              <v-select
                label="Tipo"
                variant="outlined"
                :items="types"
                item-value="id"
                item-title="title"
                v-model="ref.type"
                :rules="[rules.required]"
              ></v-select>
              <div v-if="ref.type">
                <v-text-field
                  label="Resumo"
                  v-model.trim="ref.resumo"
                  variant="outlined"
                  :rules="[rules.required]"
                ></v-text-field>
                <v-textarea
                  label="Texto"
                  variant="outlined"
                  v-model.trim="ref.text"
                  :rules="[rules.required]"
                ></v-textarea>
                <v-text-field
                  label="Referência"
                  v-model.trim="ref.refs"
                  :rules="[rules.required]"
                ></v-text-field>
              </div>
            </v-card-text>
            <v-card-actions class="mx-4">
              <v-spacer></v-spacer>
              <v-btn color="grey" @click="dialog = false">FECHAR</v-btn>
              <v-btn variant="outlined" color="primary" type="submit">Salvar</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>
    </v-btn>
  </div>
</template>
<script>
import { useReferenceStore } from '@/store/ReferenceStore'
const referenceStore = useReferenceStore()

import { useListPostsStore } from '@/store/ListPostsStore'
const listStore = useListPostsStore()

  export default {
    data () {
      return {
        dialog: false,
        idPost: this.$route.params.id,
        ref:{
          type: 0,
          resumo: '',
          text: '',
          refs: ''
        },
        types:[
          {id:0, title:'Escolha o tipo'},
          {id:1, title:'Legislação'},
          {id:2, title:'Jurisprudência'},
          {id:3, title:'Doutrina'},
        ],
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
    methods:{
      async saveRef(){
        const { valid } = await this.$refs.form.validate()

        if( valid ){
          referenceStore.addReference(this.ref, this.post, this.idPost)
        }
      }
    }
  }
</script>
