
class List {
    constructor() {
        this.dataStore = [];
        this.listSize = 0;
        this.pos = 0;
        this.length = 0;
    }

    length() {
        return this.listSize;
    }

    clear() {
        this.listSize =  this.pos = 0;
        let result = delete this.dataStore;
        this.dataStore = [];
        return result;
    }

    toString() {
        return this.dataStore.toString();
    }

    getElement() {
        if (this.listSize) {
            return this.dataStore[this.pos];
        }
        return null;
    }

    insert(after, item) {
        let index = this.find(after);

        if (index >= 0) {
            this.dataStore.splice(index + 1, 0, item);
            ++this.listSize;
            return true;
        }

        return false;
    }

    // 元素末尾添加新元素
    append(item) {
        this.dataStore[this.listSize++] = item;
        return this.listSize;
    }

    preppend(item) {
        this.dataStore.unshift(item);
        ++this.listSize;
        return 0;
    }

    replace(replaceItem, item) {
        let index = this.find(replaceItem);

        if (index >= 0) {
            this.dataStore.splice(index, 0, item);
            return true;
        }
        return false;
    }

    remove(item) {
        let index = this.find(item);
        if (index >= 0) {
            this.dataStore.splice(index, 1);
            --this.listSize;
            return true;
        }
        return false;
    }

    // 寻找元素
    find(item) {
        for (let i = 0; i < this.listSize; i++) {
            if (this.dataStore[i] === item) {
                return i;
            }
        }

        return -1;
    }

    contains(item) {
        return this.find(item) >= 0;
    }

    currPos() {
        return this.pos;
    }

    front() {
        this.post = 0;
    }

    end() {
        this.post = this.listSize - 1;
    }

    prev() {
        --this.pos;
    }

    next() {
        if (this.post < this.listSize) {
            ++this.pos;
        }
    }

    hasNext() {
        return this.pos < this.listSize;
    }

    hasPrev() {
        return this.pos > 0;
    }

    moveTo(position) {
        this = position;
    }
};

module.exports = List;
