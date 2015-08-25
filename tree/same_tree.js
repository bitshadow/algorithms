/**
 * Given two binary trees, write a function to check if they are equal or not.
 * Two binary trees are considered equal if they are structurally identical
 * and the nodes have the same value.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (p === null && q === null) return true;
    if ((p && !q) || (q && !p)) return false;

    var is = (p.val === q.val);
    var l = isSameTree(p.right, q.right);
    var r = isSameTree(p.left, q.left);
    return is && l && r;
};
