
class Stack {
	constructor(max = 100) {
        this.max = max;
        this.data = [];
	}

	isFull() {
        return this.data.length === this.max;
	}

	isEmpty() {
        return !this.data.length;
	}

	push(val) {
        if (this.isFull()) {
            return -1;
        }

        return this.data.push(val);
	}

	pop() {

    }

    top() {

    }

}

module.exports = Stack;
