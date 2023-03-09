<template>
  <div>
    <h1>Programmatically</h1>
    <div ref="target"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VpBasic from '../Basic/Basic.vue'

export default Vue.extend({
  name: 'VpBasic',

  mounted() {
    const vm = new VpBasic({
      propsData: { firstName: 'Programmatically', lastName: 'Created', age: 1 },
    })
    const target = this.$refs.target as HTMLElement
    vm.$mount(target)
  },
})
</script>
