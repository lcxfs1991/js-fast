
const path = require('path');
const InsertionSort = require('../algorithm/InsertionSort');

describe('InsertionSort', () => {
    it('sort 1', () => {
        let insertionSort = new InsertionSort([2, 4, 5, 3, 1]);
        expect(insertionSort.sort()).toEqual([1, 2, 3, 4, 5]);
    });

    it('sort 2', () => {
        let insertionSort = new InsertionSort([1, 3, 4, 42, 13]);
        expect(insertionSort.sort()).toEqual([1, 3, 4, 13, 42]);
    });

    it('sort 3', () => {
        let insertionSort = new InsertionSort([294, 232, 39, 2981, 3827, 29, 1938, 39, 473, 382, 498]);
        expect(insertionSort.sort()).toEqual([ 29, 39, 39, 232, 294, 382, 473, 498, 1938, 2981, 3827 ]);
    });
});
