// Sum of digits
function sumOfDigits(n) {

    if (n === 0) {
        return n
    }
    return (n % 10) + sumOfDigits(parseInt(n / 10))

}
console.log("Sum Of Digits --> ", sumOfDigits(1211));