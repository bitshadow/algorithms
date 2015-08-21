/**
 * Given an index k, return the kth row of the Pascal's triangle.
 *
 * For example, given k = 3,
 * Return [1,3,3,1].
 *
 * Note:
 * Could you optimize your algorithm to use only O(k) extra space?
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) return [1];

    // algorithm
    // c(n, k+1) = c(n, k) * ((n - k) / (k + 1))

    var arr = [1];
    for (i = 0; i < rowIndex; i++) {
        arr.push(arr[i] * ((rowIndex - i) / (i + 1)));
    }

    return arr;
};
