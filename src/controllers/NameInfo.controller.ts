import { NameInfoModel, Age, Countries, Gender } from '../models/NameInfo.model'

interface AgeResult {
  age: Age
}
interface NationalityResult {
  country: { country_id: string }[]
}
interface GenderResult {
  gender: Gender
}

export const analyzeName = (() => {
  const cache: { [name: string]: NameInfoModel } = {}

  return async (name: string): Promise<NameInfoModel | Error> => {
    if (name in cache) {
      return cache[name]
    }

    const results = await Promise.all([
      fetchAge(name),
      fetchNationality(name),
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

const fetchAge = async (name: string): Promise<number | Error> => {
  const url = `https://api.agify.io${name ? `?name=${name}` : ''}`
  const response = await fetch(url)
  const result = await response.json()
  if (result.error || result.age === undefined) {
    return new Error(result.error)
  }
  return (result as AgeResult).age
}

const fetchNationality = async (name: string): Promise<string[] | Error> => {
  const url = `https://api.nationalize.io${name ? `?name=${name}` : ''}`
  const response = await fetch(url)
  const result = await response.json()
  if (result.error || result.country === undefined) {
    return new Error(result.error)
  }
  return (result as NationalityResult).country.map(c => c.country_id)
}

const fetchGender = async (name: string): Promise<Gender | Error> => {
  const url = `https://api.genderize.io${name ? `?name=${name}` : ''}`
  const response = await fetch(url)
  const result = await response.json()
  if (result.error || result.gender === undefined) {
    return new Error(result.error)
  }
  return (result as GenderResult).gender
}

const isError = (thing: unknown): thing is Error => thing instanceof Error
