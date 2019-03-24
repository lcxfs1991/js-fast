
class UniNode {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

class BiNode {
    constructor(val) {
        this.data = val;
        this.prev = null;
        this.next = null;
    }
}

class UniLinkedList {
	constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return !this.size;
    }

    add(val) {
        let node = new UniNode(val);

        if (!this.size) {
            this.head = node;
        }
        else {
            let last = this.last();
            last.next = node;
        }
        ++this.size;
    }

    find(val) {
        let next = this.head;
        while (next) {
            if (next.next && next.next.data === val) {
                return next;
            }
            next = next.next;
        }
        return null;
    }

    del(val) {
        let parent = this.find(val);
        if (!parent) {
            return false;
        }

        parent.next = parent.next.next || null;
        --this.size;
        return true;
    }

    last() {
        let next = this.head;
        while (next) {
            if (!next.next) {
                return next;
            }

            next = next.next;
        }

        return next;
    }

    traverse() {
        let result = [];
        let next = this.head;
        while (next) {
            result.push(next.data);
            next = next.next;
        }
        return result.join(',');
    }

}

module.exports = {
    UniLinkedList,
};
