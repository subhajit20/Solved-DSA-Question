let sum = 0;

function reverseNumber(num) {
    if (num < 10) {
        sum = sum * 10 + num;
        return sum;
    } else {
        let reverseNum = num % 10;
        sum = sum * 10 + reverseNum;
        reverseNumber(parseInt(num / 10));
        return sum;
    }
}

let data = reverseNumber(121);
console.log(data === 121 ? "Palindrome Number" : "Not a palindrome Number");