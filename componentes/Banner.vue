<template>
    <section>
        <h2 class="title">Arcádio - Blog <span style="color: #f97316;">Tributário</span></h2>
        <p>Notícias e temas relevantes a respeito da Legislação Tributária do Estado do Maranhão.</p>
        <div class="btns-group">
            <a href="#">Legislação</a>
            <a class="mx-2" href="#">Saiba Mais</a>
        </div>
        <div>
            Buscar
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
section{
    min-height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem .5rem;
}
section .title {
    font-weight: 700;
    font-size: 2rem;
    text-align: center;
    color: #fff;
}

section p {
    max-width: 600px;
    text-align: center;
}
.btns-group {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
}
.btns-group a {
    border: 1px solid #fff;
    padding: .3rem 1rem;
    border-radius: 12px;
    transition: .5s ease;
}
.btns-group a:hover{
    background: #fff;
    color: #2563eb;
    border: 1px solid #2563eb;
}
</style>