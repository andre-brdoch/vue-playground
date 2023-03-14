<template>
  <VpNameInfo :title="title" :get-info-by-name="getInfoByName" />
</template>

<script lang="ts">
import Vue from 'vue'
import VpNameInfo from './NameInfo.vue'
import { analyzeName } from '@/controllers/NameInfo.controller'

export default Vue.extend({
  name: 'VpNameInfoPage',

  components: {
    VpNameInfo,
  },

  data() {
    return { title: 'Tell me your name' }
  },

  methods: {
    getInfoByName: analyzeName,
  },
})
</script>
