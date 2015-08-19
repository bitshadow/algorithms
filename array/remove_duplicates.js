/**
 * Given a sorted array, remove the duplicates in place such that each
 * element appear only once and return the new length.
 *
 * Do not allocate extra space for another array,
 * you must do this in place with constant memory.
 *
 * For example,
 * Given input array nums = [1,1,2],
 * Your function should return length = 2,
 * with the first two elements of nums being 1 and 2 respectively.
 * It doesn't matter what you leave beyond the new length.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0 || nums.length === 1) return nums.length;
    if (nums[0] === nums[nums.length - 1]) return 1;

    var i, k, len;
    for (i = 0, k = 1, len = nums.length; k < len; k++) {

        if (nums[i] !== nums[k]) {
            nums[i + 1] = nums[k];
            i++;
        }
    }

    return i + 1;
};
