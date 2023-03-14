<template>
  <div id="app" class="app">
    <VpNameInfo title="Tell me your name" :get-info-by-name="getInfoByName" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VpNameInfo } from './components/pages/NameInfo'
import { analyzeName } from './controllers/NameInfo.controller'

export default Vue.extend({
  name: 'App',

  components: {
    VpNameInfo,
  },

  methods: {
    clicked() {
      console.log('clicked dat button')
    },

    getInfoByName: analyzeName,
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
