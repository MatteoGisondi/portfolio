<script>
import Home from './pages/Home.vue'
import Contact from './pages/Contact.vue'
import Projects from './pages/Projects.vue'
import Resume from './pages/Resume.vue'

import Header from './components/Header.vue'
import NotFound from './components/NotFound.vue'

const routes = {
  '/': Home,
  '/contact': Contact,
  '/projects': Projects,
  '/resume': Resume
}

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  components: {
    Header
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  }
}
</script>

<template>
  <Header />
  <main>
    <component :is="currentView" />
  </main>
</template>
