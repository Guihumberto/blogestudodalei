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
  max-width: 100%;
}
h1{
  font-size: var(--step-3);
}
h2{
  font-size: var(--step-1);
}
.destaque{
  margin: max(5vh, 2rem) 0;
  border-top: solid grey;
  border-bottom: solid grey;

  padding: max(3vh, 1rem) 1.5rem;
  background: #333;
  color: white;
}
@media (max-width: 1290px){
  .destaque{
    margin: 0;
    border-top: solid grey;
    border-bottom: solid grey;
    padding: 0;
  }
}

</style>
