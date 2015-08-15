/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function reverse(node, d) {
    if (node === null || node.next === null || d === 0) {
        return node;
    }

    var result = null;
    var rest = null;
    var tail = null;

    while (d--) {
        var tmp = node;
        node = node.next;
        tmp.next = null;

        if (result === null) {
            result = tmp;
            tail = tmp;
        } else {
            tmp.next = result;
            result = tmp;
        }
    }

    tail.next = node;
    return result;
}

/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if (head === null || head.next === null) {
        return head;
    }

    var tail = head;
    var t = m - 1;

    if (t) {
        while (--t > 0) {
            tail = tail.next;
        }

        tail.next = reverse(tail.next, n - m + 1);
    } else {
        // if m == 1, and diff = 2 reverse linked list
        // by three node
        head = reverse(tail, n - m + 1);
    }

    return head;
};
