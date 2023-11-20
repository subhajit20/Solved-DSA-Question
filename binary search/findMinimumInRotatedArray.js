var findMin = function(nums) {
    var start = 0,
        end = nums.length - 1

    while (start < end) {
        var mid = parseInt((start + end) / 2)
        if (nums[mid] > nums[end]) {
            start = mid + 1
        } else end = mid
    }
    return nums[start]
};