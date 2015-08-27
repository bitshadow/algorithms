/**
 * Given a binary tree, find its maximum depth.
 *
 * The maximum depth is the number of nodes along the longest path
 * from the root node down to the farthest leaf node.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function height(root) {
    if (root === null) return 0;

    return Math.max(height(root.right), height(root.left)) + 1;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) return 0;

    return height(root);
};
