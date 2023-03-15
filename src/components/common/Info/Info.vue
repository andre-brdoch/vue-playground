<template>
  <figure class="info stack">
    <div class="card stack">
      <img :src="imgSrc" :alt="imgAlt" class="img" />
      <h6 class="title">{{ name }}</h6>
      <p><b>Typical age:</b> {{ age }}</p>
      <p><b>Common in:</b> {{ emojis }}</p>
    </div>

    <figcaption class="disclaimer">
      The data displayed is just a prediction, based on the name. Read more
      about it <VpLink to="/about">here</VpLink>.
    </figcaption>
  </figure>
</template>

<script lang="ts">
import Vue from 'vue'
import type { PropType } from 'vue'
import { VpLink } from '../Link'

export default Vue.extend({
  name: 'VpInfo',

  components: { VpLink },
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
  width: 100%;
  max-width: 18rem;
  margin: 0;
  padding: 0;
}

.card {
  padding: 1rem;
  border: 2px solid var(--color-gray);
  border-radius: 4px;
  color: var(--color-text);
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

.disclaimer {
  font-size: 0.75rem;
  line-height: 1.4;
  color: var(--color-text);
}
</style>
