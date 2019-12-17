const caesar = function(text, offset) {
    const alphabetSmall = "abcdefghijklmnopqrstuvwxyz".split("");
    const alphabetBig = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    const textArray = text.split("");

    const result = [];

    for (let i = 0; i < textArray.length; i++) {
        const currentCharacter = textArray[i];

        if (alphabetSmall.includes(currentCharacter)) {
            const index = alphabetSmall.indexOf(currentCharacter);

            result.push(alphabetSmall[(index + offset) % alphabetSmall.length]);
        } else if (alphabetBig.includes(currentCharacter)) {
            const index = alphabetBig.indexOf(currentCharacter);

            result.push(alphabetBig[(index + offset) % alphabetBig.length]);
        } else {
            result.push(currentCharacter);
        }
    }

    return result.join("");
}

module.exports = caesar
