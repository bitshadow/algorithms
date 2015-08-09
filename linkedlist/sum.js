/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if (l1 === null) {
        return l2;
    }

    if (l2 === null) {
        return l1;
    }

    var parity = 0;
    var quotient;
    var remainder;
    var sum;
    var node;
    var result = null;
    var tail = null;

    while (l1 && l2) {
        sum = l1.val + l2.val + parity;
        quotient = parseInt(sum / 10);
        remainder = parseInt(sum % 10);

        node = new ListNode(remainder);
        if (result === null) {
            result = node;
            tail = result;
        } else {
            tail.next = node;
            tail = tail.next;
        }

        parity = quotient;
        l1 = l1.next;
        l2 = l2.next;
    }

    var remaining = l1 === null ? l2 : l1;
    while (remaining) {
        sum = remaining.val + parity;
        quotient = parseInt(sum / 10);
        remainder = parseInt(sum % 10);
        node = new ListNode(remainder);
        tail.next = node;
        tail = tail.next;
        parity = quotient;
        remaining = remaining.next;
    }

    if (parity > 0) {
        node = new ListNode(parity);
        tail.next = node;
    }

    return result;

};
