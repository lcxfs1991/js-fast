const ArrayMake = Array;

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


module.exports = {
    ArrayMake,
};