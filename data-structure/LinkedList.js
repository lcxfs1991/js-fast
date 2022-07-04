
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

class BaseLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return !this.size;
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

    traverse() {
        let result = [];
        let head = this.head;
        while (head) {
            result.push(head.data);
            head = head.next;
        }
        return result.join(',');
    }
}

class SinglyLinkedList extends BaseLinkedList {
	constructor() {
        super();
    }

    add(val) {
        let node = new UniNode(val);

        if (!this.size) {
            this.head = node;
        } else {
            let last = this.last();
            last.next = node;
        }
        ++this.size;
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

    // 逆序
    reverse() {
        let prev = null;
        let next = (this.head) ? this.head.next : null;

        while (next) {
            this.head.next = prev;
            prev = this.head;

            this.head = next;
            next = next.next;

            if (!next) {
                this.head.next = prev;
            }
        }

        return this;
    }

}

class DoublelyLinkedList extends BaseLinkedList {
    constructor() {
        super();
    }

    isEmpty() {
        return !this.size;
    }

    add(val) {
        let node = new BiNode(val);

        if (!this.size) {
            this.head = node;
            node.prev = this.head;
        } else {
            let last = this.last();
            last.next = node;
            node.prev = last;
        }
        ++this.size;
    }
}

module.exports = {
    SinglyLinkedList,
    DoublelyLinkedList,
};
