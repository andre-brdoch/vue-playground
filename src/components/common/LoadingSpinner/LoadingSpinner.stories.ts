import { Meta, Story } from '@storybook/vue/types-6-0'
import VpLoadingSpinner from './LoadingSpinner.vue'

const meta: Meta = {
  title: 'common/LoadingSpinner',
  component: VpLoadingSpinner,
}
export default meta

const Template: Story = (args, { argTypes }) => ({
  components: { VpLoadingSpinner },
  props: Object.keys(argTypes),
  template: '<VpLoadingSpinner v-bind="$props" />',
})

export const Standard = Template.bind({})
