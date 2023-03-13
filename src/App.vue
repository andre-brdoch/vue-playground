<template>
  <div id="app" class="app">
    <VpHomePage
      title="Tell me your name, and I tell you how old you are."
      :get-age-by-name="getAgeByName"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VpHomePage } from './components/pages/Home'
import { agifyController } from './controllers/AgifyController'

export default Vue.extend({
  name: 'App',

  components: {
    VpHomePage,
  },

  methods: {
    clicked() {
      console.log('clicked dat button')
    },

    getAgeByName: agifyController.getAgeByName,
  },
})
</script>

<style scoped>
.app {
  margin: 60px 0;
}
.app > :not(:first-child) {
  margin-block-start: 1rem;
}
</style>
