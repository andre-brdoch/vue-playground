import { Meta, Story } from '@storybook/vue/types-6-0'
import VpHomePage from './Home.vue'

const meta: Meta = {
  title: 'pages/HomePage',
  component: VpHomePage,
}
export default meta

const Template: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VpHomePage },
  template: '<VpHomePage v-bind="$props" />',
})

export const Standard = Template.bind({})
Standard.args = {
  title: 'Hello world',
  getAgeByName: () => 33,
}
