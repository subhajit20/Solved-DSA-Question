// 1941. Check if All Characters Have Equal Number of Occurrences - https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/description/?envType=problem-list-v2&envId=string
let str = "abba";

var areOccurrencesEqual = function(s) {
    let count = 0;
    let prvCount = 0
    for(let i = 0; i <= s.length - 1; i++){
        count = 1;
        for(let x = 0; x <= s.length - 1; x++){
            if(s[i] === s[x] && i !== x){
                count++
            }
        }
        prvCount = count;
        break;
    }
    for(let i = 0; i <= s.length - 1; i++){
        count = 1;
        for(let x = 0; x <= s.length - 1; x++){
            if(s[i] === s[x] && i !== x){
                count++
            }
        }
        if(prvCount !== count){
            return false
        }
    }

    return true
};

console.log(areOccurrencesEqual('abacbc'))