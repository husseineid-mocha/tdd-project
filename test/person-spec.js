const { expect } = require('chai')
const chai = require('chai')
const Person = require("../problems/person.js")

describe("person class", () => {
    let bob;

    beforeEach('creates new instance of class Person', function() {
        bob = new Person("Bob", 42)
    })

    describe('test for properties and their values', function() {
        it('name property', function() {
            expect(bob.name).to.equal("Bob")
            expect(bob).to.have.property("name")
        })
        it('age property', function() {
            expect(bob.age).to.equal(42)
            expect(bob).to.have.property("age")
        })
    })

})










// describe('', function() {
//     it('', function() {

//     })
// })


// describe('', function() {
//     it('', function() {

//     })
// })


// describe('', function() {
//     it('', function() {

//     })
// })