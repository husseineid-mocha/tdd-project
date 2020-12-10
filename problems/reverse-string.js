function reverseString(str) {
    if (typeof str !== "string") throw TypeError

    let array = str.split("")
    array.reverse()
    return array.join("")
}

module.exports = reverseString