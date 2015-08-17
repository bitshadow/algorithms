/**
 * Given numRows, generate the first numRows of Pascal's triangle.
 *
 *    For example, given numRows = 5,
 *    Return
 *
 *    [
 *         [1],
 *        [1,1],
 *       [1,2,1],
 *      [1,3,3,1],
 *     [1,4,6,4,1]
 *    ]
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 0) return [];

    var result = [
        [1]
    ];

    var arr, c, t;
    for (c = 1; c < numRows; c++) {
        arr = [];
        for (t = 0; t < result[c - 1].length - 1; t++) {
            arr.push(result[c - 1][t] + result[c - 1][t + 1]);
        }

        arr.unshift(1);
        arr.push(1);
        result.push(arr);
    }

    return result;
};
