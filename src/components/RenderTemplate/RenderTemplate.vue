<script lang="ts">
import Vue, { VNode, CreateElement } from 'vue'
import render from './RenderTemplate.view'

export default Vue.extend({
  name: 'VpRenderTemplate',

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

  methods: {
    onClick() {
      console.log('CLICKED')

      this.$emit('clicked')
    },
  },

  render(h: CreateElement): VNode {
    return render(h, {
      name: this.fullName,
      age: this.age,
      onClick: this.onClick,
    })
  },
})
</script>
