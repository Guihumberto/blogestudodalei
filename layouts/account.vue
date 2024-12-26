<template>
    <div>
        <AppHeader />
        <div class="content">
            <slot />
        </div>
        <AppFooter />
    </div>
</template>

<script setup lang="ts">
import AppFooter from '~/componentes/AppFooter.vue';
import AppHeader from '~/componentes/AppHeader.vue';


</script>

<style scoped>
</style>