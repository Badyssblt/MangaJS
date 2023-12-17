import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Anime from "@/views/Anime.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/anime", component: Anime },
  ],
});

export default router;
