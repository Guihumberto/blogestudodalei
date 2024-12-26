<template>
    <header>
        <div class="header">
            <nav>
                <ul>
                    <li> <span class="fas fa-house space-icon"></span><NuxtLink to="/">Início</NuxtLink></li>
                    <li><NuxtLink to="/blog">Blog</NuxtLink></li>
                    <li><NuxtLink to="/about">Sobre</NuxtLink> </li>
                    <li><NuxtLink to="/account/profile">Perfil</NuxtLink> </li>
                </ul>
            </nav>
        </div>
    </header>

</template>
<script setup lang="ts">
</script>

<style scoped>
header{
    width: 100%;
}
.header{
    width: min(100%, 1080px);
    margin-inline: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: .5rem;
    padding: .5rem;
}
.header ul {
    display: flex;
    gap: 1rem;
}
.space-icon{
    margin-right: .3rem;
    font-size: 12px;
}
ul li {
    transition: .5s ease;
    display: flex;
    align-items: baseline;

}
ul li:hover{
    color: #f97316;
    text-decoration: underline;
}
</style>