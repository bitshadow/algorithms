/**
 * Given an array of integers and an integer k,
 * find out whether there there are two distinct indices i and j in the array such that
 * nums[i] = nums[j] and the difference between i and j is at most k.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    for(var i = 0; i < nums.length; i++) {
        if (i+1 >= nums.length){
            return false;
        } else {
            for(var j = i + 1; j < nums.length; j++) {
                if (nums[i] === nums[j]) {
                    if (Math.abs(i - j) <= k) {
                        return true;
                    }
                }
            }
        }
    }
    
    return false;
};
