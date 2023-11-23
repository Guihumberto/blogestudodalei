<template>
  <v-app :theme="generalStore.readDark ? 'dark' : ''">
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
  import { useGeneralStore } from '@/store/GeneralStore'
  const generalStore = useGeneralStore()

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

<style>
:root {
  --step--2: clamp(0.625rem, 0.8356rem + -0.2717vw, 0.7813rem);
  --step--1: clamp(0.8838rem, 0.9562rem + -0.0935vw, 0.9375rem);
  --step-0: clamp(1.125rem, 1.0815rem + 0.2174vw, 1.25rem);
  --step-1: clamp(1.35rem, 1.2048rem + 0.7261vw, 1.7675rem);
  --step-2: clamp(1.62rem, 1.3141rem + 1.5293vw, 2.4994rem);
  --step-3: clamp(1.9438rem, 1.3907rem + 2.7652vw, 3.5338rem);
  --step-4: clamp(2.3325rem, 1.4058rem + 4.6337vw, 4.9969rem);
  --step-5: clamp(2.7994rem, 1.3155rem + 7.4196vw, 7.0656rem);

  --ff-base: 'Poppins', sans-serif;
  --ff-accent: 'IBM Plex Sans', sans-serif;

  --clr-text: hsl(204, 100%, 1%);
  --clr-surface: hsl(0, 0%, 100%);
  --clr-primary: hsl(329, 85%, 53%);
  --clr-secondary: hsl(208, 83%, 93%);
  --clr-accent: hsl(89, 85%, 33%);

  --fs-300: clamp(1.125rem, 1.0815rem + 0.2174vw, 1.25rem);
  --fs-400: clamp(1.35rem, 1.2048rem + 0.7261vw, 1.7675rem);
  --fs-500: clamp(1.62rem, 1.3141rem + 1.5293vw, 2.4994rem);
  --fs-600: clamp(1.9438rem, 1.3907rem + 2.7652vw, 3.5338rem);
  --fs-700: clamp(2.3325rem, 1.4058rem + 4.6337vw, 4.9969rem);
  --fs-800: clamp(2.7994rem, 1.3155rem + 7.4196vw, 7.0656rem);
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
body{
  font-size: var(--step-0);
  font-family: var(--ff-base);
  line-height: 1.6;
  color: var(--clr-text);
}
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
