const palindromes = function(text) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    const lowerTextArray = text.toLowerCase().split("");

    const cleanedTextArray = [];

    for (let i = 0; i < lowerTextArray.length; i++) {
        if (alphabet.includes(lowerTextArray[i])) {
            cleanedTextArray.push(lowerTextArray[i]);
        }
    }

    cleanedTextArrayReversed = [...cleanedTextArray].reverse();

    if (cleanedTextArray.join("") === cleanedTextArrayReversed.join("")) {
        return true;
    } else {
        return false;
    }
}

module.exports = palindromes
