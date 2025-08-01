// ref: https://leetcode.com/problems/shuffle-the-array/

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const result = [];
    
    for (let i = 0; i < n; i++) {
        result.push(nums[i]);      
        result.push(nums[i + n]); 
    }
    return result;
};


// ✅ Time Complexity: O(n)

// ✅ Space Complexity: O(n)