/**
 * Given an array of n positive integers and a positive integer s,
 * find the minimal length of a subarray of which the sum ≥ s.
 * If there isn't one, return 0 instead.
 *
 * For example, given the array [2,3,1,2,4,3] and s = 7,
 * the subarray [4,3] has the minimal length under the problem constraint.
 */

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    var i,
        j,
        len = nums.length,
        min = Infinity,
        stack = [],
        sum = 0;

    for (i = 0; i < len; i++) {
        sum += nums[i];
        stack.push(nums[i]);

        if (sum >= s) {
            while (sum >= s) {
                sum -= stack.shift();
            }

            if (stack.length < min) {
                min = stack.length + 1;
            }
        }
    }

    return min === Infinity ? 0 : min;
};
