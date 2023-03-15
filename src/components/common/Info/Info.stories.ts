import { Meta, Story } from '@storybook/vue/types-6-0'
import VpInfo from './Info.vue'

const meta: Meta = {
  title: 'common/Info',
  component: VpInfo,
}
export default meta

const Template: Story = (args, { argTypes }) => ({
  components: { VpInfo },
  props: Object.keys(argTypes),
  template: '<VpInfo v-bind="$props" />',
})

export const Male = Template.bind({})
Male.args = {
  name: 'Andre',
  age: 28,
  countries: ['DE', 'SE'],
  gender: 'male',
}

export const Female = Template.bind({})
Female.args = {
  ...Male.args,
  name: 'Andrea',
  gender: 'female',
}
