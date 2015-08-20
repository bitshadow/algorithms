/**
 * Given a sorted integer array without duplicates,
 * return the summary of its ranges.
 * For example, given [0,1,2,4,5,7], return ["0->2","4->5","7"].
 */

function format(a, b) {
   return b ? a + '->' + b : a + '';
}

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (nums.length === 0) return nums;
    if (nums.length === 1) return ["" + nums[0]];

    var last, j, len;
    var result = [];

    for (last = 0, j = 1, len = nums.length; j < len; j++) {
        if (nums[j] !== nums[j - 1] + 1) {
            if (last === j - 1) {
                result.push(format(nums[last]));
            } else {
                result.push(format(nums[last], nums[j - 1]));
            }

            last = j;
        }

        if (j === len - 1) {
            if (nums[j] === nums[j - 1] + 1) {
                result.push(format(nums[last],nums[j]));
            } else {
                result.push(format(nums[j]));
            }
        }
    }

    return result;
};
