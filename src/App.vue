<template>
  <div id="app" class="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>

    <main class="grow">
      <router-view />
    </main>

    <VpFooter :items="footerItems"> TBD </VpFooter>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VpFooter } from './components/common/Footer'

export default Vue.extend({
  name: 'App',

  components: { VpFooter },

  data() {
    return {
      footerItems: [
        { text: 'hi', href: '/' },
        { text: 'hi 2', href: '/' },
        { text: 'hi 3', href: '/' },
      ],
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
