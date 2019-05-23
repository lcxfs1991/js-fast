
const path = require('path');
const MergeSort = require('../algorithm/MergeSort');

describe('MergeSort - recursion', () => {
    it('sort 1', () => {
        let mergeSort = new MergeSort([2, 4, 5, 3, 1]);
        expect(mergeSort.sort()).toEqual([1, 2, 3, 4, 5]);
    });

    it('sort 2', () => {
        let mergeSort = new MergeSort([1, 3, 4, 42, 13]);
        expect(mergeSort.sort()).toEqual([1, 3, 4, 13, 42]);
    });

    it('sort 3', () => {
        let mergeSort = new MergeSort([294, 232, 39, 2981, 3827, 29, 1938, 39, 473, 382, 498]);
        expect(mergeSort.sort()).toEqual([ 29, 39, 39, 232, 294, 382, 473, 498, 1938, 2981, 3827 ]);
    });
});

describe('MergeSort - iteration', () => {
    it('sort 1', () => {
        let mergeSort = new MergeSort([2, 4, 5, 3, 1]);
        expect(mergeSort.sort('iteration')).toEqual([1, 2, 3, 4, 5]);
    });

    // it('sort 2', () => {
    //     let mergeSort = new MergeSort([1, 3, 4, 42, 13]);
    //     expect(mergeSort.sort()).toEqual([1, 3, 4, 13, 42]);
    // });

    // it('sort 3', () => {
    //     let mergeSort = new MergeSort([294, 232, 39, 2981, 3827, 29, 1938, 39, 473, 382, 498]);
    //     expect(mergeSort.sort()).toEqual([ 29, 39, 39, 232, 294, 382, 473, 498, 1938, 2981, 3827 ]);
    // });
});
