// Product of digits
function productOfDigits(n) {

    if (n === 1) {
        return n
    }
    return (n % 10) * productOfDigits(parseInt(n / 10))

}
console.log("Product Of Digits --> ", productOfDigits(125))