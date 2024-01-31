/**
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
 * Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
 * The tests are generated such that there is exactly one solution. You may not use the same element twice.
 * Your solution must use only constant extra space.
 */

var twoSum = function(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;

    let mid;
    let sum;
    console.log();

    while (start <= end) {
        mid = Math.ceil((start + end) / 2);

        if (numbers[start] + numbers[end] > target) {
            end--;
        } else if (numbers[start] + numbers[end] < target) {
            start++;
        } else {
            return [start + 1, end + 1];
        }
    }

    return [];
};

console.log(twoSum([2, 7, 11, 15], 9));