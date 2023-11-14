// find position of an element in an infinite sorted array
function searchInfiniteLoop(arr, target) {
    let start = 0;
    let end = 1;
    let res;
    while (start <= end && start <= arr.length - 1) {
      res = binarySearch(arr, target, start, end);
      if (res == -1) {
        start = end + 1;
        end = (end + 1) * (end + 1)
      } else {
        return res;
      }
    }
  
    return -1
}
const binarySearch = (arr, target, start, end) => {
    while (start <= end) {
        mid = parseInt((start + end) / 2);
    
        if (arr[mid] === target) {
            return mid;
        } else if (target > arr[mid]) {
            start = mid + 1
        } else {
            end = mid - 1;
        }
    }
  
    return -1;
}
  
let arr = [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,82,90,97,98];
  
const data = searchInfiniteLoop(arr, 97);
console.log(data)