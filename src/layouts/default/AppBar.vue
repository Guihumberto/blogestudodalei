<template>
 <div class="containerHead">
  <div>
    <h1 @click.prevent="home()">Blog <span class="estlei">Estudo da Lei</span><span class="el"> EL</span></h1>
    <nav>
      <a>Leis</a>
      <a>Súmulas</a>
      <a @click="goAdmin()">Admin</a>
      <a @click="goBLog()">Blog</a>
    </nav>
    <v-btn variant="plain" class="filter" icon="mdi-filter"  @click="activeFilter()"></v-btn>
    <v-btn variant="plain" :icon="readDark ? 'mdi-moon-waxing-crescent' : 'mdi-weather-sunny'" @click="activeDark()"></v-btn>
  </div>
  <!-- <div :class="menuShow ? 'disciplinafixed': 'disciplinafixedHidden'">
    <h2>Direito Tributário</h2>
  </div> -->
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
  width: 100vw;
  height: min(70px, 6rem);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  user-select:none;
  transition: .6s ease;
}
.containerHead div{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: min(90%, 1000px);
}
.containerHead div h1{
  transition: .6s ease;
  font-size: var(--step-2);
}
.containerHead div h1:hover{
  color: rgb(200, 207, 207);
}
.containerHead div nav a{
  text-decoration: none;
  margin-left: 2rem;
  padding: .3rem 0;
  transition: .5s ease;
}
::marker {
  color: blue;
}
.containerHead div nav a:hover, :focus{
  color: rgb(223, 217, 217);
  border-bottom: 8px solid rgb(248, 245, 245);
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
  .containerHead div h1{
    font-size: 1.7rem;
  }
}
@media (max-width: 624px){
  .containerHead div nav{
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
