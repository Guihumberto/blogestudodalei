<template>
    <div class="references">
      <div>
        <h3 class="title">Legislação</h3>
        <div>
          <p v-for="item, i in 5" :key="item">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div>
        <h3  class="title">Doutrina</h3>
        <div>
          <p v-for="item, i in 5" :key="item">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div>
        <h3  class="title">Jurisprudência</h3>
        <div>
          <p v-for="item, i in 5" :key="item">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div>
        <h3  class="title">Tags</h3>
        <div>
          <v-chip
            class="mr-2"
            v-for="item, i in 5" :key="item">Lorem.</v-chip>
        </div>
      </div>
    </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
.references{
  border: 2px solid grey;
  margin: 2rem 0;
  padding: 1rem ;
}
.references div .title{
  border-bottom: .5px solid grey;
  margin: 1rem 0;
}

</style>
