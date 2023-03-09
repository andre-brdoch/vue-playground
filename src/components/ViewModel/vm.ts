import Vue from 'vue'

export default Vue.extend({
  name: 'VpViewModel',

  props: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number || undefined, default: undefined },
  },

  computed: {
    fullName(): string {
      return `${this.firstName} ${this.lastName}`
    },
  },
})
