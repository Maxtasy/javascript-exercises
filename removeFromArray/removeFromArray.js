const removeFromArray = function() {
    let newArray = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        index = newArray.indexOf(arguments[i]);

        if (index === -1) { continue }

        newArray = newArray.slice(0, index).concat(newArray.slice(index + 1));
    }
    

    return newArray;
}

module.exports = removeFromArray
