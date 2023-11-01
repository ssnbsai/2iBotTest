"use strict";
function countPairsWithSum(array, X) {
    let count = 0;
    let i = 0;
    let j = array.length - 1;
    while (i < j) {
        const currentSum = array[i] + array[j];
        if (currentSum === X) {
            count += 1;
            i += 1;
            j -= 1;
        }
        else if (currentSum < X) {
            i += 1;
        }
        else {
            j -= 1;
        }
    }
    return count;
}
// Test cases
console.log(countPairsWithSum([3, 4, 5, 6], 1)); // Output: 0
console.log(countPairsWithSum([0, 15, 32, 2000, 15000], 15)); // Output: 1
console.log(countPairsWithSum([1, 1, 10, 32, 41], 42)); // Output: 2
