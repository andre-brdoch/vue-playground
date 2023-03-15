<template>
  <a v-if="isExternal" :href="to" :target="target">
    <slot></slot>
  </a>
  <router-link v-else :to="to" :target="target">
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'VpLink',

  props: {
    to: { type: String, required: true },
    newTab: { type: Boolean, default: false },
  },

  data() {
    return {
      isExternal: this.to.startsWith('http'),
      target: this.newTab ? '_blank' : '',
    }
  },
})
</script>
