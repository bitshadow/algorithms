/**
 * Remove all elements from a linked list of integers that have value val.
 *
 * Example
 * Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
 * Return: 1 --> 2 --> 3 --> 4 --> 5 
 *
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(head === null) return null;
    
    while(head && head.val === val) {
        head = head.next;
    }
    
    var temp = head;
    while(temp && temp.next) {
        if (temp.next.val === val) {
            temp.next = temp.next.next;
        } else {
            temp = temp.next;
        }
    }
    
    return head;
};
