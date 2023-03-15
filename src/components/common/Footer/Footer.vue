<template>
  <footer class="footer">
    <VpContainer>
      <ul class="list">
        <li v-for="item in items" :key="item.text">
          <VpLink :to="item.href" class="link" :new-tab="item.newTab">
            {{ item.text }}
          </VpLink>
        </li>
      </ul>
    </VpContainer>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import type { PropType } from 'vue'
import { VpContainer } from '@/components/common/Container'
import { VpLink } from '@/components/common/Link'

interface FooterItem {
  text: string
  href: string
  newTab?: boolean
}

export default Vue.extend({
  name: 'VpFooter',

  components: { VpContainer, VpLink },

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

.list {
  display: flex;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
  /* even out padding within links */
  margin-top: -0.25rem;
}

.list > :not(:last-child) {
  margin-bottom: 0.25rem;
}

.link {
  display: block;
  color: inherit;
  letter-spacing: 0.02em;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  font-size: 0.75rem;
}
</style>
