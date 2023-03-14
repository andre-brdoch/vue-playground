import {
  NameInfoModel,
  Age,
  Countries,
  Gender,
} from '../../models/NameInfo.model'
import { fetchAge, fetchGender, fetchCountries, isError } from './utils'

export const analyzeName = (() => {
  const cache: { [name: string]: NameInfoModel } = {}

  return async (name: string): Promise<NameInfoModel | Error> => {
    if (name in cache) {
      return cache[name]
    }

    const results = await Promise.all([
      fetchAge(name),
      fetchCountries(name),
      fetchGender(name),
    ])

    // if any result was an error:
    const error = results.find(isError)
    if (error !== undefined) {
      return error
    }

    const [age, countries, gender] = results as [Age, Countries, Gender]
    const result: NameInfoModel = {
      name,
      age,
      countries,
      gender,
    }
    cache[name] = result

    return result
  }
})()
