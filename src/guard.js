const typeOf = (type) => {
  const _typeOf = (arg) => {
    if (typeof arg !== type) {
      throw new TypeError(`Expected ${arg} is a ${type}`)
    }
    return arg
  }
  if (/^(?:\.){3}(.*)$/.exec(type)) {
    type = RegExp.$1
    _typeOf.isRest = true
  }
  return _typeOf
}


/**
 * 守护函数
 * @summary guard :: ((* -> a), ...) -> (* -> a)
 * @since 0.1.0
 * @function
 * @memberOf fp
 * @param  {Function}  fn        需守护的function
 * @param  {...string} guardArgs 可变的string类型,针对参数类型
 * @return {function}              新的受保护的函数
 */
const guard = (fn, ...guardArgs) => {
  var checkers = guardArgs.map((type) => typeOf(type))
  return (...args) => {
    args.forEach((arg, ind) => {
      if (ind >= checkers.length && checkers[checkers.length - 1].isRest) ind = checkers.length - 1
      if (checkers[ind]) checkers[ind](arg)
    })
    if (args.length === 0 &&  guardArgs.length) throw new TypeError('Expect to have at least 1 Parameters')
    return fn.apply(null, args)
  }
}

export default guard
