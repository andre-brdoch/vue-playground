import { analyzeName } from './NameInfo.controller'
import * as utils from './utils'

describe('controllers/NameInfo', () => {
  const name = 'andre'
  const ageMock = 66
  const countriesMock = ['DE', 'SE']
  const genderMock = 'male'

  beforeEach(() => {
    jest.spyOn(utils, 'fetchAge').mockResolvedValue(ageMock)
    jest.spyOn(utils, 'fetchCountries').mockResolvedValue(countriesMock)
    jest.spyOn(utils, 'fetchGender').mockResolvedValue(genderMock)
  })

  it('analyzes name', async () => {
    const info = await analyzeName(name)
    expect(info).toEqual({
      name,
      age: ageMock,
      countries: countriesMock,
      gender: genderMock,
    })
  })

  it('uses cache', async () => {
    await analyzeName(name)
    await analyzeName(name)
    expect(jest.spyOn(utils, 'fetchAge')).toHaveBeenCalledTimes(1)
  })

  it('returns error if any request fails', async () => {
    jest.spyOn(utils, 'fetchCountries').mockResolvedValue(new Error('fail'))
    const info = await analyzeName(name)
    expect(info).toEqual({
      name,
      age: ageMock,
      countries: countriesMock,
      gender: genderMock,
    })
  })
})
