const caesar = function(text, num) {
    const alphabetSmall = "abcdefghijklmnopqrstuvwxyz".split("");
    const alphabetBig = "ABCDEFGHIJKLMNOPQRSTUVQXYZ".split("");

    const textArray = text.split("");

    const result = [];

    for (let i = 0; i < textArray.lenght; i++) {
        if (alphabetSmall.includes(textArray[i])) {
            result.append(alphabetSmall[(alphabetSmall[alphabetSmall.indexOf(textArray[i])] + num) % alphabetSmall.length]);
        } else if (alphabetBig.includes(textArray[i])) {
            result.append(alphabetBig[(alphabetBig[alphabetBig.indexOf(textArray[i])] + num) % alphabetBig.length]);
        } else {
            result.append(textArray[i]);
        }
    }

    return result.join("");
}

module.exports = caesar
