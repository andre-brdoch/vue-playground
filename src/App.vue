<template>
  <div id="app" class="app">
    <VpButton :is-disabled="false" @click="clicked">
      test
      <template slot="icon">named slot here!</template>
    </VpButton>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VpButton } from './components/common/Button'

export default Vue.extend({
  name: 'App',

  components: {
    VpButton,
  },

  methods: {
    clicked() {
      console.log('clicked dat button')
    },
  },
})
</script>

<style scoped>
.app {
  text-align: center;
  margin: 60px 0;
}
.app > :not(:first-child) {
  margin-block-start: 1rem;
}
</style>
