// ref: https://leetcode.com/problems/concatenation-of-array/

// first solution:

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  let ans = [];
  let n = nums.length;
  for (i = 0; i < n; i++) {
    ans[i] = nums[i];
    ans[n + i] = nums[i];
  }
  return ans
};

// ✅ Time Complexity: O(n)

// ✅ Space Complexity: O(n)

// second solution (best):
var getConcatenation = function (nums) {
  return nums.concat(nums);
};
