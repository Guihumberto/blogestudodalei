<template>
  <div>
      <h1>Novo Post</h1>
  </div>
  <div>
    <v-form>
      <v-text-field
        label="Título"
      ></v-text-field>
      <v-text-field
        label="Subtítulo"
      ></v-text-field>
      <v-textarea
        label="Parágrafo"
        variant="outlined"
      ></v-textarea>
      <div class="my-5">
        <v-btn>Incluir novo paragráfo</v-btn>
        <v-btn>Incluir citação longa com destaque</v-btn>
      </div>
      <v-btn color="primary">Enviar para Revisão</v-btn>
    </v-form>

  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

</style>
