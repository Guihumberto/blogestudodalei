<template>
  <div class="containerPostWrapper">
    <div class="title-text-blog">
      <h1>One Post</h1>
      <h2 class="text-grey">Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Cumque maxime debitis, tempora,
        ad, aliquid commodi excepturi unde tempore saepe obcaecati illum nemo autem odit sint consequuntur alias. Rerum, vitae iure!
      </h2>
      <small>Publicado em: 10 de novembro de 2023</small>
    </div>
    <div class="mt-6 author">
      <PostFor />
    </div>
    <div class="my-6 text-blog">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nesciunt velit cupiditate beatae deserunt minus excepturi cumque consequatur repellat,
        iusto nulla sunt, corporis, magni impedit itaque saepe. In distinctio cum est.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nesciunt velit cupiditate beatae deserunt minus excepturi cumque consequatur repellat,
        iusto nulla sunt, corporis, magni impedit itaque saepe. In distinctio cum est.
      </p>
      <br>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nesciunt velit cupiditate beatae deserunt minus excepturi cumque consequatur repellat,
        iusto nulla sunt, corporis, magni impedit itaque saepe. In distinctio cum est.
      </p>
      <div class="destaque">
        <p>
          "
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nesciunt velit cupiditate beatae deserunt minus excepturi cumque consequatur repellat,
        iusto nulla sunt, corporis, magni impedit itaque saepe. In distinctio cum est.
        "
        </p>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nesciunt velit cupiditate beatae deserunt minus excepturi cumque consequatur repellat,
        iusto nulla sunt, corporis, magni impedit itaque saepe. In distinctio cum est.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nesciunt velit cupiditate beatae deserunt minus excepturi cumque consequatur repellat,
        iusto nulla sunt, corporis, magni impedit itaque saepe. In distinctio cum est.
      </p>
      <br>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nesciunt velit cupiditate beatae deserunt minus excepturi cumque consequatur repellat,
        iusto nulla sunt, corporis, magni impedit itaque saepe. In distinctio cum est.
      </p>
    </div>
    <share />
    <references />
  </div>
</template>

<script>
import PostFor from './PostFor.vue'
import References from './References.vue'
import Share from './Share.vue'
  export default {
  components: { PostFor, References, Share },
  }
</script>

<style lang="scss" scoped>
.containerPostWrapper{
  max-width: 1075px;
}
.destaque{
  font-size: 2rem;
  margin: 4rem 0;
  border-top: solid grey;
  border-bottom: solid grey;
  padding: 1rem 5rem;
}
@media (max-width: 1290px){
  .containerPostWrapper{
    width: 100%;
    padding: 1rem;
  }
  .destaque{
    font-size: 2rem;
    margin: 0;
    border-top: solid grey;
    border-bottom: solid grey;
    padding: 0;
  }
}

</style>
