<template>
  <div class="tag">
    <author />
    <disciplinas />
    <subjects />
    <tags />
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
    },
  }
</script>

<style scoped>
.tag{
  min-width: 30%;
  border: 2px solid #e7cdcd;
  min-height: 100px;
  border-radius: 6px;
  padding: .5rem;
  background: #2E3440;
  color: aliceblue;
}
h2, h3, h4{
  font-size: var(--step-1);
}
</style>
