// ref: https://leetcode.com/problems/design-linked-list/

var MyLinkedList = function () {
  this.val = null;
  this.next = null;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let curr = this;
  let i = 0;

  if (curr.val === null || curr === null || !curr) return -1;

  while (curr && i < index) {
    curr = curr.next;
    i++;
  }
  return curr.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  if (this.val === null) {
    this.val = val;
    return;
  }

  const node = { val: this.val, next: this.next };
  this.val = val;
  this.next = node;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  if (this.val === null) {
    this.val = val;
    return;
  }

  let next = { val, next: null };
  let curr = this;

  // if (!curr.val) {
  //   this.val = val;
  //   return;
  // }
  while (curr.next !== null) {
    curr = curr.next;
  }
  curr.next = next;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let i = 0;
  let curr = this;

  if (index === 0) {
    this.addAtHead(val);
    return;
  }
  if (this.val === null) return;

  while (i < index - 1 && curr.next !== null) {
    curr = curr.next;
    i++;
  }
  let next = { val, next: curr.next };
  curr.next = next;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  let i = 0;
  let curr = this;

  if (index === 0) {
    if (curr.next !== null) {
      curr.val = curr.next.val;
      curr.next = curr.next.next;
      // return;
    } else {
      curr.val = null;
      curr.next = null;
      // return
    }
    return;
  }

  while (i < index - 1 && curr.next !== null) {
    curr = curr.next;
    i++;
  }
  if (curr.next) {
    curr.next = curr.next.next;
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
let myList = new MyLinkedList();
// let getIndex = myList.get(0);
myList.addAtHead(4);
// myList.addAtTail(3);
// myList.addAtIndex(0, 10);
// myList.addAtIndex(0, 20);
// myList.addAtIndex(1, 30);
// myList.get(1);
// myList.addAtHead(1);
// myList.addAtHead(5);

// myList.deleteAtIndex(3);
// myList.addAtHead(7);

// myList.get(3);
// myList.get(3);
// myList.get(3);

// myList.addAtHead(1);

// myList.deleteAtIndex(0);

console.log(myList);
