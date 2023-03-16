<template>
  <VpContainer>
    <div class="grid">
      <form class="stack" @submit.prevent>
        <div class="stack">
          <label for="name" class="title">{{ title }}</label>
          <input id="name" v-model="name" class="input" type="text" />
        </div>

        <VpButton @click="onSubmit">Analyze name</VpButton>
      </form>

      <div v-if="!isLoading">
        <div v-if="info !== undefined" class="stack">
          <h2 class="title">Predicted profile</h2>

          <VpLink :to="`/names/${name}`" data-testid="info">
            <VpInfo v-bind="info" />
          </VpLink>
        </div>

        <p v-if="error !== undefined" class="error" data-testid="error">
          {{ error }}
        </p>
      </div>

      <transition name="fade">
        <div class="relative">
          <VpLoadingSpinner v-if="isLoading" />
        </div>
      </transition>
    </div>
  </VpContainer>
</template>

<script lang="ts">
import Vue from 'vue'
import { VpButton } from '@/components/common/Button'
import { VpInfo } from '@/components/common/Info'
import { VpContainer } from '@/components/common/Container'
import { VpLink } from '@/components/common/Link'
import { VpLoadingSpinner } from '@/components/common/LoadingSpinner'
import { NameInfoModel } from '@/models/NameInfo.model'

interface Data {
  name: string
  info: NameInfoModel | undefined
  error: string | undefined
  isLoading: boolean
}

export default Vue.extend({
  name: 'VpNameInfo',

  components: { VpLink, VpLoadingSpinner, VpContainer, VpButton, VpInfo },

  props: {
    title: { type: String, required: true },
    getInfoByName: { type: Function, required: true },
  },

  data(): Data {
    return {
      name: '',
      info: undefined,
      error: undefined,
      isLoading: false,
    }
  },

  methods: {
    async onSubmit(): Promise<void> {
      this.isLoading = true
      this.info = undefined
      this.error = undefined

      const result = await this.getInfoByName(this.name)

      if (result instanceof Error) {
        this.error = result.message || result.name || 'Something went wrong'
      } else {
        this.info = result
      }
      this.isLoading = false
    },
  },
})
</script>

<style scoped>
.stack > *:not(:last-child) {
  margin-block-end: 1rem;
  display: block;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
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

.relative {
  position: relative;
}

.loading {
  position: absolute;
  top: 4rem;
  left: 4rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
