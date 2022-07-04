"use strict";

const path = require('path');
const Stack = require('../data-structure/Stack');

describe("Stack", function() {

	it("isEmpty", function() {
        let stack = new Stack();
        expect(stack.isEmpty()).toBe(true);
    });

    it("isFull", function() {
        let stack = new Stack(5);
        for (let i = 0; i < 10; i++) {
            stack.push(i);
        }
        expect(stack.isFull()).toBe(true);
    });

    it("top", function() {
        let stack = new Stack();
        for (let i = 0; i < 10; i++) {
            stack.push(i);
        }
        stack.pop();
        expect(stack.top()).toBe(8);
    });

    it("size", function() {
        let stack = new Stack();
        for (let i = 0; i < 20; i++) {
            stack.push(i);
        }
        stack.pop();
        expect(stack.size()).toBe(19);
    });

    it("traverse", function() {
        let stack = new Stack();
        for (let i = 0; i < 5; i++) {
            stack.push(i);
        }
        expect(stack.traverse()).toBe('4,3,2,1,0');
	});

});
