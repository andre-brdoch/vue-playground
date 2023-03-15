<template>
  <div id="app" class="app">
    <VpNav :items="navItems" :github-url="githubUrl" />

    <main class="grow">
      <router-view />
    </main>

    <VpFooter :items="footerItems"> TBD </VpFooter>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VpNav } from './components/common/Nav'
import { VpFooter } from './components/common/Footer'

export default Vue.extend({
  name: 'App',

  components: { VpNav, VpFooter },

  data() {
    return {
      navItems: [
        { text: 'Home', href: '/' },
        { text: 'About', href: '/about' },
      ],
      footerItems: [
        { text: 'hi', href: '/' },
        { text: 'hi 2', href: '/' },
        { text: 'hi 3', href: '/' },
      ],
      githubUrl: 'https://github.com/andre-brdoch/vue-playground',
    }
  },
})
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.grow {
  flex-grow: 1;
}
</style>
