export const name = 'emptyArray'

export function filter() {
  return function(input, empty) {
    return input.filter(i => empty)
  }
}