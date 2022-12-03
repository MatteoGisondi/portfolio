<template>
  <a class="resume" :href="source">
    <h1>Resume</h1>
  </a>
  <div class="content">
    <vue-pdf-embed :source="source" />
  </div>
</template>

<script>
import VuePdfEmbed from 'vue-pdf-embed'

export default {
  components: {
    VuePdfEmbed,
  },
  data() {
    return {
      source: '/matteo-gisondi_resume.pdf',
    }
  },
}
</script>

<style>
body {
  overflow-y: scroll;
}

.resume {
  display: inline-block;
  position: relative;
  color: inherit;
  margin: 0 var(--spacing, 0px);
  transition: margin 0.25s;
}

vue-pdf-embed {
  size-adjust: unset;
}

div .vue-pdf-embed {
  margin-bottom: 8px;
  scale: 225%;
  position: relative;
  top: 30em;
  padding: 2em 0em 2em 0em;
}
</style>
