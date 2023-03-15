<template>
  <VpErrorPage v-bind="$data" />
</template>

<script lang="ts">
import Vue from 'vue'
import { VpErrorPage } from '@/components/pages/Error'

export default Vue.extend({
  name: 'Vp404Route',

  components: { VpErrorPage },

  data() {
    return {
      title: '404',
      description: 'Page not found 😢',
    }
  },
})
</script>
