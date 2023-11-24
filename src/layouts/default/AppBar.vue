<template>
 <div class="containerHead">
  <div class="contentHead">
    <h1 class="title" @click.prevent="home()">Blog <span class="estlei">Estudo da Lei</span><span class="el"> EL</span></h1>
    <nav class="navbar">
      <a>Leis</a>
      <a>Súmulas</a>
      <a @click="goAdmin()">Admin</a>
      <a @click="goBLog()">Blog</a>
    </nav>
    <div class="btngroup">
      <v-btn variant="plain" class="filter" icon="mdi-filter"  @click="activeFilter()"></v-btn>
      <v-btn variant="plain" :icon="readDark ? 'mdi-moon-waxing-crescent' : 'mdi-weather-sunny'" @click="activeDark()"></v-btn>
    </div>
  </div>
 </div>
</template>

<script>
  import { useGeneralStore } from '@/store/GeneralStore'
  const generalStore = useGeneralStore()

  export default {
    data(){
      return{
        collapse: false
      }
    },
    computed:{
      readDark(){
        return generalStore.readDark
      }
    },
    methods:{
      home(){
        this.$router.push('/')
      },
      activeFilter(){
        generalStore.changeFilter(true)
      },
      activeDark(){
        generalStore.changeDark()
      },
      goBLog(){
        this.$router.replace('/blog')
      },
      goAdmin(){
        this.$router.replace('/admin?create=true')
      }
    }
  }
</script>

<style scoped>
.containerHead{
  position: fixed;
  top: 0;
  background: #2E3440;
  width: 100%;
  height:5rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  user-select:none;
  transition: .6s ease;
}
.containerHead .contentHead{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: min(90%, 1000px);
}
.containerHead .contentHead h1{
  transition: .6s ease;
  font-size: var(--step-2);
  margin: 0;
}
.containerHead .contentHead h1:hover{
  color: rgb(200, 207, 207);
}
.containerHead .contentHead nav a{
  position: relative;
  display: inline-block;
  text-decoration: none;
  margin-left: 2rem;
  padding: .3rem 0;
  transition: .5s ease;
}
.containerHead .contentHead nav a::after{
  content: '';
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 5px;
  background: #3cf;
  border-radius: 5px;
  transform: scaleX(0);
  transition: transform .5s;
}
.containerHead .contentHead nav a:hover::after, :focus{
  transform: scaleX(1);
}
.el{
  display: none;
}
.filter{
  display: none;
}

@media (max-width: 924px){
  .filter{
    display: inline;
  }
}
@media (max-width: 624px){
  .containerHead .contentHead nav{
    display: none;
  }
}
@media (max-width: 340px){
  .estlei {
    display: none;
  }
  .el{
    display: inline;
  }
}
</style>
