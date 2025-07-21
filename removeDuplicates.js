// ref: https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0
    for (j=1; j<nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j]
        }
    }
    return i + 1
};