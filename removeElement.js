// ref: https://leetcode.com/problems/remove-element/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let k = 0;
    
    for (numIndex = 0; j < nums.length; numIndex++) {
        if (nums[numIndex] !== val) {
            nums[k] = nums[numIndex]
            k++
        }
    }
    return k
};

// ✅ Time Complexity: O(n)

// ✅ Space Complexity: O(1)