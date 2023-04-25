<template>
    <vue-pdf-embed :source="source" />
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
        }
    },
});
</script>
