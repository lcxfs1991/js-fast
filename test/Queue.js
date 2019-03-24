"use strict";

const path = require('path');
const Queue = require('../data-structure/Queue');

describe("Queue", function() {

	it("isEmpty", function() {
        let queue = new Queue();
        expect(queue.isEmpty()).toBe(true);
    });

    it("isFull", function() {
        let queue = new Queue(5);
        for (let i = 0; i < 10; i++) {
            queue.enqueque(i);
        }
        expect(queue.isFull()).toBe(true);
    });

    it("top", function() {
        let queue = new Queue();
        for (let i = 0; i < 10; i++) {
            queue.enqueque(i);
        }
        queue.dequeque();
        expect(queue.top()).toBe(1);
    });

    it("size", function() {
        let queue = new Queue();
        for (let i = 0; i < 20; i++) {
            queue.enqueque(i);
        }
        queue.dequeque();
        expect(queue.size()).toBe(19);
    });

    it("traverse", function() {
        let queue = new Queue();
        for (let i = 0; i < 5; i++) {
            queue.enqueque(i);
        }
        expect(queue.traverse()).toBe('0,1,2,3,4');
	});

});
