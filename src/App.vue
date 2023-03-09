<template>
  <div id="app" class="app">
    <VpBasic first-name="Max" last-name="Mustermann" :age="33" />
    <VpViewModel first-name="Max" last-name="Mustermann" :age="33" />
    <VpRenderTemplate first-name="Render" last-name="Template" :age="33" />
    <VpProgrammatic />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VpBasic from './components/Basic/Basic.vue'
import VpViewModel from './components/ViewModel/ViewModel.vue'
import VpProgrammatic from './components/Programmatic/Programmatic.vue'
import VpRenderTemplate from './components/RenderTemplate/RenderTemplate.vue'

export default Vue.extend({
  name: 'App',
  components: {
    VpBasic,
    VpViewModel,
    VpProgrammatic,
    VpRenderTemplate,
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
