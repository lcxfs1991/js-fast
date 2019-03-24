
class Queue {
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

	enqueque(val) {
        if (this.isFull()) {
            return -1;
        }

        return this.data.push(val);
	}

	dequeque() {
        if (this.isEmpty()) {
            return null;
        }

        return this.data.shift();
    }

    size() {
        return this.data.length;
    }

    top() {
        if (this.isEmpty()) {
            return null;
        }

        return this.data[0];
    }

    tail() {
        if (this.isEmpty()) {
            return null;
        }

        return this.data[this.size() - 1];
    }

    traverse() {
        return this.data.join(',');
    }

}

module.exports = Queue;
