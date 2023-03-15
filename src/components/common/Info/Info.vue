<template>
  <article class="info stack">
    <p><b>Name:</b> {{ name }}</p>
    <p><b>Likely age:</b> {{ age }}</p>
    <p><b>Likely nationality:</b> {{ countries.join(', ') }}</p>
    <p><b>Likely gender:</b> {{ gender }}</p>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'VpInfo',

  props: {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    countries: { type: Array, required: true },
    gender: { type: String, required: true },
  },
})
</script>

<style scoped>
.stack > *:not(:last-child) {
  margin-block-end: 1rem;
  display: block;
}

.info {
  display: inline-block;
  padding: 1rem;
  border: 2px solid #d1d1d1;
  border-radius: 4px;
}
</style>
