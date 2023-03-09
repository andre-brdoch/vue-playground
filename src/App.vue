<template>
  <div id="app" class="app">
    <AppPerson first-name="Max" last-name="Mustermann" :age="33" />
    <AppPerson first-name="Max" last-name="Mustermann" :age="33" />
    <AppProgrammatic />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppPerson from './components/AppPerson/AppPerson.vue'
import AppProgrammatic from './components/AppProgrammatic/AppProgrammatic.vue'

export default Vue.extend({
  name: 'App',
  components: {
    AppPerson,
    AppProgrammatic,
  },
})
</script>

<style scoped>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app > :not(:first-child) {
  margin-block-start: 1rem;
}
</style>
