<template>
  <button class="button" :disabled="isDisabled" @click="onClick">
    <slot>
      {{ message || 'Click me' }}
    </slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export interface ButtonProps {
  message?: string
  isDisabled: boolean
}

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
  background: var(--color-success);
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  letter-spacing: 0.03em;
  cursor: pointer;
}

.button[disabled] {
  opacity: 0.5;
  cursor: default;
}
</style>
