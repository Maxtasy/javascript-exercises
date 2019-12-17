const palindromes = function(text) {
    const alphabet = "abcdefghijklmnopqrstuxyz".split("");

    const lowerTextArray = text.toLowerCase().split("");

    const cleanedTextArray = [];

    for (let i = 0; i < lowerTextArray.length; i++) {
        if (alphabet.includes(lowerTextArray[i])) {
            cleanedTextArray.append(lowerTextArray[i]);
        }
    }

    cleanedTextArrayReversed = [...cleanedTextArray];

    if (cleanedTextArray === cleanedTextArrayReversed) {
        return true;
    }
}

module.exports = palindromes
