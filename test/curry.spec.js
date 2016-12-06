import curry from '../src/curry'
import {expect} from 'chai'

describe('curry function测试套件:', function () {
  it('curry化的函数将多个参数的函数转化成单个参数的函数，链式执行得到最终的结果', function () {
    const sum = (a, b, c) => (a + b + c)
    const sumCurry = curry(sum)
    expect(sumCurry(1)(2)(3)).to.be.equal(6)
  })
  it('curry化的函数，可以一次传入多个参数,直到接受完所有参数，返回结果,否决，继续返回新函数', function () {
    const sum = (a, b, c) => (a + b + c)
    const sumCurry = curry(sum)
    expect(sumCurry(1, 2)(3)).to.be.equal(6)
    expect(sumCurry(1, 2, 3)).to.be.equal(6)
  })
  it('curry函数也可以作用于...rest(不定参)函数,执行curry化的函数，返回结果', function () {
    const sum = (...args) => (args.reduce((r, v) => (r + v), 0))
    const sumCurry = curry(sum)
    expect(sumCurry(1,2,3,4,5)).to.be.equal(15)
  })
  it('curry函数只接受一个function参数,否则，抛出TypeError；另外，传入多个参数，忽略后面的参数', function () {
    const minus = (a, b) => (a - b)
    const minusCurry = curry(minus, 12)
    expect(curry).to.throw(TypeError)
    expect(curry.bind(null, 8)).to.throw(TypeError)
    expect(minusCurry(10, 4)).to.be.equal(6)
  })
})
