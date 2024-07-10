
Function.prototype.myBind = function(context) {
    if (typeof this !== 'function') {
        throw new Error('myBind is not defined.');
    }

    let fn = this;
    let ctx = context;

    return function func() {
        let args = arguments;
        let result;

        return fn.apply(ctx, args);
    }
}


const obj = {
    name: 'abc',
};

const obj1 = {
    name: 'cde',
};

function log(d, e) {
    console.log(this.name, d, e);
}

const log1 = log.bind(obj);
log1.bind(obj1)('d', 'e');

const log2 = log.myBind(obj);
log2.bind(obj1)('d', 'e');