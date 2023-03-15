<template>
  <section>
    <VpContainer>
      <VpInfo v-bind="info" />
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
