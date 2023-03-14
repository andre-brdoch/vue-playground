<template>
  <VpAboutPage />
</template>

<script lang="ts">
import Vue from 'vue'
import { VpAboutPage } from '@/components/pages/About'

export default Vue.extend({
  name: 'VpAboutRoute',

  components: { VpAboutPage },
})
</script>
