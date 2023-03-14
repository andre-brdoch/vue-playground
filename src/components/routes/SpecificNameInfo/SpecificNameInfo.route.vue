<template>
  <VpSpecificNameInfoPage v-if="info !== undefined" :info="info" />
</template>

<script lang="ts">
import Vue from 'vue'
import { VpSpecificNameInfoPage } from '@/components/pages/SpecificNameInfo'
import { analyzeName } from '@/controllers/NameInfo.controller'
import { NameInfoModel } from '@/models/NameInfo.model'

interface Data {
  info: NameInfoModel | undefined
}

export default Vue.extend({
  name: 'VpSpecificNameInfoRoute',

  components: { VpSpecificNameInfoPage },

  data(): Data {
    return {
      info: undefined,
    }
  },

  mounted() {
    console.log(this.$route.params.name)

    analyzeName(this.$route.params.name).then(result => {
      if (result instanceof Error) {
        // TODO
        console.log('404!')
        return
      }
      this.info = result
    })
  },
})
</script>
