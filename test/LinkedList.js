"use strict";

const path = require('path');
const {
    UniLinkedList
} = require('../data-structure/LinkedList');

describe("UniLinkedList", function() {

	it("isEmpty", function() {
        let list = new UniLinkedList();
        expect(list.isEmpty()).toBe(true);
    });

    it("last", function() {
        let list = new UniLinkedList();
        for (let i = 0; i < 5; i++) {
            list.add(i * 2);
        }

        expect(list.last().data).toBe(8);
    });

    it("find", function() {
        let list = new UniLinkedList();
        for (let i = 0; i <= 5; i++) {
            list.add(i * 2);
        }

        expect(list.find(4).data).toBe(2);
        expect(list.find(4).next.data).toBe(4);
        expect(list.find(5)).toBe(null);
    });

    it("del", function() {
        let list = new UniLinkedList();
        for (let i = 0; i <= 5; i++) {
            list.add(i * 2);
        }

        list.del(4);
        expect(list.traverse()).toBe('0,2,6,8,10');
    });

});
