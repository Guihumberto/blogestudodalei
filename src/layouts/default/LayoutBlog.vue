<template>
  <v-app id="contApp">
    <div class="container active" id="container">
      <header class="header">
        <a class="logo">Humberto</a>

        <nav class="navbar">
          <a href="#" class="active">Home</a>
          <a href="#">Sobre</a>
          <a href="#">Habilidades</a>
          <a href="#">Portifolio</a>
          <a href="#">Contato</a>
        </nav>

        <div class="toggle-icon">
            <a @click="darkMode = !darkMode"><v-icon :icon="darkMode ? 'mdi-weather-night' : 'mdi-brightness-5'"></v-icon></a>
        </div>
      </header>
      <default-view />
    </div>
    <div class="container active" id="dark-container">
      <header class="header">
        <a class="logo">Humberto</a>

        <nav class="navbar">
          <a href="#" class="active">Home</a>
          <a href="#">Sobre</a>
          <a @click="goTo()">Estudo da Lei</a>
          <a href="#">Portifolio</a>
          <a href="#">Contato</a>
        </nav>

        <div class="toggle-icon">
            <a @click="darkMode = !darkMode"><v-icon :icon="darkMode ? 'mdi-weather-night' : 'mdi-white-balance-sunny'"></v-icon></a>
        </div>
      </header>
      <default-view />
    </div>
  </v-app>
</template>

<script setup>
  import DefaultView from './View.vue'
  import {ref, onMounted, watch} from 'vue'

  let darkMode = ref(false)

  // onMounted(() => {
  //   window.onscroll = () => {
  //       //tranparencia da barra de menu
  //       if(window.scrollY > 50) {
  //         menuShow.value = true
  //       } else {
  //         menuShow.value = false
  //       }
  //     }
  // })

  function goTo () {
    this.$router.replace('/')
  }

  onMounted(() => {
   const container = document.querySelector('.container')

   const darkContainer = document.querySelector('#dark-container')
   darkContainer.classList.remove('active')

   const darkContainerImg = document.querySelector('#dark-container .home-img img')

   darkContainerImg.src = '/assets/light.png'


   watch(darkMode, async (newQ, oldQ) => {
      if(newQ){
        container.classList.remove('active')
        darkContainer.classList.toggle('active')
      } else {
        container.classList.toggle('active')
        darkContainer.classList.remove('active')
      }
  })
})


</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
}
.container{
  background: #f0f3fd;
  color: #333;
}
header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 10%;
  background: transparent;
  display: flex;
  gap: 5rem;
  align-items: center;
  z-index: 100;
}
header .logo {
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin-right: auto;
}
header .navbar a{
  font-size: 1.2rem;
  color: #333;
  font-weight: 600;
  margin-right: 35px;
  transition: .5s;
}
header .navbar a:hover,
.navbar a.active
{
  color: #37a1f2;
}
.toggle-icon {
  display: flex;
  font-size: 24px;
  cursor: pointer;
  transition: .5s;
}
.toggle-icon:hover{
  color: #37a1f2;
}
#dark-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: #15202b;
  color: #f0f3fd;
}
#dark-container .logo,
#dark-container .navbar,
#dark-container .navbar a{
  color: #f0f3fd;
}
#dark-container .navbar a:hover,
#dark-container .navbar a.active
{
  color: #37a1f2;
}
#container,
#dark-container {
  clip-path: circle(0% at 0 0);
  transition-delay: 1.5s;

}
.active#container,
.active#dark-container {
  z-index: 1;
  clip-path: circle(150% at 0 0);
  transition: 1.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0s;
}

</style>
