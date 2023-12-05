<template>
  <div class="container">
    <div class="circle"></div>
    <div class="containerWrapper">
      <header>
        <h1>logo</h1>
        <nav class="navbar">
          <a href="">Home</a>
          <a href="">Sobre</a>
          <a href="">Download</a>
        </nav>
        <v-btn class="menu" icon="mdi-menu"></v-btn>
      </header>
      <div class="content">
        <div class="banner">
          <h1>Oi, eu me chamo <span class="text-red">Humberto</span>, e sou um entusiasta do Desenvolvimento Frontend</h1>
          <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reiciendis error deleniti neque nisi dignissimos corporis quasi nemo! In, animi.
          </p>
          <a href="">Download</a>
        </div>
        <div class="cards">
          <div class="card" v-for="item, i in 3" :key="i">
            <h3>title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, eos.</p>
          </div>
        </div>
      </div>
      <div class="footer">

      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
.container{
  margin: 0;
  padding: 0 1.5rem;
  box-sizing: border-box;
  background: #161E1F;
  color: #fff;
  position: relative;
}
.circle{
  position: absolute;
  background: red;
  left: 0;
  clip-path: circle(10% at 0 0);
  width: min(150%, 1350px);
  height: 1500px;
  opacity: 0;
  animation: slideTop 2s ease forwards;
  transition: 1s ease;
}

.containerWrapper{
  width: min(100%, 1250px);
  margin-inline: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 5rem;
}
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  z-index: 1;
  opacity: 0;
  animation: slidTop 2s ease forwards;
}
header nav{
  display: inline-flex;
  gap: 2.5rem;
}
@keyframes slidTop {
    0%{
      opacity: 0;
      transform: translateY(-100px);
    }
    100%{
      opacity: 1;
      transform: translateY(0);
    }
  }
nav a{
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  color: #fff;
}
.menu{
  display: none;
  opacity: 0;
  animation: slideTop 2s ease forwards;
}
.content{
  min-height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5rem;
}
.content .banner{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: left;
  width: 100%;
  min-height: 50vh;
  position: relative;
  transition: 5s ease;
  background: url('https://img.freepik.com/fotos-premium/resumo-do-circulo-futurista-de-ficcao-cientifica-brilhante-no-conceito-cibernetico-hud-headup_31965-85244.jpg');
  background-repeat: no-repeat;
  background-position: left;
  background-size: auto;
  gap: 2rem;
  animation: slideImg 5s ease forwards;
  opacity: 0;
}
@keyframes slideImg {
  0%{
    background-position: left;
    opacity: 0;
  }
  100%{
    background-position: right;
    opacity: 1;
  }
}
.banner h1{
  font-size: 3rem;
  line-height: 1.2;
}
.banner h1, .text{
  max-width: 50%;
  transition: .6s ease;
}
.banner a{
  padding: .3rem 1rem;
  color: white;
  border: 1px solid red;
  width: 10rem;
  border-radius: 25px;
  text-align: center;
  text-decoration: none;
  font-size: 1.2rem;
  background: red;
}
.cards{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  width:100%;
  gap: 1rem;
  transition: .5s ease;
  background: #283235;
  padding: 2rem 1rem;
  animation: slideImg 5s ease forwards;
  opacity: 0;
}
.card{
  width: 22rem;
  height: 10rem;
  border: 1px solid #188199;
  border-radius: 10px;
  padding: 1rem;
}
@media (max-width: 1142px) {
  .card{
    width: 30%;
  }
}
@media (max-width: 930px) {
  .banner h1, .text{
    max-width: 100%;
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
}
@media (max-width: 680px) {
  .content .banner{
    background-position: center;
    background-size: contain;
  }
  .cards{
    justify-content: center;
  }
  .card{
    width: 100%;
  }
  .space{
    display: none;
  }

}
@media (max-width: 500px) {
  .navbar{
    display: none;
  }
  .menu{
    display: block;
  }
}
</style>
