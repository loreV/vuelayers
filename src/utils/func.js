import { round } from 'lodash/fp'

/**
 * @param {*} value
 * @return {boolean} True if value is number or numeric string.
 */
export function isNumeric (value) {
  return !isNaN(parseFloat(value)) && isFinite(value)
}

/**
 * @param {...*} [args]
 *
 * @return {*}
 */
export function coalesce (...args) {
  return args.find(val => val != null)
}

/**
 * @function
 * @param {number} num
 * @param {number} [precision]
 * @return {number}
 */
export const roundTo = round.convert({ fixed: false })
