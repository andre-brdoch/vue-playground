<template>
  <div>
    <h1>Programmatically</h1>
    <div ref="target"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppPerson from '../AppPerson/AppPerson.vue'

export default Vue.extend({
  name: 'AppProgrammatic',

  mounted() {
    const vm = new AppPerson({
      propsData: { firstName: 'Programmatically', lastName: 'Created', age: 1 },
    })
    const target = this.$refs.target as HTMLElement
    vm.$mount(target)
  },
})
</script>
