import { shallowMount, mount, Wrapper } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'
import Vue from 'vue'

// Sadly needed, since outside of the .vue file, TS can not see the proper types
// of the component.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Component = Vue & { [key: string]: any }

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper: Wrapper<Component> = shallowMount(HelloWorld, {
      propsData: { msg },
    })
    expect(wrapper.text()).toMatch(msg)
  })
  it('can be tested directly on the instance', async () => {
    const msg = 'instance test'
    const wrapper: Wrapper<Component> = mount(HelloWorld, {
      propsData: { msg },
    })
    expect(wrapper.vm.msg).toBe(msg)
    expect(wrapper.vm.msgLong).toBe(`${msg} LONG`)
    expect(wrapper.vm.someData).toBe(true)
    const newMsg = 'hi'
    await wrapper.setProps({ msg: newMsg })
    expect(wrapper.vm.msgLong).toBe(`${newMsg} LONG`)
  })
})
