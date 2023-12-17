<template>
    <div class="manga-wrapper">
        <div class="manga-item" v-for="manga in mangas" :key="manga.id"
            @mouseover="handleMouseOver" @mouseout="handleMouseOut">
            <MangaCard :manga="manga" />
            <manga-info :manga="manga" class="manga-info" @mouseover="handleInfoMouseOver" />
        </div>
    </div>

</template>

<script>
import MangaCard from './MangaCard.vue';
import { onMounted, ref } from 'vue';
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

    const handleMouseOver = (event) => {
        const mangaItem = event.target.closest('.manga-item');
        if (mangaItem) {
            const mangaInfo = mangaItem.querySelector('.manga-info');
            mangaInfo.style.opacity = 1;
        }
    };

    const handleMouseOut = (event) => {
        const mangaItem = event.target.closest('.manga-item');
        if (mangaItem) {
            let mangaInfo = event.relatedTarget.closest('.manga-info');
            if (mangaInfo) {
                mangaInfo.style.opacity = 0;
            } else {
                const allMangaInfos = document.querySelectorAll('.manga-info');
                allMangaInfos.forEach((info) => {
                    info.style.opacity = 0;
                });
            }
        }
    };


    const handleInfoMouseOver = (event) => {
        event.stopPropagation();
    };







    onMounted(() => {
        getManga();
    })

    return {
    mangas,
    handleMouseOver,
    handleMouseOut,
    handleInfoMouseOver
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


    .manga-item img {
        width: 150px;
    }

    .manga-info {
        padding: 10px;
        width: 280px;
        background: white;
        position: absolute;
        display: block;
        opacity: 0;
        right: -300px;
        top: 90px;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        z-index: 10;
        border-radius: 10px;
        transition: all .2s ease;
    }

</style>
