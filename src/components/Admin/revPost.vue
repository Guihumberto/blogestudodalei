<template>
  <div>
    <div>
      <div class="title-text-blog">
      <h1>{{ post.title}}</h1>
      <h2 class="text-grey"> {{ post.subtitle }} </h2>
      <small>Publicado em: {{ post.dateCreate }}</small>
      <small> (Atualizado em: {{ post.update }})</small>
    </div>
    <div class="mt-6 author">
      <PostFor />
    </div>
    <div class="my-6 text-blog">
      <p>{{ post.text }}
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
    </div>
    </div>

  </div>
</template>

<script>
  import PostFor from '../blog/OnePost/PostFor.vue';
  export default {
    props:{
      post: Object,
    },
    components:{
      PostFor
    }
  }
</script>

<style lang="scss" scoped>

</style>
