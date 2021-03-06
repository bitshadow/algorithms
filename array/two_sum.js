/**
 * Given an array of integers, find two numbers such that
 * they add up to a specific target number.
 *
 * The function twoSum should return indices of the two numbers such that
 * they add up to the target, where index1 must be less than index2.
 * Please note that your returned answers (both index1 and index2)
 * are not zero-based.
 *
 * You may assume that each input would have exactly one solution.
 *
 * Input: numbers={2, 7, 11, 15}, target=9
 * Output: index1=1, index2=2
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    var map = {},
        i, len = nums.length;

    for (i = 0; i < len; i++) {
        var num = nums[i];
        var diff = target - num;
        if (map.hasOwnProperty(diff)) {
            return [map[diff] + 1, i + 1];
        } else {
            map["" + num] = i;
        }
    }

    return [];
};
