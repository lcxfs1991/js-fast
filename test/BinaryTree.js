const path = require('path');
const BinaryTree = require('../data-structure/BinaryTree');

describe('BinaryTree', () => {
    it('createNodeFromArray - 1', () => {
        const arr = [0, 1, 2, 3, 4, 5];
        const binaryTree = new BinaryTree();
        const root = binaryTree.createNodeFromArray(arr);
        const json = '{"val":0,"left":{"val":1,"left":{"val":3,"left":null,"right":null},"right":{"val":4,"left":null,"right":null}},"right":{"val":2,"left":{"val":5,"left":null,"right":null},"right":null}}';
        expect(JSON.stringify(root)).toEqual(json);
    });

    it('createNodeFromArray - 2', () => {
        const arr = [0, 1, 2, null, 3, 4, 5];
        const binaryTree = new BinaryTree();
        const root = binaryTree.createNodeFromArray(arr);
        const json = '{"val":0,"left":{"val":1,"left":null,"right":{"val":3,"left":null,"right":null}},"right":{"val":2,"left":{"val":4,"left":null,"right":null},"right":{"val":5,"left":null,"right":null}}}';
        expect(JSON.stringify(root)).toEqual(json);
    });

    it('preOrderTraverse', () => {
        const arr = [0, 1, 2, null, 3, 4, 5];
        const binaryTree = new BinaryTree();
        const root = binaryTree.createNodeFromArray(arr);
        
        expect(binaryTree.preOrderTraverse().join(',')).toEqual('0,1,3,2,4,5');
    });

    it('postOrderTraverse', () => {
        const arr = [0, 1, 2, null, 3, 4, 5];
        const binaryTree = new BinaryTree();
        const root = binaryTree.createNodeFromArray(arr);
        
        expect(binaryTree.postOrderTraverse().join(',')).toEqual('3,1,4,5,2,0');
    });

    it('inOrderTraverse', () => {
        const arr = [0, 1, 2, null, 3, 4, 5];
        const binaryTree = new BinaryTree();
        const root = binaryTree.createNodeFromArray(arr);
        
        expect(binaryTree.inOrderTraverse().join(',')).toEqual('1,3,0,4,2,5');
    });
});

//    0
//   /   \
//   1     2
//    \    /\
//     3   4 5
