import { Meta, Story } from '@storybook/vue/types-6-0'
import VpNav from './Nav.vue'

const meta: Meta = {
  title: 'common/Nav',
  component: VpNav,
}
export default meta

const Template: Story = (args, { argTypes }) => ({
  components: { VpNav },
  props: Object.keys(argTypes),
  template: `<VpNav v-bind="$props">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec purus enim.
      Maecenas interdum ac elit at mattis. Aliquam convallis justo ut mi rutrum, ut euismod
      mi vulputate. Morbi tempor et mi non rhoncus. Nam eu nunc egestas, egestas mi nec,
      posuere magna. Proin non metus sed tellus auctor laoreet in ut eros. Vestibulum varius
      mi nisi, vitae pulvinar tortor volutpat iaculis.
    </VpNav>`,
})

export const Standard = Template.bind({})
Standard.args = {
  items: [
    { text: 'Hello world', href: '/' },
    { text: 'Testing the footer', href: '/' },
    { text: 'Some text', href: 'https://vuejs.org/', newTab: true },
  ],
  githubUrl: 'https://github.com/andre-brdoch/vue-playground',
}

export const WithoutGithub = Template.bind({})
WithoutGithub.args = {
  ...Standard.args,
  githubUrl: undefined,
}
