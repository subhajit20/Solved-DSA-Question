function findInMountainArray(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let mid;
    while (start < end) {
      mid = parseInt((start + end) / 2);
      if (arr[mid] > arr[mid + 1]) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    let asenRes = searchAsendingArray(arr, 0, start, target);
    let dsecRes = searchDesendingArray(arr, end, arr.length - 1, target);
  
    if (asenRes != -1) {
      return asenRes
    } else {
      return dsecRes
    }
  
  }
  
function searchAsendingArray(arr, start, end, target) {
    let mid;
    while (start <= end) {
      mid = parseInt((start + end) / 2);
      if (target === arr[mid]) {
        return mid;
      } if (target > arr[mid]) {
        start = mid + 1
      } else {
        end = mid - 1
      }
    }
  
    return -1
}
  
function searchDesendingArray(arr, start, end, target) {
    let mid;
    while (start <= end) {
      mid = parseInt((start + end) / 2);
      if (target === arr[mid]) {
        return mid;
      } else if (target > arr[mid]) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    }
  
    return -1
}