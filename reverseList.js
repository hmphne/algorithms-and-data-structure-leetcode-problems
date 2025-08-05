// ref: https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

var buildLinkedList = function (arr) {
  let dummy = new ListNode(0);
  let current = dummy;

  for (let i = 0; i < arr.length; i++) {
    let node = new ListNode(arr[i]);
    current.next = node;
    current = current.next;
  }
  return dummy.next;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Solution using recursion which I couldn't come up with!
// var reverseList = function (head) {
//   if (head === null || head.next === null) return head;

//   let newHead = reverseList(head.next);
//   head.next.next = head;
//   head.next = null;

//   return newHead;
// };

var reverseList = function (head) {
  let curr = head;
  let reverse = null;
  while (curr !== null) {
    let forward = curr.next;
    curr.next = reverse;
    reverse = curr;
    curr = forward;
  }
  return reverse;
};

const head = buildLinkedList([1, 2, 3, 4, 5]);
reverseList(head);

// ✅ Time Complexity: O(n)

// ✅ Space Complexity: O(1)

// linked list explained: https://www.freecodecamp.org/news/how-linked-lists-work/
