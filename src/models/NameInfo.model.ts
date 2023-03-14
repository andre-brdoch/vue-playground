export type Age = number
export type Countries = string[]
export type Gender = 'female' | 'male'

export interface NameInfoModel {
  readonly name: string
  readonly age: Age
  readonly countries: Countries
  readonly gender: Gender
}
