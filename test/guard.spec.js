import {expect} from 'chai'
import guard from '../src/guard'

describe('guard function测试套件:', function () {
  it('守护参数类型为number, 若参数类型不正确，抛出TypeError', function () {
    const add = (a, b) => (a + b)
    const addGuard = guard(add, 'number', 'number')
    expect(addGuard.bind(null, 1, '2')).to.throw(TypeError)
  })
  it('守护参数类型为可变的参数', function () {
    const sum = (...args) => args.reduce((r, v) => (r + v), 0)
    const sumGuard = guard(sum, '...number')
    expect(sumGuard(1, 2, 3)).to.be.equal(6)
    expect(sumGuard.bind(null, 1, '2', 3)).to.throw(TypeError)
  })
})

