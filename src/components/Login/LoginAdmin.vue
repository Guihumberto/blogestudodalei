<template>
  <div class="wrapperLogin">
    <div class="contentLogin">
      <div class="mb-5">
        <h2>Login</h2>
        <p>Entre com seu usuário e senha</p>
      </div>
      <v-form class="form">
        <v-text-field
          variant="outlined"
          prepend-inner-icon="mdi-email"
          placeholder="Login"
          density="compact"
          v-model="login.email"
        ></v-text-field>
        <v-text-field
          variant="outlined"
          prepend-inner-icon="mdi-lock"
          placeholder="Senha"
          density="compact"
          v-model="login.password"
        ></v-text-field>
        <v-btn color="primary" variant="flat">Entrar</v-btn>
      </v-form>
      <div class="infoAcess">
        <a href=""><v-icon class="mr-1" size="x-small" icon="mdi-lock" />Esqueceu sua senha?</a> <br>
        <a href=""> <v-icon class="mr-1" size="x-small" icon="mdi-google" />Entrar com Google</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        login:{
          email: '',
          password: ''
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.wrapperLogin{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
}
.contentLogin{
  border: 1px solid grey;
  padding: 1rem;
  border-radius: 16px;
  width: 600px;
  height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.contentLogin div{
  width: 500px;
  text-align: left;
}
.form{
  width: 500px;
  display: flex;
  flex-direction: column;
  transition: 1s ease;
}
.infoAcess{
  text-decoration: none;
  margin-top: 1rem;
}
.infoAcess a{
  color: #333;
  font-size: .9rem;
  transition: 1s ease;
}
.infoAcess a:hover{
  letter-spacing: 1px;
}
</style>
