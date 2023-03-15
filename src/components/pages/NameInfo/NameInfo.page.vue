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

    <router-link
      v-if="info !== undefined"
      :to="`/names/${name}`"
      data-testid="info"
    >
      <VpInfo v-bind="info" />
    </router-link>

    <p v-if="error !== undefined" class="error" data-testid="error">
      {{ error }}
    </p>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { VpButton } from '@/components/common/Button'
import { VpInfo } from '@/components/common/Info'
import { NameInfoModel } from '@/models/NameInfo.model'

interface Data {
  name: string
  info: NameInfoModel | undefined
  error: string | undefined
}

export default Vue.extend({
  name: 'VpNameInfo',

  components: { VpButton, VpInfo },

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

.error {
  color: var(--color-danger);
  font-weight: bold;
}
</style>
