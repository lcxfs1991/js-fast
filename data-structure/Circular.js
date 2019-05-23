// 循环队列

class CircularQueue {
	constructor(length = 10) {
        this.data = new Array(length);
        this.head = 0;
        this.tail = 0;
	}

	isFull() {
        return this.tail > this.head && this.tail === length - 1 || this.tail < this.head && this.tail + 1 === this.head;
	}

	isEmpty() {
        return this.head === this.tail;
	}

	enqueque(val) {
        if (this.isFull()) {
            return false;
        }

        ++this.tail;


        if (this.tail > this.data.length - 1) {
            this.tail = 0;
        }
        else {
            return false;
        }

        this.data[this.tail] = val;

        return true;
	}

	dequeque() {
        if (this.isEmpty()) {
            return false;
        }

        this.data[this.head] = null;
        ++this.head;

        if (this.head > this.data.length - 1) {
            this.head = 0;
        }
    }

    top() {
        if (this.isEmpty()) {
            return null;
        }

        return this.data[this.head];
    }

    tail() {
        if (this.isEmpty()) {
            return null;
        }

        return this.data[this.tail];
    }

    traverse() {
        let str = '';
        for (let i = this.head; i < this.data.length; i++) {
            str += `${this.data[i]},`
        }

        if (this.tail < this.head) {
            for (let i = 0; i <= this.tail; i++) {
                str += `${this.data[i]},`
            }
        }

        return str.slice(0, str.length - 1)
    }

}

module.exports = CircularQueue;
