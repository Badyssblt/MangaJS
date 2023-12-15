<template>
  <Header/>
  <SearchBar @category="handleCategory" @terms="handleTerms"/>
  <div class="search-section"  :key="terms + category" v-if="terms + category">
    <MangaRow :category="category" :terms="terms"/>
  </div>
  <div class="anime-section" v-show="!terms" v-if="!category">
    <div class="trending" >
      <p class="manga-section-title">Animé du moment</p>
      <MangaRow category="" terms=""/>
    </div>
    <div class="adventure" >
      <p class="manga-section-title">Aventure</p>
      <MangaRow category="adventure" terms=""/>
    </div>
    <div class="action" >
      <p class="manga-section-title">Action</p>
      <MangaRow category="action" terms=""/>
    </div>
</div>

  
</template>

<script>
import MangaCard from './components/MangaCard.vue';
import Header from './components/Header.vue';
import MangaRow from './components/MangaRow.vue';
import SearchBar from './components/SearchBar.vue';
import { ref, watch } from "vue";
export default {
    name: "App",
    setup(props) {
      let category = ref();
      let terms = ref();
      


      const handleCategory = (newCategory) => {
        category.value = newCategory;
        console.log(category.value);
      } 

      watch(terms, () => {

      })

      const handleTerms = (newTerms) => {
        terms.value = newTerms;
        console.log(terms.value);
      }

      return {
        category,
        handleCategory,
        handleTerms,
        terms
      }
    },
    components: {
    MangaCard,
    Header,
    MangaRow,
    SearchBar
    }
   
}
</script>
  
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
body {
  display: flex;
  justify-content: center;
}
.manga-section-title {
  font-family: Poppins;
  font-weight: bold;
}
</style>
