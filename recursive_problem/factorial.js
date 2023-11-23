// factorial using recursion

function factorial(n) {
    if (n === 1) {
        return n
    } else {
        return n * factorial(n - 1);
    }
}

console.log("Factorial of a number -- >", factorial(5))