<template>
  <v-app>
    <default-bar class="postscomp" />
    <default-view class="postscomp" />
    <Footer class="postscomp" />
    <div class="fdp">
      <h5>Ai não, </h5>
      <h1>FDP!</h1>
    </div>
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import Footer from './Footer.vue';

  import {ref, onMounted} from 'vue'

  let menuShow = ref(false)

  onMounted(() => {
    window.onscroll = () => {
        //tranparencia da barra de menu
        if(window.scrollY > 50) {
          menuShow.value = true
        } else {
          menuShow.value = false
        }
      }
  })
</script>

<style scoped>
.disciplinafixed{
  height: 3rem;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .5s;
  background: #2E3440;
  color: aliceblue;
  margin-top: 4rem;
  z-index: 1;
  transition: .5s ease;

}
.disciplinafixedHidden{
  display: none;
}
@keyframes slideTop {
  0%{
    opacity: 0;
    transform: translateY(-100px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
}
.fdp{
  display: none;
}
@media (max-width: 170px){
  .postscomp{
    display: none;
  }
  .fdp{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: topSlider 1s ease;
    margin-top: 50%;
    transition: 1s ease;
  }
  @keyframes topSlider {
    0%{
      opacity: 1;
      transform: rotateX(180deg);

    }
    100%{
      transform: rotateX(360deg);
      color: red;
    }
  }
}
</style>
