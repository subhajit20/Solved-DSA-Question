var largestOddNumber = function(num) {
    let start = 0;
    let end = num.length - 1;

    while (start <= end) {
        if (parseInt(num.substr(end)) % 2 !== 0) {
            return num.substr(start, end + 1);
        } else {
            num = num.substr(start, end);
            end = end - 1;
        }
    }

    return num;
};

let data = largestOddNumber("2");

console.log(data);