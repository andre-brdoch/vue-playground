import { action } from '@storybook/addon-actions'

import VpButton from './Button.vue'

export default {
  title: 'Button',
}

const Template = (args, { argTypes }) => ({
  components: { VpButton },
  props: Object.keys(argTypes),
  template: '<VpButton v-bind="$props " @click="action" />',
  methods: { action: action('clicked') },
})

export const Standard = Template.bind({})
Standard.args = {
  message: 'Click me',
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Standard.args,
  isDisabled: true,
}
