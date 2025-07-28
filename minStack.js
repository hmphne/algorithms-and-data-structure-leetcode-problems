// ref: https://leetcode.com/problems/min-stack/

var MinStack = function () {
  this.stack = [];
  this.min = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.min.length === 0 || val <= this.min[this.min.length - 1]) {
    this.min.push(val);
  }
  this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.stack.length) {
    if (this.stack[this.stack.length - 1] === this.min[this.min.length - 1]) {
      this.min.pop();
    }
    this.stack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.stack.length) {
    return this.stack[this.stack.length - 1];
  }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (this.min.length) {
    return this.min[this.min.length - 1];
  }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */