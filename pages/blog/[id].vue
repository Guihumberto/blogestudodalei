<template>
    <div class="wrapper-post-container">
        <div class="links-route">
            <NuxtLink to="/" class="link"> Voltar</NuxtLink>
            <NuxtLink to="/blog/3" class="link">Ver a próxima</NuxtLink>
        </div>
       <div class="line"></div>
       <div v-if="pending">
        Carregando ...
       </div>
       <div v-else-if="error" class="text-red-600">
        <span class="fas fa-exclamation-circle"></span>
        Erro no carregamento do post.
       </div>
       <div v-else class="post-content">
            <Head>
                <Title>{{ post.title }}</Title>
                <Meta name="description" :content="post.title" />
                <Meta name="keywords" :content="post.title" />
                <Meta name="og:description" :content="post.title" />
                <Meta name="og:title" :content="post.title" />
                <Meta name="og:url" :content="'http://localhost/3000/post/'+post.id" />
            </Head>
           <div class="post-container">
               <div class="author-time">
                Criado em 10 de janeiro de 2025, por João Ribeiro.
               </div>
                <h1 class="title">{{ post.title}}</h1>
                <h5 class="subtitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae id eaque culpa veritatis consequatur saepe totam ducimus dolore odit sint.</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic numquam illum, aliquid eum dolore earum praesentium, 
                    assumenda nisi ad blanditiis voluptatem ea officiis, rem quis! Modi tempora inventore deleniti iure.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic numquam illum, aliquid eum dolore earum praesentium, 
                    assumenda nisi ad blanditiis voluptatem ea officiis, rem quis! Modi tempora inventore deleniti iure.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic numquam illum, aliquid eum dolore earum praesentium, 
                    assumenda nisi ad blanditiis voluptatem ea officiis, rem quis! Modi tempora inventore deleniti iure.
                </p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic numquam illum, aliquid eum dolore earum praesentium, 
                    assumenda nisi ad blanditiis voluptatem ea officiis, rem quis! Modi tempora inventore deleniti iure.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic numquam illum, aliquid eum dolore earum praesentium, 
                    assumenda nisi ad blanditiis voluptatem ea officiis, rem quis! Modi tempora inventore deleniti iure.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic numquam illum, aliquid eum dolore earum praesentium, 
                    assumenda nisi ad blanditiis voluptatem ea officiis, rem quis! Modi tempora inventore deleniti iure.
                </p>
                <div class="tags">
                    <span class="tag" v-for="tag, t in post.textfield">{{ tag }}</span>
                </div>
                <div class="references">
                    <h3>Legislação de Referência</h3>
                    <div>
                        lista
                    </div>
                </div>
                <div class="links-route">
                    <NuxtLink to="/" class="link"> Voltar</NuxtLink>
                    <NuxtLink to="/blog/3" class="link">Ver a próxima</NuxtLink>
                </div>
                <a class="link" @click.prevent="refetchData()">Atualizar Post</a>
           </div>
           <div class="created">
            <h3>Nome</h3>
            <h4>Cargo</h4>
            <p>Sobre</p>
           </div>
       </div>
       <div class="line"></div>
    </div>

</template>
<script setup lang="ts">
    import { useRoute } from 'vue-router';
    const route = useRoute()
    const config = useRuntimeConfig()
    const apiBase = config.public.apiBase

    const { data:post, pending, error, refresh } = await useAsyncData(`posts_p${route.params.id}`, () => $fetch(`${apiBase}/posts/${route.params.id}`), {
        lazy: true, 
        server: true, 
        default: () => [],
        transform: (data) => {
            data.textfield = ['ICMS', 'beneficio']
            return data
        }
    })

    const refetchData = async () => {
        await refresh()
    }
</script>

<style scoped>
.line {
    width: min(600px, 80%);
    height: .5rem;
    background: #1d4ed8;
    margin: 2rem auto;
    border-radius: 16px;
}
.post-content {
    display: flex;
}
.created {
    width: 800px;
    margin-left: .5rem;
    background: #EAEAEA;
    padding: .5rem;
    text-align: center;
}
.author-time {
    display: flex;
    height: 1rem;
    width: 100%;
    border-left: 3px solid grey;
    align-items: center;
    padding: .5rem .3rem;
    background: rgb(236, 233, 233);
    font-size: .8rem;
}

.post-container .tags {
    display: flex;
    gap: .2rem;
    margin: 1rem 0 ;
}

.post-container .tag{
    font-size: 11px;
    padding: .2rem .4rem;
    border-radius: 12px ;
    background: #1e40af;
    color: #fff;
}
.post-container .subtitle {
    margin-bottom: .8rem;
    font-size: 1.2rem;
    color: #4a4848;
}
.post-container .title {
    font-size: 2rem;
    font-weight: 600;
}
p {
    margin-bottom: .8rem;
}
.links-route {
    display: flex;
    gap: .5rem;
    margin-top: 1rem;
}
.link {
    border: 1px solid rgb(213, 207, 207);
    color: rgb(164, 158, 158);
    margin-bottom: .5rem;
    border-radius: 12px;
    padding: .3rem;
    font-size: 14px;
    transition: .5s ease;
}
.link:hover {
    border: 1px solid rgb(85, 80, 80);
    color: rgb(76, 73, 73);
}
@media (max-width: 800px) {
    .wrapper-post-container{
        padding: 0 1rem;;
    }
    .created{
        display: none;
    }
}
</style>