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
