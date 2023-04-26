<template>
    <div class="wrapper">
        <Header :title="pageTitle" class="header" />
        <main>
            <component :is="currentView" />
        </main>
    </div>
</template>

<script lang="ts">
import Home from "./views/Home.vue";
import Contact from "./views/Contact.vue";
import Projects from "./views/Projects.vue";
import Resume from "./views/Resume.vue";
import NotFound from "./views/NotFound.vue";

import Header from "./components/Header.vue";
import { defineComponent } from "vue";

const routes: Record<string, any> = {
    "/": Home,
    "/contact": Contact,
    "/projects": Projects,
    "/resume": Resume,
};

export default defineComponent({
    name: "App",
    data() {
        return {
            pageTitle: "Matteo Gisondi",
            currentPath: window.location.hash,
        };
    },
    components: {
        Header,
    },
    computed: {
        currentView(): any {
            return routes[this.currentPath.slice(1) || "/"] || NotFound;
        },
    },
    mounted() {
        window.addEventListener("hashchange", () => {
            this.currentPath = window.location.hash;
        });
        this.currentPath = window.location.hash;
    },
});
</script>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.header {
    flex: 0 0 auto;
}
</style>
