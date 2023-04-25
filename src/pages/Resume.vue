<template>
    <a :href="source" target="_blank" rel="noopener noreferrer">
        <h1>Resume</h1>
    </a>
    <div class="content">
        <vue-pdf-embed class="pdf-embed" :source="source" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VuePdfEmbed from 'vue-pdf-embed';

export default defineComponent({
    components: {
        VuePdfEmbed,
    },
    data() {
        return {
            source: '/matteo-gisondi_resume.pdf',
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

/* Update content div styles */
.content {
    margin-bottom: 8px;
    transform: scale(2.25);
    position: relative;
    top: 30em;
    padding: 2em 0em 2em 0em;
}

/* Update PDF embed styles for different screen sizes */
.pdf-embed {
    width: 100%;
    /* Take up the whole width by default */
}

@media (min-width: 768px) {

    /* For large screens, set width to 90% */
    .pdf-embed {
        width: 90%;
    }
}

@media (max-width: 767px) {

    /* For mobile screens, set width to 100% */
    .pdf-embed {
        width: 100%;
    }
}
</style>
