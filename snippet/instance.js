
const instanceOf = (target, origin) => {
    let left = target;
    let right = origin;
    if (typeof left !== 'object' || typeof right !== 'object') {
        return false;
    }

    while (left) {
        if (left.__proto__ === right.prototype) {
            return true;
        }

        left = left.__proto__;
    }

    return false;
};

module.exports = {
    instanceOf
};