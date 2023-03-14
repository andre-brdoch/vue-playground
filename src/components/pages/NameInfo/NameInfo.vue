<template>
  <section class="stack">
    <h1>{{ title }}</h1>

    <form class="stack" @submit.prevent>
      <div class="stack">
        <label for="name">Enter a name</label>
        <input id="name" v-model="name" class="input" type="text" />
      </div>

      <VpButton @click="onSubmit">Get age</VpButton>
    </form>

    <article v-if="info !== undefined" class="info stack">
      <p><b>Name:</b> {{ name }}</p>
      <p><b>Likely age:</b> {{ info.age }}</p>
      <p><b>Likely nationality:</b> {{ info.countries.join(', ') }}</p>
      <p><b>Likely gender:</b> {{ info.gender }}</p>
    </article>

    <p v-if="error !== undefined" class="error">{{ error }}</p>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { VpButton } from '@/components/common/Button'
import { NameInfoModel } from '@/models/NameInfo.model'

export interface AgifyProps {
  title: string
  getInfoByName: (name: string) => Promise<NameInfoModel | Error>
}

interface Data {
  name: string
  info: NameInfoModel | undefined
  error: string | undefined
}

export default Vue.extend({
  name: 'VpNameInfo',

  components: { VpButton },

  props: {
    title: { type: String, required: true },
    getInfoByName: { type: Function, required: true },
  },

  data(): Data {
    return {
      name: '',
      info: undefined,
      error: undefined,
    }
  },

  methods: {
    async onSubmit(): Promise<void> {
      this.info = undefined
      this.error = undefined

      const result = await this.getInfoByName(this.name)

      if (result instanceof Error) {
        this.error = result.message || result.name || 'Something went wrong'
      } else {
        this.info = result
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

.info {
  display: inline-block;
  padding: 1rem;
  border: 2px solid #d1d1d1;
  border-radius: 4px;
}

.error {
  color: #d61c1c;
  font-weight: bold;
}
</style>
