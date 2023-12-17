<template>
  <menu>
    <li><a href="/">Accueil</a></li>
    <li>Manga</li>
    <li><a href="/anime">Anime</a></li>
  </menu>
</template>

<script>
export default {

}
</script>

<style scoped>
    menu {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
    li {
        font-family: Poppins;
        list-style-type: none;
    }
</style>