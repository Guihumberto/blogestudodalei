<template>
  <div class="contentFooter">
    <div class="wrapperFooter">
      <div>
        <h4 class="titlesite">
          EL - Estudo da Lei
        </h4>
        <p>© Copyright 2022-2023 Leges - Estudo da Lei</p>
      </div>
      <div>
        <h5>Desenvolvido por João Humberto Silva Ribeiro Júnior</h5>
        <div class="socialWrapper">
          <div class="socialnetwork" v-for="item, i in socialNet" :key="i">
            <v-icon>{{item.name}}</v-icon>
          </div>

        </div>
      </div>
    </div>
    <div class="subfooter">
      <a href="#">www.estudodalei.com.br</a>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        socialNet:[
          {name: 'mdi-instagram'},
          {name: 'mdi-youtube'},
          {name: 'mdi-linkedin'}
        ]
      }
    }
  }
</script>

<style scoped>
.contentFooter{
  width: 100vw;
  background: #2E3440;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}.wrapperFooter{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1280px;
}
.socialnetwork{
  width: 40px;
  height: 40px;
  border: 1px solid #fff;
  border-radius: 10px;
  margin-right: .5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .2s ease;
}
.socialWrapper{
  display: flex;
  padding: 1rem 0;
  justify-content: end;
  align-items: center;
}
.socialnetwork i {
  transition: .5s ease;
}
.socialnetwork:hover{
  border: 1px solid #000;
  background: #fff;
  color: #000;
}
.socialnetwork i:hover {
  color: rgb(20, 19, 19);
  transform: scale(1.3);
}
.subfooter{
  display: flex;
  justify-content: center;
  color: #fff;
  width: 100%;
}
a {
  text-decoration: none;
  color: #fff;
  margin-right: .5rem;
}
@media (max-width: 1250px){
  .wrapperFooter{
    flex-direction: column;
    width: 100vw;
    justify-content: center;
  }
  .socialWrapper{
    justify-content: center;
  }
  .titlesite{
    text-align: center;
  }
}
</style>
