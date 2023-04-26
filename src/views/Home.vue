<template>
    <h1>Summary</h1>
    <div class="content">
        <Cards />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cards from "../components/Cards.vue";

export default defineComponent({
    components: {
        Cards,
    },
});

export type HomeType = ReturnType<typeof defineComponent>;
</script>

<style scoped></style>
