import VpNameInfo from './NameInfo.vue'
import { mount } from '@vue/test-utils'

describe('components/pages/NameInfo', () => {
  const title = 'Some title'
  const ageMock = 66
  const countriesMock = ['DE', 'SE']
  const genderMock = 'male'
  const propsData = {
    title,
    getInfoByName: async (name: string) => ({
      name,
      age: ageMock,
      countries: countriesMock,
      gender: genderMock,
    }),
  }

  it('renders', async () => {
    const wrapper = mount(VpNameInfo, { propsData })
    expect(wrapper.text()).toMatch(title)
  })

  it('shows info after click', async () => {
    const wrapper = mount(VpNameInfo, { propsData })
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(wrapper.find('[data-testid="info"]').exists()).toBe(true)
    expect(wrapper.text()).toMatch(ageMock.toString())
    expect(wrapper.text()).toMatch(countriesMock.join(', '))
    expect(wrapper.text()).toMatch(genderMock)
    expect(wrapper.find('[data-testid="error"]').exists()).toBe(false)
  })

  it('shows error if something goes wrong', async () => {
    const wrapper = mount(VpNameInfo, {
      propsData: {
        ...propsData,
        getInfoByName: async () => new Error('fail'),
      },
    })
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(wrapper.find('[data-testid="info"]').exists()).toBe(false)
    expect(wrapper.find('[data-testid="error"]').exists()).toBe(true)
  })
})
