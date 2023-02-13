const ArrayMake = Array;

/**
 * 数组迭代
 * @param {*} callback 
 * @param {*} thisArg 
 * @returns 
 */
ArrayMake.prototype.mapSelf = function(callback, thisArg) {
    if (!thisArg) {
        thisArg = this;
    }

    const resultArray = [];
    for (let i = 0, len = this.length; i < len; i++) {
        let result = callback.bind(thisArg)(this[i], i);
        resultArray.push(result);
    }

    return resultArray;
};

/**
 * 数组筛选
 * @param {*} callback 
 * @param {*} thisArg 
 * @returns 
 */
ArrayMake.prototype.filterSelf = function(callback, thisArg) {
    if (!thisArg) {
        thisArg = this;
    }

    const resultArray = [];
    for (let i = 0, len = this.length; i < len; i++) {
        let result = callback.bind(thisArg)(this[i], i);
        result && resultArray.push(this[i]);
    }

    return resultArray;
};

/**
 * 数组reduce
 * @param {*} callback 
 * @param {*} initialValue 
 * @returns 
 */
ArrayMake.prototype.reduceSelf = function(callback, initialValue) {
    let result = undefined;
    for (let i = 0, len = this.length; i < len; i++) {
        if (i === 0) {
            initialValue = initialValue|| this[0];
            result = callback(initialValue, this[i], i, this);
        } else {
            result = callback(result, this[i], i, this);
        }
    }

    return result;
};

const flatIterator = function* (itr, depth) {
    for (let item of itr) {
      if (item[Symbol.iterator] && depth) yield* flatIterator(item, --depth);
      else yield item;
    }
};

/**
 * 数组扁平化
 * @param {*} depth 
 * @returns 
 */
ArrayMake.prototype.flatSelf = function(depth = 1) {
    return [...flatIterator(this, depth)];
};



module.exports = {
    ArrayMake,
};