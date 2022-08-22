
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

            // 到尽头的时候，倒数第一个节点，指向倒数第二个节点
            if (!next) {
                this.head.next = prev;
            }
        }

        return this;
    }

    reverseNToM(m, n) {
        let prev = null;
        let cur = this.head;

        for (let i = 1; i < m - 1; i++) {
            cur = cur.next;
        }

        // n前的头节点
        let head = cur;
        // start 是反转区间的第一个结点
        let start = head.next  
        prev = start;
        cur = prev.next;

        for (let i = m; i < n; i++) {
            let next = cur.next
            cur.next = prev
            prev = cur
            cur = next;
        }

        head.next = prev;
        start.next = cur;

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
    UniNode,
    BiNode,
};
