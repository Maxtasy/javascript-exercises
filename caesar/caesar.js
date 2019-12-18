const caesar = function(text, offset) {
    const alphabetSmall = "abcdefghijklmnopqrstuvwxyz".split("");
    const alphabetBig = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    const textArray = text.split("");

    const result = [];

    for (let i = 0; i < textArray.length; i++) {
        const currentCharacter = textArray[i];

        if (alphabetSmall.includes(currentCharacter)) {
            const index = alphabetSmall.indexOf(currentCharacter);
            let newIndex = (index + offset) % alphabetSmall.length;

            if (newIndex < 0) {
                result.push(alphabetSmall[alphabetSmall.length + newIndex]);
            } else {
                result.push(alphabetSmall[newIndex]);
            }
        } else if (alphabetBig.includes(currentCharacter)) {
            const index = alphabetBig.indexOf(currentCharacter);
            let newIndex = (index + offset) % alphabetBig.length;
            
            if (newIndex < 0) {
                result.push(alphabetBig[alphabetBig.length + newIndex]);
            } else {
                result.push(alphabetBig[newIndex]);
            }
        } else {
            result.push(currentCharacter);
        }
    }

    return result.join("");
}

module.exports = caesar
