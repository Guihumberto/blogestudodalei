<template>
    <div class="container mt-2">
        <div>
            <div class="my-4">
                <h1>Últimas postagens</h1>
            </div>
            <div v-if="pending">
                Carregando ...
            </div>
            <div v-else-if="error" class="text-red-600">
                <span class="fas fa-exclamation-circle"></span>
                Erro ao carregar os dados
            </div>
            <Post v-else v-for="post, i in posts" :key="i" :post="post" />
            Paginação
        </div>
        <div class="side-bar-posts" v-if="!posts">
            <div class="mt-4">
                <h1 class="mb-4">Filtros</h1>
                <div class="side-bar-filters">
                    <div>
                        Tags
                    </div>
                    <div>
                        Período
                    </div>
                    <div>
                        Criador
                    </div>
                    <div>
                        Coleção de leis
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script setup lang="ts">
    const config = useRuntimeConfig()
    import Post from '~/componentes/Post.vue';

    const apiBase = config.public.apiBase

    const { data: posts, pending, error } = await useFetch(`${apiBase}/posts`, {
        key: 'Posts Recentes', 
        server: true, 
        lazy: true, 
        default:() => [], 
        transform: (data) => data.slice(0, 5),
    })

    useHead({
        title: 'Homepage',
        meta: [
            {
                name: 'description',
                content: 'Arcádio Blog Tributário'
            },
            {
                name: 'og:tile',
                content: 'Homepage'
            },
            {
                name: 'og:description',
                content: 'Direito tributário'
            },
        ]
    })


</script>

<style scoped>
.container {
    display: flex;
    margin-inline: auto;
}
.side-bar-posts {
    width: 500px;
    margin-left: .5rem;
}
.side-bar-filters {
    background: #EFEFEF;
    width: 100%;
    padding: .5rem;
}
@media (max-width: 1000px) {
    .side-bar-posts {
        display: none;
    }
}
</style>