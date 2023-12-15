<template>
    <div class="manga-wrapper">
        <div class="manga-item" v-for="manga in mangas" :key="manga.id">
        <MangaCard :manga="manga" />
        <manga-info/>
    </div>
    </div>

</template>

<script>
import MangaCard from './MangaCard.vue';
import { ref } from 'vue';
import axios from "axios";
import MangaInfo from './MangaInfo.vue';

export default {
    components: { MangaCard, MangaInfo },
    props: {
        category: {
            type: String,
            required: true
        },
        terms: {
            type: String,
            required: true
        }
    },
    setup(props) {
    let mangas = ref();
    let category = props.category;
    let name = props.terms;
    const getManga = async () => {

        if(category && name){
            const result = await axios.get("https://kitsu.io/api/edge/anime?filter[text]=" + name + "&filter[categories]=" + category + "page[limit]=5&page[offset]=0");
            mangas.value = result.data.data;
            
        }else if(name){
            const result = await axios.get("https://kitsu.io/api/edge/anime?filter[text]=" + name + "&page[limit]=5&page[offset]=0");
            mangas.value = result.data.data;
        }else if(category){
            const result = await axios.get("https://kitsu.io/api/edge/anime?filter[categories]=" + category + "&page[limit]=5&page[offset]=0");
            mangas.value = result.data.data;
        }else {
            const result = await axios.get("https://kitsu.io/api/edge/trending/anime");
            mangas.value = result.data.data.slice(0,5);
        }
        
        


    }

    getManga();



return {
mangas
}


}
}
</script>

<style>
    .manga-wrapper {
        display: grid;
        grid-template-columns: repeat(5, 150px);
        gap: 30px;
    }

    .manga-item {
        position: relative;
        width: fit-content;
        font-family: Poppins;
        transition: all .2s ease;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    }


    .manga-item:hover > .manga-info {
        opacity: 1;
    }

    .manga-item p {
        width: 150px;
    }

    .manga-item img {
        width: 150px;
    }

    .manga-info {
        background: white;
        position: absolute;
        display: block;
        opacity: 0;
        right: -90px;
        top: 90px;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        z-index: 10;
        border-radius: 10px;
        transition: all .2s ease;
    }
</style>