 
const curry = (fn) => {
    return curried = (...args) => {

        if (typeof fn !== 'function') {
            return;
        }

        if (args.length >= fn.length) {
            return fn.bind(this)(...args);
        }

        return (...newArgs) => {
            return curried.bind(this)(...args.concat(newArgs));
        }

    };
};

module.exports = {
    curry
};
