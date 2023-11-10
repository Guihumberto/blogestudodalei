<template>
 <div class="containerHead">
  <div>
    <h1 @click.prevent="home()">Blog <span class="estlei">Estudo da Lei</span><span class="el"> EL</span></h1>
    <nav>
      <a>Leis</a>
      <a>Súmulas</a>
      <a>Jurispruência</a>
    </nav>
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
    methods:{
      home(){
        generalStore.changePosts(true)
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
  height: 100px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  user-select:none

}
.containerHead div{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1280px;
}
.containerHead div h1{
  transition: .6s ease;
}
.containerHead div h1:hover{
  color: rgb(200, 207, 207);
}
.containerHead div nav a{
  text-decoration: none;
  margin-right: 2rem;
  padding: .3rem 0;
  transition: .6s ease;
}
.containerHead div nav a:hover{
  color: rgb(223, 217, 217);
  border-bottom: 10px solid rgb(248, 245, 245);
}
.el{
  display: none;
}
@media (max-width: 1250px){
  .containerHead div{
    width: 100%;
    padding: 0 2rem;
  }
  /* .containerHead div nav{
    display: none;
  } */
}
@media (max-width: 624px){
  .containerHead div nav{
    display: none;
  }
}
@media (max-width: 240px){
  .estlei {
    display: none;
  }
  .el{
    display: inline;
  }
}
</style>
