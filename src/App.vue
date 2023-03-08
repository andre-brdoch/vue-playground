<template>
  <div id="app">
    <AppPerson first-name="Max" last-name="Mustermann" :age="33" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppPerson from './components/AppPerson/AppPerson.vue'

export default Vue.extend({
  name: 'App',
  components: {
    AppPerson,
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
