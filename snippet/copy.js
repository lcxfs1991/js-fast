const isObject = (obj) => {
    return Object.prototype.toString.call(obj) === '[object Object]';
}

const deepCopy = (target, origin) => {
    if (!isObject(target) || !isObject(origin)) {
        return;
    }

    for (key in origin) {
        if (isObject(origin[key])) {
            target[key] = {};
            deepCopy(target[key], origin[key]);
        } else if (Array.isArray(origin[key])) {
            target[key] = Array.from(origin[key]);
        } else {
            target[key] = origin[key];
        }
    }
};

module.exports = {

};