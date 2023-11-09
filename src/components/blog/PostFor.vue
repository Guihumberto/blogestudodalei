<template>
  <div class="wrapperPostFor">
    <div class="disciplina"><h1>Direito Tributário</h1></div>
    <div class="author">
      <v-avatar
        size="60"
        color="grey"
        icon="mdi-account"
        class="mr-5"
      ></v-avatar>
      <div class="nameAuthor">
        <h2>Por João Humberto</h2>
        <h4>Auditor Fiscal</h4>
        <a href="#">Sobre o Autor</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
.wrapperPostFor {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  width: 100vw;
  margin: 1rem 0;
  padding: 2rem 0;
}
.disciplina{
  background: rgb(54, 51, 51);
  width: 100%;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.author{
  display: flex;
  justify-content: left;
  align-items: center;
  line-height: 1.2;
  width: 1280px;
  padding: .5rem;
  color: #000;
}
.nameAuthor a{
  text-decoration: none;
  color: #000;
  font-weight: 100;
  font-size: 15px;
  transition: .6s ease;
}
.nameAuthor a:hover{
  font-weight: 500;
}

</style>
