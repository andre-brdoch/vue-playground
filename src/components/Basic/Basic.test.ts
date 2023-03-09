import { mount, Wrapper } from '@vue/test-utils'
import Basic from './Basic.vue'
import Vue from 'vue'

// Sadly needed, since outside of the .vue file, TS can not see the proper types
// of the component.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Component = Vue & { [key: string]: any }

describe('Basic.vue', () => {
  const firstName = 'Bob'
  const lastName = 'Muller'
  const age = 99
  const props = { firstName, lastName, age }

  it('renders props.age when passed', () => {
    const wrapper: Wrapper<Component> = mount(Basic, {
      propsData: props,
    })
    expect(wrapper.text()).toMatch(age.toString())
  })
  it('can be tested directly on the instance', async () => {
    const wrapper: Wrapper<Component> = mount(Basic, {
      propsData: props,
    })
    expect(wrapper.vm.firstName).toBe(firstName)
    expect(wrapper.vm.fullName).toBe(`${firstName} ${lastName}`)
    const newLastName = 'Married'
    await wrapper.setProps({ ...props, lastName: newLastName })
    expect(wrapper.vm.fullName).toBe(`${firstName} ${newLastName}`)
  })
})
