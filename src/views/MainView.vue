<template>
    <main>
        <Summary id="summary" />
        <Projects id="projects" />
        <Resume id="resume" />
        <Links id="links" />
    </main>
</template>

<script lang="ts">
import Projects from "@/components/Projects.vue";
import Resume from "@/components/Resume.vue";
import Links from "@/components/Links.vue";
import Summary from "@/components/Summary.vue";

export default {
    components: {
        Summary,
        Projects,
        Resume,
        Links,
    },
};
</script>
