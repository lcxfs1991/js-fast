
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
        if (this.isEmpty()) {
            return null;
        }

        return this.data.pop();
    }

    size() {
        return this.data.length;
    }

    top() {
        if (this.isEmpty()) {
            return null;
        }

        return this.data[this.size() - 1];
    }

    traverse() {
        return this.data.reverse().join(',');
    }

}

module.exports = Stack;
