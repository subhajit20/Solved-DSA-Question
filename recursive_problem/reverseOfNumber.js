function reverseNumber(num) {
    if (num < 10) {
        console.log(num);
        return num;
    } else {
        console.log(num % 10);
        return reverseNumber(parseInt(num / 10));
    }
}

reverseNumber(190);