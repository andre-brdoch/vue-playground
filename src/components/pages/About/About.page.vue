<template>
  <section>
    <VpContainer>
      <p>hello from about page</p>
    </VpContainer>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { VpContainer } from '@/components/common/Container'

export default Vue.extend({
  name: 'VpAboutPage',

  components: { VpContainer },
})
</script>
