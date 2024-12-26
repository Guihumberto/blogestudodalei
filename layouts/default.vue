<template>
      <div class="container-wrapper">
            <div class="top-header">
                  <AppHeader />
                  <Banner />
            </div>
            <div class="content-wrapper">
                <slot />
            </div>
            <AppFooter />
      </div>
</template>

<script setup lang="ts">
import AppFooter from '~/componentes/AppFooter.vue';
import AppHeader from '~/componentes/AppHeader.vue';
import Banner from '~/componentes/Banner.vue';

</script>

<style scoped>
.top-header {
      background: #2563eb; 
      color: #fff;
}
</style>