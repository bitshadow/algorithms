/**
 * Given a singly linked list L: L0→L1→…→Ln-1→Ln,
 * reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…
 *
 * You must do this in-place without altering the nodes' values.
 *
 * For example,
 * Given {1,2,3,4}, reorder it to {1,4,2,3}.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 var reverse = function(node) {
    if (!node) return null;
    var result = null;

    while(node) {
        var tmp = node;
        node = node.next;
        tmp.next = null;
        if (result === null) {
            result = tmp;
        } else {
            tmp.next = result;
            result = tmp;
        }
    }

    return result;
 };

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (head === null || head.next === null || head.next.next === null) {
        return;
    }

    // find middle element
    var slow = head;
    var fast = head;
    while(fast && fast.next) {
        fast = fast.next.next;

        if (fast) {
            slow = slow.next;
        }
    }

    fast = slow.next;
    slow.next = null;

    // reverse the list
    var reversed = reverse(fast);
    var tail = head;

    // get first pointer from reversedlist
    // and put it in the main list one by one
    while (reversed) {
        var tmp = reversed;
        reversed = reversed.next;
        tmp.next = null;

        var tmptail = tail.next;
        tail.next = tmp;
        tail = tail.next;
        if (tail) {
            tail.next = tmptail;
            tail = tail.next;
        }
    }
};

