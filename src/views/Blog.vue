<template>
  <section class="home">
    <div class="home-content">
      <h3>Oi, eu sou </h3>
      <h1>João Humberto</h1>
      <h3>um entusiasta do <span>Desenvolvimento Web</span></h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Molestiae nulla ratione ad consectetur ipsam voluptate beatae dolore nihil rerum!
         Iusto suscipit aliquid asperiores voluptatibus voluptate.
        Deleniti tempora sint accusantium veritatis?</p>
      <div class="social-media">
        <a href="#"><v-icon icon="mdi-facebook"></v-icon></a>
        <a href="#"><v-icon icon="mdi-instagram"></v-icon></a>
        <a href="#"><v-icon icon="mdi-twitter"></v-icon></a>
        <a href="#"><v-icon icon="mdi-linkedin"></v-icon></a>
      </div>
      <a href="" class="site">Download CV</a>
    </div>
    <div class="home-img">
      <!-- <img src="https://www.insper.edu.br/wp-content/uploads/2023/03/Linguagem-de-programacao-2-shutterstock_2060615648.jpg.jpeg" alt=""> -->
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.home{
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 60px 10% 0;
}
.home-content {
  max-width: 600px;
}
.home-content h1{
  font-size: 56px;
  line-height: 1.2;
}
.home-content h3{
  font-size: 26px;
  line-height: 1.2;
}
.home-content h3 span{
  color: #37a1f2;
}
.home-content p {
  font-size: 16px;
  margin: 15px 0;
}
.social-media a{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 2px solid #37a1f2;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0 , 0, .1);
  font-size: 16px;
  margin: 5px 15px 25px 0;
  color: #37a1f2;
  transition: .6s;
}
.social-media a:hover{
  background: #37a1f2;
  color: #f0f3fd;
}
.site{
  display: inline-block;
  padding: 11px 32px;
  background: #37a1f2;
  border: 2px solid #37a1f2;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  color: #f0f3fd;
  letter-spacing: 1px;
  font-weight: 600;
  transition: .5s;
  border-radius: 40px;
}

.site:hover{
  background: transparent;
  color: #37a1f2;
}

.home-img img{
  position: absolute;
  bottom: 0;
  right: 30px;
  width: 45%;
  pointer-events: none;
}
</style>
