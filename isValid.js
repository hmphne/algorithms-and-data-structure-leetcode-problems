// ref: https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const dict = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  let stack = [];

  for (i = 0; i < s.length; i++) {
    let item = s[i];

    if (["(", "[", "{"].includes(item)) {
      stack.push(item);
    } else {
      if (stack[stack.length - 1] === dict[item]) {
        stack.pop();
      }
    }
  }
  return !stack.length;
};

// ✅ Time Complexity: O(n)

// ✅ Space Complexity: O(n)
