/**
 * Given an array and a value, remove all instances of that value in
 * place and return the new length.
 *
 * The order of elements can be changed. It doesn't matter what you
 * leave beyond the new length.
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for (var i = 0, len = nums.length; i < len;) {
        if (nums[i] !== val) {
            i++;
        } else {
            nums.splice(i, 1);
        }
    }

    return nums.length;
};
