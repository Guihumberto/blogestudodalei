<template>
  <div class="wrapperAllPosts">
    <div class="posts">
      <div class="post" v-for="i in 5" :key="i">
        <div class="imgPost">
          Imagem
        </div>
        <div>
          <div class="mb-2">
            <h2>Alteração do art. 18 do CTN </h2>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h4>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Odio molestiae voluptatem fugiat sequi temporibus dignissimos sapiente voluptas ad eligendi, q
             uidem rerum. Accusantium nobis sequi laudantium magni ea delectus debitis nulla?
          </p>
          <small class="mt-5">publicado em: 12 de janeiro de 2023</small>
        </div>
      </div>
      <v-btn class="mt-10" color="black" width="50%">VEja Mais</v-btn>
    </div>
    <div class="tag">
      <author />
      <disciplinas />
      <subjects />
      <tags />
    </div>
  </div>
</template>

<script>
import Author from './Author.vue'
import Disciplinas from './Disciplinas.vue'
import Tags from './Tags.vue'
import Subjects from './Subjects.vue'
  export default {
    components:{
      Subjects,
      Disciplinas,
      Author,
      Tags,
    }
  }
</script>

<style scoped>
.wrapperAllPosts {
  display: flex;
  justify-content: center;
  align-items: first baseline;
  width: 100vw;
  margin: 1rem 0;
}
.posts{
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.post{
  width: 80%;
  padding: 2rem 1rem;
  display: flex;
  justify-content: left;
  justify-items: center;
  border-bottom: 1px solid grey;
  transition: .6s ease;
}
.post:hover{
  background: rgb(230, 234, 238);
  cursor: pointer;
}
.imgPost{
  width: 15rem;
  height: 9rem;
  margin-right: 1rem;
  border: 1px solid grey;
  padding: 1rem;
  border-radius: 16px;
}

.tag{
  max-width: 300px;
  border: 2px solid #e7cdcd;
  min-height: 100px;
  border-radius: 12px;
  padding: .5rem;
  background: #2E3440;
  color: aliceblue;
}
@media (max-width: 1558px){
  .posts{
    max-width: 1280px;
  }
  .post{
    padding: 2rem 0;
    width: 95%;
  }
}
@media (max-width: 624px){
  .tag{
    display: none;
  }
}
@media (max-width: 500px){
  .imgPost{
    display: none;
  }
}
</style>
