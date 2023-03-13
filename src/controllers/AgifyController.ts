export const agifyController = {
  getAgeByName: (() => {
    const cache: { [name: string]: number } = {}

    return async (name: string): Promise<number | Error> => {
      if (name in cache) return cache[name]

      const url = `https://api.agify.io${name ? `?name=${name}` : ''}`
      const response = await fetch(url)
      const result = await response.json()
      if (result.error || result.age === undefined) {
        return new Error(result.error)
      }
      cache[name] = result.age
      return result.age
    }
  })(),
}
