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
  template: `<VpFooter v-bind="$props">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec purus enim.
      Maecenas interdum ac elit at mattis. Aliquam convallis justo ut mi rutrum, ut euismod
      mi vulputate. Morbi tempor et mi non rhoncus. Nam eu nunc egestas, egestas mi nec,
      posuere magna. Proin non metus sed tellus auctor laoreet in ut eros. Vestibulum varius
      mi nisi, vitae pulvinar tortor volutpat iaculis.
    </VpFooter>`,
})

export const Standard = Template.bind({})
Standard.args = {
  items: [
    { text: 'Hello world', href: '/' },
    { text: 'Testing the footer', href: '/' },
    { text: 'Some text', href: 'https://vuejs.org/', newTab: true },
  ],
}
