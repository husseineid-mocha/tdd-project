function reverseString(str) {
    if (typeof str !== "string"){
        throw new TypeError("The input must be a string")
    }else{
        let array = str.split("")
        array.reverse()
        return array.join("")
    }
}

module.exports = reverseString
