// 1961. Check If String Is a Prefix of Array- https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/description/?envType=problem-list-v2&envId=string


function isPrefixString(s, words) {
    let start = 0;
    let end = 0;
    let i = 0;
    let isprefix = false;
  while (i <= words.length - 1) {
    end = start + words[i].length;
    console.log(s.slice(start, end));
    if (s.slice(start, end) === words[i] && start < s.length) {
      isprefix = true;
    }else if (start >= s.length) {
      break;
    }else {
      isprefix = false;
      return isprefix;
    }

    start += words[i].length;
    i++;
  }

  if(i > words.length - 1 && start < s.length){
    return false
  }

  return isprefix;
}

let s = "ccccccccc";
let words = ['c', 'cc'];

console.log(isPrefixString(s, words))