/**
 * Given a binary tree, determine if it is height-balanced.
 *
 * For this problem, a height-balanced binary tree is defined as a binary
 * tree in which the depth of the two subtrees of every node never differ
 * by more than 1.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function height(node) {
    if (node === null) {
        return 0;
    }

    var hr = height(node.right);
    var hl = height(node.left);
    return Math.max(hl, hr) + 1;
}

var isBalanced = function isBalanced(root) {
    if (root === null) {
        return true;
    }

    var lb = isBalanced(root.left);
    var rb = isBalanced(root.right);
    var hl = height(root.left);
    var hr = height(root.right);
    var isBal = (Math.abs(hl - hr) <= 1);
    if (isBal && lb && rb) return true;

    return false;
};
