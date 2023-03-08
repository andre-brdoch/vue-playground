import { shallowMount, mount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    })
    expect(wrapper.text()).toMatch(msg)
  })
  it('can be tested directly on the instance', () => {
    const msg = 'instance test'
    const wrapper = mount(HelloWorld, {
      propsData: { msg },
    })

    // @ts-ignore
    expect(wrapper.vm.msg).toBe(msg)
    expect(wrapper.vm.$data.someData).toBe(true)
    // @ts-ignore
    expect(wrapper.vm.msgLong).toBe(`${msg} LONG`)
  })
})
