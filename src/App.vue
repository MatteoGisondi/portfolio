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
import Header from "@/components/Header.vue";
import router from "@/router";

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
    router,
});
</script>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
}

.header {
    flex: 0 0 auto;
}

@media screen and (max-width: 800px) {
    body {
        overflow-x: hidden;
    }
}
</style>
