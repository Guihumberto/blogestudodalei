<template>
  <div class="container">
    <div class="wrapperHeader">
      <div class="header">
        <h2> <v-icon color="#f01468" class="mr-3">mdi-alpha-h-circle-outline</v-icon>Humberto</h2>
        <div class="navbar">
          <ul>
            <li><a href="">Início</a></li>
            <li><a href="">Sobre</a></li>
            <li><a href="">Portfólio</a></li>
            <li><a href="">Contato</a></li>
          </ul>
        </div>
        <div class="btn-group">
          <a href="">Entrar</a>
        </div>
      </div>
    </div>
    <div class="search">
      <v-text-field
        variant="outlined"
        append-inner-icon="mdi-magnify"
        style="max-width: 700px;"
        placeholder="Pesquisar"
      ></v-text-field>

    </div>
    <div id="cards">
      <div class="card" v-for="item, i in list" :key="i">
        <div class="card-border"></div>
        <div class="card-content">
          <div class="img">
            <v-icon color="grey" size="80">{{item.icon}}</v-icon>
          </div>
          <div class="wrappercontent">
            <div class="icon">
              <v-icon :color="item.color">mdi-home</v-icon>
            </div>
            <div>
              <h3>{{item.name}}</h3>
              <p class="font-weight-thin text-grey">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const list = ref([
  {name: 'Início', icon:'mdi-home-alert-outline', color: '#f01468'},
  {name: 'Atualizações', icon:'mdi-update', color: '#f01468'},
  {name: 'Transferências', icon:'mdi-swap-horizontal-circle-outline', color: '#f01468'},
  {name: 'Portfólio', icon:'mdi-swap-horizontal-variant', color: '#f01468'},
  {name: 'Progresso', icon:'mdi-progress-helper', color: '#f01468'},
  {name: 'Sobre', icon:'mdi-car-brake-hold', color: '#f01468'}
])


onMounted(()=> {
  document.getElementById("cards").onmousemove = e => {
  for(const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };
}
})



</script>

<style lang="scss" scoped>
.container{
  background: var(--bg-color);
  color: white;
  height: 100vh;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;;
}
.wrapperHeader{
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.header{
  width: min(100%, 1250px);
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
}
.navbar ul{
  list-style: none;
}
.navbar ul li{
  display: inline-block;
  margin-right: 2rem;
  position: relative;
}
.navbar ul li::after{
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 100%;
  height: 5px;
  background: var(--primary-color);
  border-radius: 5px;
  transform: scaleX(0);
  transition: transform .5s;
}
.navbar ul li:hover::after{
  transform: scaleX(1);
}
.navbar ul li a{
  text-decoration: none;
  color: white;
  font-size: 1.1rem;
  font-weight: 400;
}
.search{
  display: flex;
  justify-content: center;
  margin: 5rem 0;
}
#cards{
  width: min(100%, 916px);
  margin-inline: auto;
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
}
#cards:hover > .card > .card-border {
  opacity: 1;
}
.card{
  background-color: rgba(255, 255, 255, 0.1);
  width: 300px;
  height: 260px;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
}
.card::before,
.card > .card-border{
  border-radius: inherit;
  content: '';
  height: 100%;
  left: 0px;
  opacity: 0;
  transition: opacity 500ms;
  position: absolute;
  top: 0px;
  width: 100%;
}
.card::before{
  background: radial-gradient(
    800px circle at var(--mouse-x) var(--mouse-y),
    rgba(255, 255, 255, 0.06),
    transparent 40%
  );
  z-index: 3;
}
.card > .card-border{
  background: radial-gradient(
    400px circle at var(--mouse-x) var(--mouse-y),
    rgba(255, 255, 255, 0.3),
    transparent 40%
  );
  z-index: 1;
}
.card:hover::before
{
  opacity: 1;
}
.card > .card-content{
  background: var(--card-color);
  border-radius: inherit;
  margin: 1px;
  position: relative;
  height: calc(100% - 2px);
  width: calc(100% - 2px);
  z-index: 2;
}
.btn-group a{
  background: var(--primary-color);
  padding: .5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  color: white;
  transition: .6s ease;
  border: 1px solid var(--primary-color);
}
.btn-group a:hover{
  border: 1px solid var(--primary-color);
  background: var(--bg-color);
  color: var(--primary-color);
}
.wrappercontent{
  margin: 0 1rem;
  display: flex;
  justify-content: left;
  align-items: baseline;
  gap: .8rem;
  line-height: 1.2;
  height: 30%;
}
.card-content .img{
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
