import { Meta, Story } from '@storybook/vue/types-6-0'
import VpNameInfo from './NameInfo.page.vue'

const meta: Meta = {
  title: 'pages/NameInfo',
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
  title: "What's your name?",
  getInfoByName: () => ({
    name: 'Andre',
    age: 28,
    countries: ['DE', 'SE'],
    gender: 'male',
  }),
}
