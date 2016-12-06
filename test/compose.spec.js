import {expect} from 'chai'
import compose from '../src/compose'

describe('compose function测试', function () {
  it('将2个函数组合，从右到左，第一个函数执行的结果传入第二个函数', function () {
    const filterNumber = (arry) => arry.filter((val) => (typeof val === 'number'))
    const sort = (arry) => arry.sort((a, b) => (a - b))
    const sortArry = compose(sort, filterNumber)

    expect(sortArry([1, 2, 7, '4', 8, 6])).to.deep.equal([1, 2, 6, 7, 8])
  })
  it('将多个函数组合，依次从右到左，前一个函数执行的结果传入后一个函数', function () {
    var toString = (val) => (val.toString())
    var toStrAndAbs = compose(toString, Math.floor, Math.abs)
    expect(toStrAndAbs('-2.5')).to.be.equal('2')
  })
  it('参数类型只能为function类型,否则，抛出TypeError错误', function () {
    expect(compose).to.throw(TypeError)
    expect(compose.bind((a,b) => (a + b), 5)).to.throw(TypeError)
  })
})
