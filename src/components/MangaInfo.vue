<template>
  <div class="manga-info" v-if="categories">
    <p class="manga-info-">{{ manga.attributes.episodeCount }} épisodes</p>
    <p class="manga-info-rating">{{ manga.attributes.averageRating }} %</p>
    <div class="categories">
      <div class="category" v-for="category in categories" :key="category.id" >
      <p>{{ category.attributes.title }}</p> 
    </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";
export default {

  name: "MangaInfo",
  props: {
    manga: {
      type: Object,
      required: true
    }
  },
  setup(props){
      let manga = props.manga;
      let categories = ref([]);
      const getCategory = async () => {
        const result = await axios.get(manga.relationships.categories.links.related);
        categories.value = result.data.data.slice(0,3);
      }

      onMounted(getCategory);
      return {
        manga,
        categories
      }
    }
}
</script>

<style>
#synopsis {
  height: 150px;
  overflow: hidden;
}

.categories {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.category {
  height: fit-content;
  text-align: center;
  padding: 1px 5px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  background: #252422;
  border-radius: 20px;
  font-size: .8em;
}

.category p {
  margin: 0;
  color: white;
}


</style>