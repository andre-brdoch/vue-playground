import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/vue/types-6-0'
import VpButton from './Button.vue'
import type { ButtonProps } from './Button.vue'

const meta: Meta = {
  title: 'Button',
}
export default meta

const Template: Story<ButtonProps> = (args, { argTypes }) => ({
  components: { VpButton },
  props: Object.keys(argTypes),
  template: '<VpButton v-bind="$props " @click="action" />',
  methods: { action: action('click') },
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
