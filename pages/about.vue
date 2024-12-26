<template>
    <div>
        About <br>

        <h1>Contador: {{ counter.count }}</h1>
        <button @click="increment">Incrementar</button>
        <button @click="decrement">Decrementar</button>
    </div>

</template>
<script setup lang="ts">
    import { definePageMeta } from "#imports"

    import { usePostsStore } from '~/stores/usePostsStore';
    const counter = usePostsStore();

    function increment() {
        counter.increment();
    }

    function decrement() {
        counter.decrement();
    }

    definePageMeta({
        pageTransition:{
            name: 'rotate'
        }
    })

    useSeoMeta({
        title: 'Sobre Arcádio Blog',
        description: 'About a página arcádio blog tributário',
        ogTitle: 'Sobre Arcádio Blog',
        ogDescription: 'About a página arcádio blog tributário',
        ogImage: '/imgs/logo.png'
    })
</script>

<style scoped>
.rotate-enter-active,
.rotate-leave-active {
  transition: transform 0.5s ease;
}

.rotate-enter-from {
  transform: translateX(100%);
}

.rotate-leave-to {
  transform: translateX(-100%);
}
</style>