<template>
  <form @submit.prevent="handleSearch">
    <label for="name">Recherche</label>
    <input type="text" name="name" id="name" @change="emitChangeTerms" v-model="searchTerms">
    <select v-model="selectedGenre" name="genre" id="genre" @change="emitChange">
        <option value="">Tout</option>
        <option value="action">Action</option>
        <option value="adventure">Aventure</option>
        <option value="romance">Romance</option>
    </select>
  </form>
</template>

<script>
import { ref } from "vue";
export default {
    name: "SearchBar",
    setup(props, { emit }){
        let searchTerms = ref();
        let selectedGenre = ref("");
        const emitChange = () => {
            emit("category", selectedGenre.value);
        }

        const emitChangeTerms = () => {
            emit("terms", searchTerms.value);
        }

        return {
            selectedGenre,
            searchTerms,
            emitChange,
            emitChangeTerms
        }
    }
}
</script>

<style scoped>
    label {
        font-family: Poppins;
        font-weight: bold;
    }
    input {
        margin-right: 10px;
        height: 25px;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        border: none;
        outline: none;
    }

    select {
        height: 25px;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        border: none;
        outline: none;
    }

    option {
        font-family: Poppins;
    }
</style>