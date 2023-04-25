<template>
    <div class="wrapper">
        <Header :title="pageTitle" class="header" />
        <main>
            <component :is="currentView" />
        </main>
    </div>
</template>

<script lang="ts">
import Home from "./pages/Home.vue";
import Contact from "./pages/Contact.vue";
import Projects from "./pages/Projects.vue";
import Resume from "./pages/Resume.vue";
import NotFound from "./pages/NotFound.vue";

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
