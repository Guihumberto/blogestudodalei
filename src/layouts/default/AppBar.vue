<template>
 <div class="containerHead">
    <div class="wrapperSubhead">
      <div class="title">
        <h1>Blog Estudo da Lei</h1>
      </div>
      <img src="@/assets/books.png" alt="livros" />
   </div>
  </div>
 <div class="wrapperhead">
   <div class="contentHead">
     <nav class="navbar">
       <a @click="goPage('/')">Home</a>
       <a href="#">Estudo da lei</a>
       <a href="#">Sobre</a>
       <a @click="goPage('admin?create=true')">Admin</a>
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
      goPage(url){
        this.$router.replace(`${url}`)
      }
    }
  }
</script>

<style scoped>
.containerHead{
  background: url('https://png.pngtree.com/thumb_back/fw800/background/20210227/pngtree-galaxy-galaxy-starry-night-sky-background-image_571584.jpg');
  background-position: bottom;
  background-size: cover;
  width: 100%;
  min-height:30rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select:none;
  transition: .6s ease;
}
.wrapperSubhead{
  width: min(100%, 1000px);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.containerHead img{
  width: min(50%, 500px);
}
img:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}
.wrapperhead{
  position: sticky;
  top: 0;
  background: #050308;
  width: 100%;
  min-height: 3rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select:none;
  transition: .6s ease;
  z-index: 1000;
}
.title{
  width: min(50%, 500px);
}
.title h1{
  font-size: 4.5rem;
  line-height: 1.2;
}
.contentHead{
  display: flex;
  justify-content: center;
  align-items: center;
  width: min(90%, 1000px);
}
.contentHead h1{
  transition: .6s ease;
  font-size: var(--step-1);
  margin: 0;
}
.contentHead h1:hover{
  color: rgb(200, 207, 207);
}
.contentHead nav a{
  position: relative;
  display: inline-block;
  text-decoration: none;
  margin-left: 2rem;
  padding: .3rem 0;
  transition: .5s ease;
  color: white;
}
.contentHead nav a::after{
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
.contentHead nav a:hover::after, :focus{
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
  .contentHead nav{
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
