import { Age, Gender } from '../../models/NameInfo.model'

interface AgeResult {
  age: Age
}
interface NationalityResult {
  country: { country_id: string }[]
}
interface GenderResult {
  gender: Gender
}

export const fetchAge = async (name: string): Promise<number | Error> => {
  const url = `https://api.agify.io${name ? `?name=${name}` : ''}`
  const response = await fetch(url)
  const result = await response.json()
  if (result.error || result.age === undefined) {
    return new Error(result.error)
  }
  return (result as AgeResult).age
}

export const fetchCountries = async (
  name: string
): Promise<string[] | Error> => {
  const url = `https://api.nationalize.io${name ? `?name=${name}` : ''}`
  const response = await fetch(url)
  const result = await response.json()
  if (result.error || result.country === undefined) {
    return new Error(result.error)
  }
  return (result as NationalityResult).country.map(c => c.country_id)
}

export const fetchGender = async (name: string): Promise<Gender | Error> => {
  const url = `https://api.genderize.io${name ? `?name=${name}` : ''}`
  const response = await fetch(url)
  const result = await response.json()
  if (result.error || result.gender === undefined) {
    return new Error(result.error)
  }
  return (result as GenderResult).gender
}

export const isError = (thing: unknown): thing is Error =>
  thing instanceof Error
