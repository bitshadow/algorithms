/**
 * Given a list, rotate the list to the right by k places, where k is non-negative.
 *
 * For example:
 * Given 1->2->3->4->5->NULL and k = 2,
 * return 4->5->1->2->3->NULL.
 *
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var getLength = function (node) {

    var count = 0;
    var tail = node;
    while(tail) {
        count++;
        tail = tail.next;
    }

    return count;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (head === null || head.next === null || k === 0)  {
      return head;
  }

  var tail = head;
  while (tail.next) {
      tail = tail.next;
  }

  var length = getLength(head);
  var times =  (k > length)  ? length - (k % length) : length - k;
  while(times--) {
      var temp = head;
      head = head.next;
      temp.next = null;
      tail.next = temp;
      tail = tail.next;
  }

  return head;
}
