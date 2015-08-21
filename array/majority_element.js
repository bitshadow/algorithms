/**
 * Given an array of size n, find the majority element.
 * The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 *
 * You may assume that the array is non-empty and the majority
 * element always exist in the array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if (nums.length === 1) return nums[0];

    var ml = Math.floor(nums.length / 2);
    var i, obj = {}, len = nums.length;

    for (i = 0; i < len; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]] = obj[nums[i]] + 1;
            if (obj[nums[i]] > ml) {
                return nums[i];
            }
        } else {
            obj[nums[i]] = 1;
        }
    }
};
