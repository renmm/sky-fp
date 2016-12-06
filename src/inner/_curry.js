/**
 * currying function
 *
 * 柯里化内部函数，将一个接收多个参数的函数转化为单参数函数的方式，
 *
 * 转化后的函数每次可接受一个参数或者多个参数，如果参数未接受完毕，
 *
 * 则继续返回新函数，直到所有参数接受完毕，返回结果
 *
 * @summary curry :: (* -> a) -> (* -> a)
 * @param  {function} f need currying's function
 * @since 0.1.0
 * @inner
 * @function
 * @private
 * @return {function}   new currying function
 */
const curry = (f) => {
  const arity = f.length
  const curryIterator = (...args) => {
    if (arity === 0) return f(...args)
    if (args.length === arity) return f(...args)
    return curryIterator.bind(null, ...args)
  }
  return curryIterator
}

export default curry
