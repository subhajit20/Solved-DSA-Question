// find if the array is sorted or not

function isSorted(arr, current, next) {
    if (arr[current] < arr[next]) {
        current = current + 1;
        next = next + 1;
        if (current >= arr.length - 1 || next >= arr.length - 1) {
            return true
        }
        return isSorted(arr, current, next);

    } else if ((arr[current] > arr[next])) {
        return false
    }
}

let arr = [10, 6];

console.log(isSorted(arr, 0, 1));