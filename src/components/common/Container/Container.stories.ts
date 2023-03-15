import { Meta, Story } from '@storybook/vue/types-6-0'
import VpContainer from './Container.vue'

const meta: Meta = {
  title: 'common/Container',
  component: VpContainer,
}
export default meta

const Template: Story = (args, { argTypes }) => ({
  components: { VpContainer },
  props: Object.keys(argTypes),
  template: `<VpContainer v-bind="$props">
      <div style="background: black; padding: 2rem;"></div>
    </VpContainer>`,
})

export const Standard = Template.bind({})
