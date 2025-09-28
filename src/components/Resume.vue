<template>
    <section>
        <a :href="href" target="_blank" rel="noopener noreferrer">
            <h1 class="section-header">Resume</h1>
        </a>
        <div class="container">
            <div class="resume-container">
                <vue-pdf-embed annotation-layer text-layer class="resume" :source="source" />
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import VuePdfEmbed from "vue-pdf-embed";
import 'vue-pdf-embed/dist/styles/annotationLayer.css';
import 'vue-pdf-embed/dist/styles/textLayer.css';

const resume_remote_url = "https://github.com/MatteoGisondi/portfolio/releases/download/latest/Matteo_Gisondi-Resume.pdf";
const resume = "/Matteo_Gisondi-Resume.pdf";

export default {
    components: {
        VuePdfEmbed,
    },
    data() {
        return {
            href: resume_remote_url,
            source: "" as string,
        };
    },
    async mounted() {
        const cachedResume = localStorage.getItem("resume");
        if (cachedResume) {
            this.source = cachedResume;
            return;
        }
        localStorage.setItem("resume", resume);
        this.source = resume;
    },
};
</script>

<style scoped>
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

.resume-container {
    padding: 0;
    margin: 0 auto;
    /* min-width: fit-content; */
    width: 100%;
}

.resume {
    width: 100%;
    margin: 0 auto;
}
</style>