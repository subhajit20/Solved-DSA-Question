function search(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let mid;
  
    while (start <= end) {
      mid = parseInt((start + end) / 2);
      if (nums[mid] > nums[mid + 1]) {
        break;
      } if (nums[mid] < nums[mid - 1]) {
        mid = mid - 1
        break
      } else if (nums[start] > nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1
      }
    }
    console.log(mid)
  
    let left = binarySearch(nums, 0, mid, target);
    if (left !== -1) {
      // console.log(left)
      return left
    } else {
      let right = binarySearch(nums, mid + 1, nums.length - 1, target);
      return right
    }
  }
  
  function binarySearch(nums, start, end, target) {
    let mid;
    while (start <= end) {
      mid = parseInt((start + end) / 2);
      if (target === nums[mid]) {
        return mid
      } else if (target > nums[mid]) {
        start = mid + 1
      } else {
        end = mid - 1
      }
    }
  
    return -1
  }