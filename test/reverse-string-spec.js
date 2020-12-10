const { expect, assert } = require("chai")
const chai = require("chai")
const reverseString = require("../problems/reverse-string.js")

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
        let test = reverseString(4)
        expect(test).to.throw(TypeError)
    })
})