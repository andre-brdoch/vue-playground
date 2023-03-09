import Vue from 'vue'
import render from './RenderTemplate.view'
import type { RenderTemplateProps } from './RenderTemplate.view'
import { mount } from '@vue/test-utils'

let onClickSpy: jest.Mock

describe('template', () => {
  const name = 'Tom Cruise'
  let props: RenderTemplateProps

  beforeEach(() => {
    onClickSpy = jest.fn()
    props = { name: name, age: 22, onClick: onClickSpy }
  })

  it('renders', async () => {
    const wrapper = mount(
      Vue.extend({
        render(h) {
          return render(h, props)
        },
      })
    )
    expect(wrapper.text()).toMatch(name)
    expect(wrapper.find('[data-testid="age"]').exists()).toBe(true)
    expect(onClickSpy).not.toHaveBeenCalled()
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(onClickSpy).toHaveBeenCalled()
  })
  it('does not render age if not provided', () => {
    const wrapper = mount(
      Vue.extend({
        render(h) {
          return render(h, { ...props, age: undefined })
        },
      })
    )
    expect(wrapper.find('[data-testid="age"]').exists()).toBe(false)
  })
})
