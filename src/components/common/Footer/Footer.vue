<template>
  <footer class="footer">
    <VpContainer>
      <div class="grid">
        <ul class="list">
          <li v-for="item in items" :key="item.text">
            <router-link :to="item.href" class="link">
              {{ item.text }}
            </router-link>
          </li>
        </ul>

        <p class="text">
          <slot></slot>
        </p>
      </div>
    </VpContainer>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import type { PropType } from 'vue'
import { VpContainer } from '@/components/common/Container'

interface FooterItem {
  text: string
  href: string
  newTab?: boolean
}

export default Vue.extend({
  name: 'VpFooter',

  components: { VpContainer },

  props: {
    items: { type: Array as PropType<FooterItem[]>, required: true },
  },
})
</script>

<style scoped>
.footer {
  border-top: 2px solid var(--color-gray);
  padding: 2rem 0;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
}

@media (max-width: 940px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
  /* even out padding within links */
  margin-top: -0.25rem;
}

.list > :not(:last-child) {
  margin-bottom: 0.25rem;
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
</style>
