<template>
  <div class="containerPostWrapper">
    <div class="title-text-blog">
      <h1>{{ post.title }}</h1>
      <h2 class="text-grey">{{ post.subtitle }}
      </h2>
      <small>Publicado em: {{ formatteDate(post.dateCreate) }}</small>
    </div>
    <div class="mt-6 author">
      <PostFor :author="post.author" />
    </div>
    <div class="my-6 text-blog">
      <div v-html="post.text"></div>
    </div>
    <share />
    <references />
  </div>
</template>

<script>
import PostFor from './PostFor.vue'
import References from './References.vue'
import Share from './Share.vue'

import moment from 'moment'
import 'moment/locale/pt-br'


  export default {
    components: { PostFor, References, Share },
    props:{
      post:Object
    },
    methods:{
      formatteDate(item){
          return moment(item).locale('pt-br').format('DD/MM/YYYY')
        }
    }
  }
</script>

<style lang="scss" scoped>
.containerPostWrapper{
  max-width: 100%;
  animation: slideTop 1s ease forwards;
  opacity: 0;
}
h1{
  font-size: var(--step-3);
  margin: 0;
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
@media (max-width: 1005px) {
  .containerPostWrapper{
    margin: 0 1rem;
  }
}

</style>
