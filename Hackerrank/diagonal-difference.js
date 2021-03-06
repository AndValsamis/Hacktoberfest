// https://www.hackerrank.com/challenges/diagonal-difference/problem
// andval javascript
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// Complete the diagonalDifference function below.
function diagonalDifference(arr) {
    let diam1 = 0;
    let diam2 = 0;
    let result = 0;
    let len = arr.length;
    for (let i = 0; i < len; i++){
        diam1 += arr[i][i];
        diam2 += arr[len-i-1][i];
    }
    result = Math.abs(diam1 - diam2);
    return result;
}