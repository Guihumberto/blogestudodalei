<template>
  <div class="wrapperUser">
    <h1>User</h1>
    <div class="menuUser">
      <v-btn variant="outlined">novo</v-btn>
    </div>
    <div class="border my-5 pa-5 text-center">
      <v-form @submit.prevent="CreateUser()" ref="form">
        <v-text-field
          label="Primeiro Nome"
          variant="outlined"
          v-model.trim = user.firstName
        ></v-text-field>
        <v-text-field
          label="Último Nome"
          variant="outlined"
          v-model.trim = user.lastName
        ></v-text-field>
        <v-text-field
          label="E-mail"
          variant="outlined"
          v-model.trim = user.email
        ></v-text-field>
        <v-text-field
          label="Formação"
          variant="outlined"
          v-model.trim = user.formacao
        ></v-text-field>
        <v-textarea
          label="Sobre"
          variant="outlined"
          v-model.trim = user.about
        ></v-textarea>
        <v-btn type="submit" flat color="primary">Salvar</v-btn>
      </v-form>

    </div>
  </div>
</template>

<script>
  import db from '../firebase/init'
  import { collection, addDoc, doc, getDocs, query, where } from 'firebase/firestore'

  export default {
    data(){
      return{
        user:{
          firstName: 'João Humberto',
          lastName: 'Júnior',
          email: 'juninho.joao@hotmail.com',
          photo: '',
          cargo: 'Auditor Fiscal',
          formacao: 'Ciências Contábeis',
          about: 'Pai do guilherme e do Theodoro',
          dateCreate: '29/11/2023'
        },
        users: []
      }
    },
    computed:{

    },
    methods:{
      async CreateUser(){
        const colRef = collection(db, 'users')

        const docRef = await addDoc(colRef, this.user)

      },
      async getUser(){
        const q =  query(collection(db, 'users'))
        const querySnap = await getDocs(q)

        querySnap.forEach((doc) => {
        this.users.push(doc.data())
      })


return this.users
}
    },
    created(){
      // this.CreateUser()
      // this.getUser()
    }
  }
</script>

<style lang="scss" scoped>
.wrapperUser{
  width: min(100%, 1000px);
  margin-inline: auto;
}
.menuUser{
  margin: .5rem 0;
  padding: .5rem .3rem;
  display: flex;
  justify-content: right;
  background: rgb(247, 241, 241);
}

</style>
