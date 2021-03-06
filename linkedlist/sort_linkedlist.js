/**
 * Sort a linked list in O(n log n) time using constant space complexity.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function merge(l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;

    var result = null;
    var tail = null;
    var tmp = null;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            tmp = l1;
            l1 = l1.next;
            tmp.next = null;

            if (result === null) {
                result = tmp;
                tail = tmp;
            } else {
                tail.next = tmp;
                tail = tail.next;
            }
        } else {
            tmp = l2;
            l2 = l2.next;
            tmp.next = null;

            if (result === null) {
                result = tmp;
                tail = tmp;
            } else {
                tail.next = tmp;
                tail = tail.next;
            }
        }
    }

    var remaining = l1 === null ? l2 : l1;

    tail.next = remaining;
    return result;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function sortList(head) {
    if (head === null || head.next === null) {
        return head;
    }

    var fast = head;
    var slow = head;

    while (fast && fast.next) {
        fast = fast.next.next;

        if (fast) {
            slow = slow.next;
        }
    }

    fast = slow.next;
    slow.next = null;
    slow = head;

    var a = sortList(slow);
    var b = sortList(fast);

    return merge(a, b);

};
