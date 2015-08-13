/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }

    var result = null;
    var traveller = null;
    var tmp;
    while (head) {
        tmp = head;
        head = head.next;
        tmp.next = null;

        if (result === null) {
            result = tmp;
        } else if (result.val >= tmp.val) {
            // prepend the node.
            tmp.next = result;
            result = tmp;
        } else {
            traveller = result;
            // find where to place
            // place the node.
            while (traveller) {
                if (traveller && traveller.next) {
                    if (traveller.val < tmp.val && traveller.next.val >= tmp.val) {
                        var holder = traveller.next;
                        traveller.next = tmp;
                        tmp.next = holder;
                        break;
                    }

                    traveller = traveller.next;
                } else {
                    // if no placement found. append it.
                    traveller.next = tmp;
                    traveller = tmp.next;
                }
            }
        }
    }

    return result;
};
