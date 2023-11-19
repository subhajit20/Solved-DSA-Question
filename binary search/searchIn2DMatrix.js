function searchMatrix(matrix, target) {
    let row = 0;
    let col = matrix[row].length - 1;
  
    while (row <= matrix.length - 1 && col > -1) {
      if (matrix[row][col] === target) {
        return true
      }
      if (matrix[row][0] <= target && matrix[row][col] < target) {
        row++
      } else if (matrix[row][0] <= target && matrix[row][col] > target) {
        col--
      } else if (matrix[row][0] > target) {
        return false
      }
    }
  
    return false
}
  
  
let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
]
  
console.log(searchMatrix(matrix, 13));