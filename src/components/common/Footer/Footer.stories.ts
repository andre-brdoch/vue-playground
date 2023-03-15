import { Meta, Story } from '@storybook/vue/types-6-0'
import VpFooter from './Footer.vue'

const meta: Meta = {
  title: 'common/Footer',
  component: VpFooter,
}
export default meta

const Template: Story = (args, { argTypes }) => ({
  components: { VpFooter },
  props: Object.keys(argTypes),
  template: '<VpFooter v-bind="$props" />',
})

export const Standard = Template.bind({})
Standard.args = {
  items: [
    { text: 'Hello world', href: '/' },
    { text: 'Testing the footer', href: '/' },
    { text: 'Some text', href: 'https://vuejs.org/', newTab: true },
  ],
}
