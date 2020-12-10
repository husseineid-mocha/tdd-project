const chai = require("chai")
const expect = chai.expect
const reverseString = require("../problems/reverse-string.js")
const assert = require('assert');

describe("reverseString()", function() {
    it("should reverse the input string", function() {
        //arrange
        let result = "nuf"
            //act
        let test = reverseString("fun")
            //assert
        expect(test).to.be.equal(result)
    })
    it("should throw an error if not a string", function() {
        // let test = reverseString(4)
        expect(() => reverseString(4)).to.throw(TypeError)
        // expect(test).to.throw(TypeError)
    })
})
