<template>
    <a :href="source" target="_blank" rel="noopener noreferrer">
        <h1>Resume</h1>
    </a>
    <div class="content">
        <vue-pdf-embed class="pdf-embed" :source="source" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VuePdfEmbed from "vue-pdf-embed";

export default defineComponent({
    components: {
        VuePdfEmbed,
    },
    data() {
        return {
            source: "/matteo-gisondi_resume.pdf",
        };
    },
});
</script>

<style scoped>
body {
    overflow-y: scroll;
}

a {
    display: inline-block;
    position: relative;
    color: inherit;
    margin: 0 var(--spacing, 0px);
    transition: margin 0.25s;
    text-decoration: underline;
}

a:hover {
    color: black;
}

.pdf-embed {
    width: 100vw;
}

@media (min-width: 800px) {
    .content {
        padding: 0;
        margin: 0 auto;
        translate: transform(-50%, 0);
    }

    .pdf-embed {
        width: 80vw;
        max-width: 100%;
        margin: 0 auto;
    }
}
</style>
