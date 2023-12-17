
<script>
export default {
    name: 'MangaCard',
    props: {
        manga: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <img :src="manga.attributes.posterImage.small" :alt="manga.attributes.canonicalTitle">
    <p>{{ manga.attributes.titles.en_jp }}</p>
</template>
  

<style>

</style>