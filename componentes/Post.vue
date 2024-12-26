<template>
    <div>
        <article class="post">
            <span class="tag">ICMS</span>
            <h3 class="title">{{ post.title }}</h3>
            <h5 class="subtitle">Lorem ipsum dolor sit amet.</h5>
            <p class="texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, amet. Architecto nostrum obcaecati 
                repellat inventore quasi consequuntur harum quas, iste mollitia officia, eveniet distinctio iusto ullam delectus ipsam laboriosam quod.</p>
            <div class="created">
                <div>
                    <time class="created-time">Criado na Segunda-feira, 10 de maio de 2024, </time>
                    <span class="created-name"> por João Ribeiro.</span>
                </div>
                <NuxtLink class="created-link" :to="`/blog/${post.id}`">Ler o Post</NuxtLink>
            </div>
        </article>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        post: {
            type: Object,
            required: true
        }
    })
</script>

<style scoped>
.post {
    margin-bottom: .5rem;
    background: #EFEFEF; 
    padding: 1rem;
}
.post .tag{
    font-size: 11px;
    padding: .2rem .4rem;
    border-radius: 12px ;
    background: #1e40af;
    color: #fff;
}
.subtitle {
    margin-bottom: .8rem;
    font-size: 1.2rem;
    color: #4a4848;
}
.post .title {
    font-size: 2rem;
    font-weight: 600;
}
.created {
    margin-top: .8rem;
    display: flex;
    justify-content: space-between;
}

.created-time, .created-name {
    font-size: .8rem;
}

.created-link {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1e40af;
    color: #fff;
    padding:  .2rem .5rem;
    border-radius: 15px;
}
@media (max-width: 800px) {
    .created {
        flex-direction: column;
    }
    .created-link {
        margin-top: 1rem;
    }
}
</style>