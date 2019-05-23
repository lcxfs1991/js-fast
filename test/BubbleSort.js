
const path = require('path');
const BubbleSort = require('../algorithm/BubbleSort');

describe('BubbleSort', () => {
    it('sort 1', () => {
        let bubbleSort = new BubbleSort([2, 4, 5, 3, 1]);
        expect(bubbleSort.sort()).toEqual([1, 2, 3, 4, 5]);
    });

    it('sort 2', () => {
        let bubbleSort = new BubbleSort([1, 3, 4, 42, 13]);
        expect(bubbleSort.sort()).toEqual([1, 3, 4, 13, 42]);
    });

    it('sort 3', () => {
        let bubbleSort = new BubbleSort([294, 232, 39, 2981, 3827, 29, 1938, 39, 473, 382, 498]);
        expect(bubbleSort.sort()).toEqual([ 29, 39, 39, 232, 294, 382, 473, 498, 1938, 2981, 3827 ]);
    });
});
