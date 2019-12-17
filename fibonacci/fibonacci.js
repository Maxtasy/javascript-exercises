const fibonacci = function(num) {
    const fib = [0, 1, 1, 2];

    if (typeof num === "string") {
        num = parseInt(num);
    }

    if (num < 0) {
        return "OOPS";
    }
    
    for (let i = 4; i <= num; i++) {
        fib.push(fib[i - 2] + fib[i - 1]);
    }

    return fib[num];
}

module.exports = fibonacci
