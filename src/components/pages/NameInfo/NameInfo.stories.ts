import { Meta, Story } from '@storybook/vue/types-6-0'
import VpNameInfo from './NameInfo.vue'

const meta: Meta = {
  title: 'pages/VpNameInfo',
  component: VpNameInfo,
}
export default meta

const Template: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VpNameInfo },
  template: '<VpNameInfo v-bind="$props" />',
})

export const Standard = Template.bind({})
Standard.args = {
  title: 'Hello world',
  getAgeByName: () => 33,
}
