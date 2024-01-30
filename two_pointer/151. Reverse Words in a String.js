/**
 *
 * Given an input string s, reverse the order of the words.
 * A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
 * Return a string of the words in reverse order concatenated by a single space.
 * Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
 */

var reverseWords = function(s) {
    if (s == "") {
        return s;
    }
    let reversed = s.split(" ").reverse();
    console.log(reversed);
    let new_str = "";
    let last = reversed.length - 1;
    console.log(last);

    for (let i in reversed) {
        console.log(i);
        if (reversed[i] !== "") {
            if (last.toString() === i) {
                new_str += reversed[i];
            } else {
                new_str += reversed[i] + " ";
            }
        }
    }

    let reversedStr = new_str.split(" ");

    if (reversedStr[reversedStr.length - 1] === "") {
        reversedStr.pop();
        console.log(reversedStr);
        new_str = "";
        last = reversedStr.length - 1;
        for (let i in reversedStr) {
            if (reversedStr[i] !== "") {
                if (last.toString() === i) {
                    new_str += reversedStr[i];
                } else {
                    new_str += reversedStr[i] + " ";
                }
            }
        }
    }

    return new_str;
};

console.log(reverseWords("  hello world  "));