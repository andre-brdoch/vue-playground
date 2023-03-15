<template>
  <section>
    <VpContainer>
      <div class="stack">
        <h1>About this website</h1>
        <p>
          This website is just a playground to refresh some of my knowledge of
          <VpLink to="https://vuejs.org/" :new-tab="true">Vue.js</VpLink>, and
          play around with some libraries and techniques.
        </p>
        <p>
          The predictions are done using the following APIs, and were simply
          chosen since they are free to use:
        </p>
        <ul class="stack">
          <li>
            Age:
            <VpLink to="https://agify.io/" :new-tab="true">
              https://agify.io/
            </VpLink>
          </li>
          <li>
            Nationalities:
            <VpLink to="https://nationalize.io/" :new-tab="true">
              https://nationalize.io/
            </VpLink>
          </li>
          <li>
            Gender:
            <VpLink to="https://genderize.io/" :new-tab="true">
              https://genderize.io/
            </VpLink>
          </li>
        </ul>
      </div>
    </VpContainer>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { VpContainer } from '@/components/common/Container'
import { VpLink } from '@/components/common/Link'

export default Vue.extend({
  name: 'VpAboutPage',

  components: { VpContainer, VpLink },
})
</script>

<style scoped>
.stack > *:not(:last-child) {
  margin-block-end: 1.5rem;
}
</style>
