<template>
  <VpInfo v-bind="info" />
</template>

<script lang="ts">
import Vue from 'vue'
import { VpInfo } from '@/components/common/Info'

export default Vue.extend({
  name: 'VpSpecificNameInfoPage',

  components: { VpInfo },

  props: {
    info: { type: Object, required: true },
  },
})
</script>
