// sum of n numbers
function sumOfNumber(n) {
    if (n === 1) {
        return n
    } else {
        return n + sumOfNumber(n - 1);
    }
}