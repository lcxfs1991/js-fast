/**
 * @title 380. O(1) 时间插入、删除和获取随机元素
 * @url https://leetcode.cn/problems/insert-delete-getrandom-o1/?envType=study-plan-v2&envId=top-interview-150
 */


var RandomizedSet = function() {
    this.data = new Map();
    this.array = new Array();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (!this.data.has(val)) {
        this.data.set(val, val);
        this.array.push(val);
        return true;
    }

    return false;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.data.has(val)) {
        this.data.delete(val);
        // console.log(this.array);
        const index = this.array.findIndex((v) => v === val);
        this.array.splice(index, 1);
        return true;
    }

    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const max = this.array.length;
    const min = 0;
    const index = Math.floor(Math.random() * (max - min) + min); 

    return this.array[index];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var obj = new RandomizedSet()
console.log(obj.insert(1))
console.log(obj.remove(2))
console.log(obj.insert(2))
console.log(obj.getRandom())
console.log(obj.remove(1))
console.log(obj.insert(2))
console.log(obj.getRandom())