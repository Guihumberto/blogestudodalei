<template>
  <div class="wrapperPostFor">
    <div class="author">
      <v-avatar
        size="70"
        color="grey"
        icon="mdi-account"
        class="mr-5"
      ></v-avatar>
      <div class="nameAuthor">
        <h3>Por João Humberto</h3>
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
  justify-content: first baseline;
  align-items: center;
  width: 1280px;
}
.disciplina{
  background: rgb(54, 51, 51);
  width: 100%;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.author{
  display: flex;
  justify-content: left;
  align-items: center;
  line-height: 1.2;
  width: 1280px;
  padding-right: .5rem;
  color: #585656;
}
.nameAuthor a{
  text-decoration: none;
  color: #5f5c5c;
  font-weight: 100;
  font-size: 15px;
  transition: .6s ease;
}
.nameAuthor a:hover{
  font-weight: 500;
}
@media (max-width: 1280px){
  .wrapperPostFor {
    width: 100%;
  }
  .author{
    width: 100%;
  }
}

</style>
