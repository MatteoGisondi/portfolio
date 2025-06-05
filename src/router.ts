import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Links from "@/views/Links.vue";
import Projects from "@/views/Projects.vue";
import Resume from "@/views/Resume.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: Home },
        { path: "/links", component: Links },
        { path: "/projects", component: Projects },
        { path: "/resume", component: Resume },
        { path: "/:catchAll(.*)", component: NotFound },
    ],
});

export default router;
