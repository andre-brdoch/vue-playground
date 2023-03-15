<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'VpContainer',
})
</script>

<style scoped>
.container {
  max-width: 70rem;
  padding: 0 2rem;
  margin: 0 auto;
}
</style>
