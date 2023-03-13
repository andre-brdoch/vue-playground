<template>
  <section>
    <h1>{{ title }}</h1>

    <form class="stack" @submit.prevent>
      <div class="stack">
        <label for="name">Enter a name</label>
        <input id="name" v-model="name" class="input" type="text" />
      </div>

      <VpButton @click="onSubmit">Get age</VpButton>
    </form>

    <h2 v-if="age !== undefined">{{ age }}</h2>

    <p v-if="error !== undefined" class="error">{{ error }}</p>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { VpButton } from '@/components/common/Button'

export interface AgifyProps {
  title: string
  getAgeByName: (name: string) => Promise<number | Error>
}

interface Data {
  name: string
  age: undefined | number
  error: undefined | string
}

export default Vue.extend({
  name: 'VpHomePage',

  components: { VpButton },

  props: {
    title: { type: String, required: true },
    getAgeByName: { type: Function, required: true },
  },

  data(): Data {
    return {
      name: '',
      age: undefined,
      error: undefined,
    }
  },

  methods: {
    async onSubmit(): Promise<void> {
      this.age = undefined
      const result = await this.getAgeByName(this.name)
      if (result instanceof Error) {
        this.error = result.message || result.name || 'Something went wrong'
      } else {
        this.age = result
      }
    },
  },
})
</script>

<style scoped>
.stack > *:not(:last-child) {
  margin-block-end: 1rem;
  display: block;
}

.input {
  font-family: inherit;
  font-size: 1rem;
  color: inherit;
  padding: 0.5rem;
}

.error {
  color: #d61c1c;
  font-weight: bold;
}
</style>
