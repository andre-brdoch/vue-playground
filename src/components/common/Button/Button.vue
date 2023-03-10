<template>
  <button class="button" :disabled="isDisabled" @click="onClick">
    <slot>
      {{ message || 'Click me' }}
    </slot>

    <slot name="icon"> icon </slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'VpButton',

  props: {
    message: { type: String || undefined, default: undefined },
    isDisabled: { type: Boolean, default: false },
  },

  methods: {
    onClick() {
      this.$emit('click')
    },
  },
})
</script>

<style scoped>
.button {
  display: inline-block;
  padding: 1rem 2rem;
  background: #3f701f;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  letter-spacing: 0.03em;
  cursor: pointer;
}
</style>
