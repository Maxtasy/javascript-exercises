const findTheOldest = function(array) {
    return array.reduce(function(oldestPerson, currentPerson) {
        const oldestAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        const currentPersonAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        if (currentPersonAge > oldestAge) {
            return currentPerson;
        } else {
            return oldestPerson;
        }
    });
}

const getAge = function(birth, death) {
    if (!death) {
        currentYear = new Date().getFullYear();
        return currentYear - birth;
    }

    return death - birth;
}

module.exports = findTheOldest
