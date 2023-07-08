<template>
    <div class="wrapper">
        <Header :title="pageTitle" class="header" />
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import router from "./router";

export default defineComponent({
    name: "App",
    data() {
        return {
            pageTitle: "Matteo Gisondi",
        };
    },
    components: {
        Header,
    },
    router, // Use the router in the component
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

@media (max-width: 800px) {
    .wrapper {
        margin: 0;
    }

    body {
        overflow-x: hidden;
    }
}
</style>
