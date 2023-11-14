function findPeakElement(arr) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start < end) {
      mid = parseInt((start + end) / 2);
  
      if (arr[mid] > arr[mid + 1]) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    console.log(start, end)
    return start;
}

let arr = [1, 2, 1, 3, 5, 6, 4];
peakIndexInMountainArray(arr);