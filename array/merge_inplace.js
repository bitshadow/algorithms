function moveToRight(nums1, m, n) {
    var j = m - 1, l = m + n - 1;
    while (j >= 0) {
        nums1[l] = nums1[j];
        j--;
        l--;
    }
}

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if (n === 0) return;

    if (m === 0) {
        var c;
        for (c = 0; c < n; c++) {
            nums1[c] = nums2[c];
        }
        return;
    }

    moveToRight(nums1, m, n);

    var k = 0;
    var i = n;
    var j = 0;
    while(i < m + n && j < n) {
        if (nums1[i] <= nums2[j]) {
            nums1[k] = nums1[i];
            i++;
        } else {
            nums1[k] = nums2[j];
            j++;
        }

        k++;
    }

    if (i === m + n) {
        while (j < n) {
            nums1[k] = nums2[j];
            k++;
            j++;
        }
    }
};