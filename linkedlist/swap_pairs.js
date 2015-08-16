/**
 * Given a linked list, swap every two adjacent nodes and return its head.
 *
 * For example,
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
 *
 * Your algorithm should use only constant space.
 * You may not modify the values in the list, only nodes itself can be changed.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function swap(a, b) {
    b.next = a;
    a.next = null;
    return b;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (head === null || head.next === null) return head;

    var tail = head;
    var result = null;
    while (head && head.next) {
        var nhead = head.next.next;
        // if first pair swap and assign it to result
        if (result === null) {
            result = swap(head, head.next);
            tail = result.next;
        } else {
            // if not first pair append it to the tail
            tail.next = swap(head, head.next);
            tail = tail.next.next;
        }

        head = nhead;
    }

    tail.next = head;

    return result;
};
