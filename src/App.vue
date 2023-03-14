<template>
  <div id="app" class="app">
    <nav class="stack">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
})
</script>

<style scoped>
.app {
  margin: 60px 0;
}
.stack > :not(:first-child) {
  display: block;
  margin-block-start: 1rem;
}
</style>
