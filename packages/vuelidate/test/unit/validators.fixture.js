import { withAsync } from '@vuelidate/validators/src/common'

export function toAsync (validator, time = 0) {
  return (value) => new Promise((resolve) =>
    setTimeout(
      resolve(validator(value)),
      time
    )
  )
}

export const isEven = (v) => {
  return v % 2 === 0
}
export const isOdd = (v) => v % 2 === 1

export const asyncIsEven = withAsync(toAsync(isEven, 5))
export const asyncIsOdd = withAsync(toAsync(isOdd, 5))