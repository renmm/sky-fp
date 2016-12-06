import curry from './inner/_curry'
import guard from './guard'
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
 * @since 0.1.0
 * @function curry
 * @memberOf fp
 * @param  {function} f need currying's function
 * @return {function}   new currying function
 * @example
 * const add = (a, b, c) => (a + b + c)
 * const addCurry = _.curry(add)
 * addCurry(1)(2)(3) // => 6
 * addCurry(1, 2)(4) // => 6
 */
export default guard(curry, 'function')
