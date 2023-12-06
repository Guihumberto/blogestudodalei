<template>
 <div class="containerHead">
    <div class="wrapperSubhead">
        <h1>Blog Estudo da Lei</h1>
   </div>
  </div>
 <div class="wrapperhead">
   <div class="contentHead">
     <nav class="navbar">
       <a @click="goHome()">Home</a>
       <a href="#">Estudo da lei</a>
       <a href="#">Sobre</a>
       <a @click="goPage('admin?create=true')">Admin</a>
     </nav>
     <div class="btngroup">
       <!-- <v-btn variant="plain" class="filter" icon="mdi-filter"  @click="activeFilter()"></v-btn> -->
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
      goHome(){
        this.$router.push('/')
      },
      goPage(url){
        this.$router.replace(`${url}`)
      }
    }
  }
</script>

<style scoped>
.containerHead{
  background: rgb(32,36,32);
background: -moz-linear-gradient(90deg, rgba(32,36,32,1) 0%, rgba(102,111,102,0.22220763305322133) 30%, rgba(102,111,102,1) 60%, rgba(83,93,83,1) 68%, rgba(32,36,32,1) 100%);
background: -webkit-linear-gradient(90deg, rgba(32,36,32,1) 0%, rgba(102,111,102,0.22220763305322133) 30%, rgba(102,111,102,1) 60%, rgba(83,93,83,1) 68%, rgba(32,36,32,1) 100%);
background: linear-gradient(90deg, rgba(32,36,32,1) 0%, rgba(102,111,102,0.22220763305322133) 30%, rgba(102,111,102,1) 60%, rgba(83,93,83,1) 68%, rgba(32,36,32,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#202420",endColorstr="#202420",GradientType=1);
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
  justify-content: left;
  align-items: center;
  background: url(../../assets/books.png);
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  height: 100%;
}
h1{
  font-size: 4.5rem;
  line-height: 1.1;
  margin: 0;
  width: 12ch;
  -webkit-text-stroke-width: .01rem;
  -webkit-text-stroke-color: #000;
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
  h1{
    font-size: 3rem;
  }
}
</style>
