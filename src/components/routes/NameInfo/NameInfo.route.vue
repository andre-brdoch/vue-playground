<template>
  <VpNameInfoPage :title="title" :get-info-by-name="getInfoByName" />
</template>

<script lang="ts">
import Vue from 'vue'
import { VpNameInfoPage } from '@/components/pages/NameInfo'
import { analyzeName } from '@/controllers/NameInfo.controller'

export default Vue.extend({
  name: 'VpNameInfoRoute',

  components: {
    VpNameInfoPage,
  },

  data() {
    return { title: "What's your name?" }
  },

  methods: {
    getInfoByName: analyzeName,
  },
})
</script>
