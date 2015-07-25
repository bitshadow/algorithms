/**
 * Write a program to find the node at which the intersection of two singly linked lists begins.
 *
 *
 * For example, the following two linked lists:
 *
 * A:          a1 → a2
 *                    ↘
 *                      c1 → c2 → c3
 *                    ↗            
 * B:     b1 → b2 → b3
 * begin to intersect at node c1.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var getLength = function(root) {
    var temp = root;
    var count = 1;
    while(temp.next !== null) {
        temp = temp.next;
        count++;      
    }
    
    return count;
}
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) {
        return null;
    }

    var la = getLength(headA);
    var lb = getLength(headB);
    var tempa = headA;
    var tempb = headB;
    var d = 0;

    if (la < lb) {
        tempa = headB;
        tempb = headA;
        d = lb - la;
    } else {
        d = la - lb;
    }

    while(d--) {
        tempa = tempa.next;
    }
    
    while(tempa) {
        if (tempa == tempb) {
            return tempa;
        }
        tempa = tempa.next;
        tempb = tempb.next;
    }
    
    return null;
};
