/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

const buildBinaryTree = (treeArray, index) => {
    // 没有值的时候节点为空
    if (treeArray[index] === null || index > treeArray.length - 1) {
        return undefined;
    }

    let node = new TreeNode(treeArray[index]);
    node.left = buildBinaryTree(treeArray, (index + 1) * 2 - 1);
    node.right = buildBinaryTree(treeArray, (index + 1) * 2);

    return node;
};

const traverse = (root) => {
    if (!root) {
        return null;
    }

    // 前序位置，先交换左右子树
    let tmp = root.left;
    root.left = root.right;
    root.right = tmp;

    // 再分别遍历左右子树
    traverse(root.left);
    traverse(root.right);

    return root;
};

/**
 * 方法1：遍历思路
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree1 = function(treeArray) {
    const root = buildBinaryTree(treeArray, 0);
    const newRoot = traverse(root);
    return newRoot;
};

console.log(invertTree1([4,2,7,1,3,6,9]));

// const invert2 = (root) => {
//     // 空的时候，反回 null
//     if (root == null) {
//         return null;
//     }

//     // 先分解反转左右子树
//     let left = invert2(root.left);
//     let right = invert2(root.right);

//     // 再交换左右子树
//     root.left = right;
//     root.right = left;

//     return root;
// }
// /**
//  * 方法2：用分解的思路
//  * @param {TreeNode} root
//  * @return {TreeNode}
//  */
//  const invertTree2 = function(treeArray) {
//     let root = buildBinaryTree(treeArray, 0);

//     root = invert2(root);
//     return root;
// };

// console.log(invertTree2([4,2,7,1,3,6,9]));