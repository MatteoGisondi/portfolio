import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Contact from "@/views/Contact.vue";
import Projects from "@/views/Projects.vue";
import Resume from "@/views/Resume.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: Home },
        { path: "/contact", component: Contact },
        { path: "/projects", component: Projects },
        { path: "/resume", component: Resume },
        { path: "/:catchAll(.*)", component: NotFound },
    ],
});

export default router;
