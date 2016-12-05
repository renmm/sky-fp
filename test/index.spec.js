import {expect} from 'chai'
import _  from '../src/index'

describe('index test', function () {
	describe('curry function', function () {
		it('currying function should be able to transform a number of parameters into a single parameter', function () {
      const add = (a, b, c) => (a + b + c)
      const addCurry = _.curry(add)
      expect(addCurry(1)(2)(3)).to.be.equal(6)
    })
    it('Function currying can be passed into multiple parameters', function () {
      const sum = (a, b) => (a + b)
      const sumCurry = _.curry(sum)
      expect(sumCurry(1, 2)).to.be.equal(sumCurry(1)(2))
    })
    it('the parameter should be a function, if not, a type error should be thrown', function () {
      const paramsArr = ['abc', 12, true, null, undefined, {}, [], function () {}]

      paramsArr.forEach((param) => {
        if (typeof param === 'function') {
          expect(_.curry.bind(null, param)).to.not.throw(TypeError)
          return
        }
        expect(_.curry.bind(null, param)).to.throw(TypeError)
      })
    })
    it('curry supports functions of infinite parameters', function () {
      const sum = (...args)=>(args.reduce((r, v) => (r + v), 0))

      const sumCurry = _.curry(sum)

      expect(sumCurry(1, 2, 3)).to.be.equal(sum(1, 2, 3))
    })
	})
  describe('compose function', function () {
    it('The combination is from right to left.', function () {
      const floorAndToString = _.compose((val) => val.toString(), Math.floor)
      expect(floorAndToString('123.3432')).to.be.equal('123')
    })
    it('Can be a combination of multiple functions', function () {
      const squareMeta = (a) => (a * a)
      const toString = (a) => (`square:${a}`)
      const square = _.compose(toString, squareMeta, Math.abs)

      expect(square('2.5')).to.be.equal('square:6.25')
    })

  })
})
