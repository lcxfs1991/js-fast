"use strict";

const { ArrayMake } = require('../../snippet/array');

describe("Array", function() {

	it("map", function() {
        const mapResult = [1, 2, 3].map((item, index) => {
            return item + index;
        });

        const array = new ArrayMake(1 , 2, 3);
        const mapSelfResult = array.mapSelf((item, index) => {
            return item + index;
        });
        

        expect(mapResult).toEqual(mapSelfResult);
    });

    it("filter", function() {
        const filterResult = [1, 2, 3].filter((item) => {
            return item % 2 === 0;
        });

        const array = new ArrayMake(1 , 2, 3);
        const filterSelfResult = array.filterSelf((item, index) => {
            return item % 2 === 0;
        });
        

        expect(filterResult).toEqual(filterSelfResult);
    });

    it("reduce", function() {
        const reduceResult = [1, 2, 3].reduce((accumulator, currentValue, index, array) => {
            return accumulator + currentValue + index + array.length;
        }, 10);

        const array = new ArrayMake(1 , 2, 3);
        const reduceSelfResult = array.reduceSelf((accumulator, currentValue, index, array) => {
            return accumulator + currentValue + index + array.length;
        }, 10);

        expect(reduceResult).toEqual(reduceSelfResult);
    });

    it("flat", function() {
        const arr = new ArrayMake(1, 2, [3, 4], [5, [6, [7], 8]], 9, new Set([10, 11]));
        const flatSelfResult = arr.flatSelf(4);

        expect(flatSelfResult).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    });
});
