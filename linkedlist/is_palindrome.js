/**
 * Given a singly linked list, determine if it is a palindrome.
 */
   
 
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function getLength(root) {
    var temp = root;
    var count = 1;
    while(temp.next) {
        temp = temp.next;
        count++;
    }

    return count;
 }

 function reverse(node, n) {
     var rev = null;
     var tmp = node;
     while(n--) {
         var temp = tmp;
         tmp = tmp.next;
         temp.next = rev;
         rev = temp;
     }

     node.next = tmp;
     return rev;
 }

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(head === null) {
        return true;
    }
    
    var length = getLength(head);
    if(length === 1) {
        return true;
    }
    
    var l = parseInt(length/2);
    head = reverse(head, l);
    var first = head;
    var second = head;
    l = (length % 2 === 0) ? l : l + 1;
    while(l--) {
        first = first.next;
    }
    
    while(first !== null && second !== null) {
        if (first.val !== second.val) {
            return false;
        }
        
        first = first.next;
        second = second.next;
    }
    
    return true;
};

