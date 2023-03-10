import VpButton from './Button.vue'
import { mount } from '@vue/test-utils'

describe('template', () => {
  it('renders', () => {
    const message = 'click it'
    const wrapper = mount(VpButton, {
      propsData: { message },
    })

    expect(wrapper.text()).toMatch(message)
  })

  it('emits events', async () => {
    const wrapper = mount(VpButton)
    expect(wrapper.emitted().click).toBeFalsy()

    const button = wrapper.find('button')
    await button.trigger('click')

    expect(wrapper.emitted().click).toBeTruthy()
  })
})
