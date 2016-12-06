/**
 * 管道
 *
 * 类似组合函数，接收多个函数作为参数并返回一个新函数的方式，
 *
 * 新函数按照传入的参数顺序，从左往右依次执行，前一个函数的返回值是后一个函数的输入值
 *
 * @summary pipe :: ((x -> y), ..., (a -> b)) ->  ((x, ..., a) -> b)
 * @since 0.1.0
 * @inner
 * @function
 * @param  {...function} fns need pipe's function
 * @return {*}         pipe's result
 */
const pipe = (...fns) => (a) => fns.reduce((r, fn) => fn(r), a)
export default pipe
