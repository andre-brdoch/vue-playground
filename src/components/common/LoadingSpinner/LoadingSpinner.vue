<template>
  <div class="spinner"></div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'VpLoadingSpinner',
})
</script>

<style scoped>
.spinner,
.spinner:before,
.spinner:after {
  --_spinner-animation-duration: 2s;
  --_spinner-animation-easing: cubic-bezier(0.65, 0, 0.35, 1);
  box-sizing: border-box;
}

.spinner {
  width: 2rem;
  aspect-ratio: 1/1;
  position: relative;
  animation: spin var(--_spinner-animation-duration) infinite
    var(--_spinner-animation-easing);
  animation-fill-mode: forwards;
}

.spinner:before,
.spinner:after {
  content: '';
  display: block;
  position: absolute;
  width: 2rem;
  aspect-ratio: 1/1;
  animation: counter-spin var(--_spinner-animation-duration) infinite
    var(--_spinner-animation-easing);
}

.spinner:before {
  background-color: var(--color-success);
  top: 0;
  left: 0;
  translate: -50% -50%;
}

.spinner:after {
  background-color: var(--color-gray);
  bottom: 0;
  right: 0;
  translate: 50% 50%;
}

@keyframes spin {
  0% {
    rotate: 0deg;
  }
  25% {
    rotate: 90deg;
  }
  50% {
    rotate: 180deg;
  }
  75% {
    rotate: 270deg;
  }
  100% {
    rotate: 360deg;
  }
}

@keyframes counter-spin {
  0% {
    rotate: 0deg;
  }
  25% {
    rotate: -180deg;
  }
  50% {
    rotate: -360deg;
  }
  75% {
    rotate: -540deg;
  }
  100% {
    rotate: -720deg;
  }
}
</style>
