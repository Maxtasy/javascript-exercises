const getTheTitles = function(array) {
    const titles = array.map(function(book) {
        return book.title;
    });

    return titles;
}

module.exports = getTheTitles;
