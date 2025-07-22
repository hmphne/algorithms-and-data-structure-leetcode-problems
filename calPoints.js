// ref: https://leetcode.com/problems/baseball-game/

// An integer x.
// Record a new score of x.
// '+'.
// Record a new score that is the sum of the previous two scores.
// 'D'.
// Record a new score that is the double of the previous score.
// 'C'.
// Invalidate the previous score, removing it from the record.


/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let score = [];
  let total = 0;

  for (let i = 0; i < operations.length; i++) {
    let operation = operations[i];

    if (operation === "C") {
      score.pop();
    } else if (operation === "D") {
      score.push(score[score.length - 1] * 2);
    } else if (operation === "+") {
      score.push(score[score.length - 1] + score[score.length - 2]);
    } else {
      score.push(parseInt(operation));
    }
  }

  for (let i of score) total += i;
  return total;
};


// ✅ Time Complexity: O(n)

// ✅ Space Complexity: O(n)

