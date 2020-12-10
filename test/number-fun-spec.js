const assert = require('assert');
const { expect } = require('chai');
const {returnsThree, reciprocal} = require('../problems/number-fun.js')


describe ('returnsThree', function () {
  it ('must return the number three', function () {
    let expected = 3;
    let result = returnsThree();
    expect(result).to.be.equal(expected)
  })
})

describe ('reciprocal(num)', function () {
  context ('valid arguments', function(){
    it ('Should return reciprocal', function () {
      let expected2 = (1/10)
      let result2 = reciprocal(10)
      let expected = (1/5)
      let result = reciprocal(5);
      assert.strictEqual(expected, result)
      assert.strictEqual(expected2, result2)
    })
  })
  context ('invalid arguments', function(){
    it ('should return a TypeError', function (){
    assert.throws(function(){
      reciprocal(-50);
    }, TypeError, 'number must be between 1 and 1000000')
  })
})
})
