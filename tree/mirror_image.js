/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return root;

    if (root.left) invertTree(root.left);
    if (root.right) invertTree(root.right);
    var temp = root.right;
    root.right = root.left;
    root.left = temp;
    return root;
};
