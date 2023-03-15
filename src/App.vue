<template>
  <div id="app" class="app">
    <VpNav :items="navItems" :github-url="githubUrl" />

    <main class="content">
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
        {
          text: 'Female icons created by Prosymbols Premium - Flaticon',
          href: 'https://www.flaticon.com/free-icons/female',
          newTab: true,
        },
        {
          text: 'Male icons created by Freepik - Flaticon',
          href: 'https://www.flaticon.com/free-icons/male',
          newTab: true,
        },
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

.content {
  flex-grow: 1;
  margin: 4rem 0;
}
</style>
