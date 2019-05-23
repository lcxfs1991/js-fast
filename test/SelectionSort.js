
const path = require('path');
const SelectionSort = require('../algorithm/SelectionSort');

describe('SelectionSort', () => {
    it('sort 1', () => {
        let selectionSort = new SelectionSort([2, 4, 5, 3, 1]);
        expect(selectionSort.sort()).toEqual([1, 2, 3, 4, 5]);
    });

    it('sort 2', () => {
        let selectionSort = new SelectionSort([1, 3, 4, 42, 13]);
        expect(selectionSort.sort()).toEqual([1, 3, 4, 13, 42]);
    });

    it('sort 3', () => {
        let selectionSort = new SelectionSort([294, 232, 39, 2981, 3827, 29, 1938, 39, 473, 382, 498]);
        expect(selectionSort.sort()).toEqual([ 29, 39, 39, 232, 294, 382, 473, 498, 1938, 2981, 3827 ]);
    });
});
