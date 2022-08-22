"use strict";

const path = require('path');
const {
    SinglyLinkedList
} = require('../data-structure/LinkedList');

describe("SinglyLinkedList", function() {

	it("isEmpty", () => {
        let list = new SinglyLinkedList();
        expect(list.isEmpty()).toBe(true);
    });

    it("last", () => {
        let list = new SinglyLinkedList();
        for (let i = 0; i < 5; i++) {
            list.add(i * 2);
        }

        expect(list.last().data).toBe(8);
    });

    it("find", () => {
        let list = new SinglyLinkedList();
        for (let i = 0; i <= 5; i++) {
            list.add(i * 2);
        }

        expect(list.find(4).data).toBe(2);
        expect(list.find(4).next.data).toBe(4);
        expect(list.find(5)).toBe(null);
    });

    it("del", () => {
        let list = new SinglyLinkedList();
        for (let i = 0; i <= 5; i++) {
            list.add(i * 2);
        }

        list.del(4);
        expect(list.traverse()).toBe('0,2,6,8,10');
    });

    it("reverse", () => {
        let list = new SinglyLinkedList();
        for (let i = 0; i <= 5; i++) {
            list.add(i * 2);
        }

        expect(list.reverse().traverse()).toBe('10,8,6,4,2,0');
    });

    it("reverse 3 - 5", () => {
        let list = new SinglyLinkedList();
        for (let i = 0; i <= 5; i++) {
            list.add(i * 2);
        }

        expect(list.reverseNToM(3, 5).traverse()).toBe('0,2,8,6,4,10');
    });

    it("reverse 2 - 5", () => {
        let list = new SinglyLinkedList();
        for (let i = 0; i <= 5; i++) {
            list.add(i * 2);
        }

        expect(list.reverseNToM(2, 5).traverse()).toBe('0,8,6,4,2,10');
    });

});
