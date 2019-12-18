const reverseString = function(str) {
    let reversedString = "";

    for (let i = str.length; i >= 0; i--) {
        reversedString += str.charAt(i);
    }

    return reversedString;
}

module.exports = reverseString
