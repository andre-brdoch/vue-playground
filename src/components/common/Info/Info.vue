<template>
  <article class="info stack">
    <img :src="imgSrc" :alt="imgAlt" class="img" />
    <h6 class="title">{{ name }}</h6>
    <p><b>Typical age:</b> {{ age }}</p>
    <p><b>Common in:</b> {{ emojis }}</p>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import type { PropType } from 'vue'

export default Vue.extend({
  name: 'VpInfo',

  props: {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    countries: { type: Array as PropType<string[]>, required: true },
    gender: { type: String, required: true },
  },

  data() {
    return {
      imgSrc: require(`@/assets/${
        this.gender === 'male' ? 'man.png' : 'woman.png'
      }`),
      imgAlt: `${this.gender} avatar`,
    }
  },

  computed: {
    emojis(): string {
      return this.countries.map(countryCodeToEmoji).join(' ')
    },
  },
})

function countryCodeToEmoji(countryCode: string): string {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char: string) => 127397 + char.charCodeAt(0))
  const emoji = String.fromCodePoint(...codePoints)
  return emoji
}
</script>

<style scoped>
.stack > *:not(:last-child) {
  margin-block-end: 0.5rem;
  display: block;
}

.info {
  display: inline-block;
  padding: 1rem;
  border: 2px solid var(--color-gray);
  border-radius: 4px;
  color: var(--color-text);
  width: 100%;
  max-width: 18rem;
}

.title {
  font-size: 1.25rem;
  font-weight: bold;
}

.img {
  width: 100%;
  max-width: 5rem;
  border: 2px solid var(--color-gray);
  padding: 2px;
  border-radius: 9999px;
}
</style>
