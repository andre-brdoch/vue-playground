<template>
  <section class="stack">
    <VpContainer>
      <h1 class="error">{{ title }}</h1>
      <p v-if="description !== undefined">{{ description }}</p>
    </VpContainer>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { VpContainer } from '@/components/common/Container'

export default Vue.extend({
  name: 'VpErrorPage',

  components: { VpContainer },
  props: {
    title: { type: String, required: true },
    description: { type: String || undefined, default: undefined },
  },
})
</script>

<style scoped>
.stack > *:not(:last-child) {
  margin-block-end: 1rem;
  display: block;
}

.error {
  color: var(--color-danger);
  font-weight: bold;
}
</style>
