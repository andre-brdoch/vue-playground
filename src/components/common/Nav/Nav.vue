<template>
  <nav class="nav">
    <VpContainer>
      <div class="grid">
        <ul class="list">
          <li v-for="item in items" :key="item.text">
            <VpLink :to="item.href" :new-tab="item.newTab" class="link">
              {{ item.text }}
            </VpLink>
          </li>
        </ul>

        <a v-if="githubUrl" :href="githubUrl" target="_blank">
          <img
            src="@/assets/github-mark.svg"
            alt="github repository"
            class="github"
          />
        </a>
      </div>
    </VpContainer>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import type { PropType } from 'vue'
import { VpContainer } from '@/components/common/Container'
import { VpLink } from '@/components/common/Link'

interface NavItem {
  text: string
  href: string
  newTab?: boolean
}

export default Vue.extend({
  name: 'VpNav',

  components: { VpLink, VpContainer },

  props: {
    items: { type: Array as PropType<NavItem[]>, required: true },
    githubUrl: { type: String || undefined, default: undefined },
  },
})
</script>

<style scoped>
.nav {
  border-bottom: 2px solid var(--color-gray);
  padding: 1rem 0;
}

.grid {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
}

.list {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.link,
.text {
  display: block;
  color: inherit;
  letter-spacing: 0.02em;
  line-height: 1.6;
  margin: 0;
  padding: 0;
}

.github {
  width: 100%;
  max-width: 2rem;
}

@media (max-width: 767px) {
  .list {
    gap: 1rem;
  }

  .github {
    display: none;
  }
}
</style>
