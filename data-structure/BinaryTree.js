
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    createTreeFromObject(root) {
        if (!root) {
            return null;
        }

        this.root = root;
        return this.root;
    }

    createNodeFromArray(arr) {
        const rootMap = [];

        if (!arr || !arr.length) {
            return null;
        }

        arr.forEach((val, index) => {
            const node = new Node(val);
            // 初始化根目录
            if (!this.root) {
                this.root = node;
                rootMap[index] = this.root;
                return 
            }

            // 跳过空值
            if (!val) {
                return;
            }
            
            let rootIndex = Math.ceil((index - 2) / 2);
            rootIndex = (rootIndex < 0) ? 0 :rootIndex;
            const isLeft = (index % 2) === 1;
            const root = rootMap[rootIndex];

            if (isLeft) {
                root.left = node;
            } else {
                root.right = node;
            }

            rootMap[index] = node;
        });

        return this.root;
    }

    preOrderTraverse() {
        const traverseArray = [];
        const resultArray = [];
        traverseArray.push(this.root);

        while (traverseArray.length) {
            let currentNode = traverseArray.pop();
            resultArray.push(currentNode.val);

            if (currentNode.right) {
                traverseArray.push(currentNode.right);
            }

            if (currentNode.left) {
                traverseArray.push(currentNode.left);
            }
        }

        return resultArray;
    }

    postOrderTraverse() {
        const traverseArray = [];
        const resultArray = [];
        traverseArray.push(this.root);

        while (traverseArray.length) {
            let currentNode = traverseArray.pop();
            resultArray.push(currentNode.val);

            if (currentNode.left) {
                traverseArray.push(currentNode.left);
            }

            if (currentNode.right) {
                traverseArray.push(currentNode.right);
            }
        }

        return resultArray.reverse();
    }

    inOrderTraverse() {
        const traverseArray = [];
        const resultArray = [];
        let currentNode = this.root;
        
        while (true) {
            while (currentNode) {
                traverseArray.push(currentNode);
                currentNode = currentNode.left;
            }

            if (!traverseArray.length) {
                break;
            }

            const tmp = traverseArray.pop();
            resultArray.push(tmp.val);
            currentNode = tmp.right;
        }

        return resultArray;
    }
}

module.exports = BinaryTree;