/**
 * @module fp
 */

/**
 * currying function
 *
 * 柯里化，将一个接收多个参数的函数转化为单参数函数的方式，
 *
 * 转化后的函数每次可接受一个参数或者多个参数，如果参数未接受完毕，
 *
 * 则继续返回新函数，直到所有参数接受完毕，返回结果
 *
 * @summary curry :: (* -> a) -> (* -> a)
 * @param  {function} f need currying's function
 * @since 0.1.0
 * @function
 * @return {function}   new currying function
 * @example
 * const add = (a, b, c) => (a + b + c)
 * const addCurry = _.curry(add)
 * addCurry(1)(2)(3) // => 6
 * addCurry(1, 2)(4) // => 6
 */
export const curry = (f) => {
  if (typeof f !== 'function') throw new TypeError(`expect curry param: ${f} is a function`)
  const arity = f.length
  const curryIterator = (...args) => {
    if (arity === 0) return f(...args)
    if (args.length === arity) return f(...args)
    return curryIterator.bind(null, ...args)
  }
  return curryIterator
}
/**
 * 组合函数
 *
 * 函数组合,接收多个函数作为参数并返回一个新函数的方式，
 *
 * 新函数按照传入的参数顺序，从右往左依次执行，前一个函数的返回值是后一个函数的输入值
 *
 * @summary curry :: ((x -> y), ..., (a -> b)) ->  ((a, ..., x) -> y)
 * @since 0.1.0
 * @function
 * @param  {...function} ...fns need compose's function
 * @return {*}         compose's result
 * @example
 * const floorAndToString = _.compose((val) => val.toString(), Math.floor)
   floorAndToString('123.3432') // => 123
 */
export const compose = (...fns) => (a) => fns.reverse().reduce((r, fn) => fn(r), a)

/**
 * 管道
 *
 * 类似组合函数，接收多个函数作为参数并返回一个新函数的方式，
 *
 * 新函数按照传入的参数顺序，从左往右依次执行，前一个函数的返回值是后一个函数的输入值
 *
 * @summary pipe :: ((x -> y), ..., (a -> b)) ->  ((x, ..., a) -> b)
 * @since 0.1.0
 * @function
 * @param  {...function} fns need pipe's function
 * @return {*}         pipe's result
 * @example
 * const floorAndToString = _.pipe(Math.floor, (val) => val.toString())
 * floorAndToString('123.3432') // => 123
 */
export const pipe = (...fns) => (a) => fns.reduce((r,fn) => fn(r), a)

export default {
	curry: curry,
	compose: compose,
	pipe: pipe
}
