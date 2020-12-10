const { expect } = require("chai")
const chai = require("chai")
const { interface } = require("chai-spies")
const chai = require("chai-spies")
chai.use(spies)

beforeEach('makes a fresh array', function() {
    let array = [1, 2, 3, 4, 5]
})

describe('myMap(array, callback)', function() {
    it('returns new array', function() {
        let expected = [1, 2, 3, 4, 5]
        let result = myMap(array, () => {})
        expect(result).to.not.be.equal(expected)
    })
    it('does not call Array.map', function() {
        const myMapSpy = chai.spy.on(Array, "map")
        let expected = [1, 2, 3, 4, 5]
        let result = myMap(array, () => {})
        expect(myMapSpy).to.not.have.been.called
    })
})




// describe('', function() {
//     it('', function() {

//     })
// })