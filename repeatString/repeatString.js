const repeatString = function(str, num) {
    if (num < 0) { return "ERROR" }
    
    let result = ""

    for (let i = num; i > 0; i--) {
        result += str;
    }

    return result
}

module.exports = repeatString
