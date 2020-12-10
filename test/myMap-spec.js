const { expect } = require("chai")
const chai = require("chai")
// const { interface } = require("chai-spies")
const spies = require("chai-spies")
const myMap = require('../problems/myMap.js')
chai.use(spies)

beforeEach('makes a fresh array', function() {
    let array = [1, 2, 3, 4, 5]
})

describe('myMap(array, callback)', function() {
    it('returns new array', function() {
        let expected = [1, 2, 3, 4, 5]
        let result = myMap(expected, () => {})
        expect(result).to.not.be.equal(expected)
    })
    it('does not call Array.map', function() {
        const myMapSpy = chai.spy.on(Array, "map")
        let expected = [1, 2, 3, 4, 5]
        let result = myMap(expected, () => {})
        expect(myMapSpy).to.not.have.been.called
    })
    it('callback invoked for each argument', function (){
        const callback = () => {}
        // const myMapObj = {function: myMap, cb: callback}
        const myMappCallbackSpy = chai.spy(callback)
        // const myMappCallbackSpy = chai.spy(callback)
        let expected = [1, 2, 3, 4, 5]
        let result = myMap(expected, myMappCallbackSpy)
        expect(myMappCallbackSpy).to.have.been.called.exactly(expected.length)
    })
})




// describe('', function() {
//     it('', function() {

//     })
// })
