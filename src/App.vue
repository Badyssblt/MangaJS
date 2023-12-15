<template>
  <Header/>
  <div class="adventure">
    <p>Aventure</p>
    <MangaRow category="adventure"/>
  </div>
  <div class="action">
    <p>Action</p>
    <MangaRow category="action"/>
  </div>

  
</template>

<script>
import MangaCard from './components/MangaCard.vue';
import Header from './components/Header.vue';
import MangaRow from './components/MangaRow.vue';
export default {
    name: "App",
    setup(props) {
      
    },
    components: {
    MangaCard,
    Header,
    MangaRow
}
   
}
</script>
  
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
</style>
