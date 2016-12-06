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
 * @private
 * @param  {...function} ...fns need compose's function
 * @return {*}         compose's result
 */
const compose = (...fns) => (a) => fns.reverse().reduce((r, fn) => fn(r), a)
export default compose
