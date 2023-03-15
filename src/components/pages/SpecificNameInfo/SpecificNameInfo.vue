<template>
  <section>
    <VpContainer>
      <div class="stack">
        <h1 class="title">Predicted profile for name "{{ info.name }}"</h1>
        <VpInfo v-bind="info" />
      </div>
    </VpContainer>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { VpInfo } from '@/components/common/Info'
import { VpContainer } from '@/components/common/Container'

export default Vue.extend({
  name: 'VpSpecificNameInfoPage',

  components: { VpContainer, VpInfo },

  props: {
    info: { type: Object, required: true },
  },
})
</script>

<style scoped>
.stack > *:not(:last-child) {
  margin-block-end: 1rem;
  display: block;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
