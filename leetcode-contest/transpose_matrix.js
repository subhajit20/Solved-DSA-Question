var transpose = function(matrix) {
    let transposed = [];

    let row = matrix.length;
    let col = matrix[0].length - 1;

    let i = 0;
    while (i <= col) {
        let trans = makeTransposed(row, i, matrix);
        transposed.push(trans);
        i++;
    }

    return transposed;
};

function makeTransposed(row, col, matrix) {
    let arr = [];
    for (let j = 0; j <= row - 1; j++) {
        arr.push(matrix[j][col]);
    }

    return arr;
}