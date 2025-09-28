<template>
    <Header :title="pageTitle" class="header" />
    <a></a>
    <router-view></router-view>
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
import router from "@/router";

export default {
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
};
</script>
