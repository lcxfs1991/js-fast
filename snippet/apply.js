

Function.prototype.myApply = function (context) {
    if (typeof this !== 'function') {
        throw new Error('myApply is not defined.');
    }

    // 上下文
    ctx = context || window;
    // 函数绑定
    ctx.fn = this;
    let args = arguments[1];
    let result;

    // 有参或者无参的调用
    if (args) {
        result = ctx.fn(...args);        
    } else {
        result = ctx.fn();
    }
    delete ctx.fn;

    return result;
};

const obj = {
    name: 'abc',
};

function log(d, e) {
    console.log(this.name, d, e);
}

log.apply(obj, ['d', 'e']);
log.myApply(obj, ['d', 'e']);
// console.log(log.myApply(obj, ['d', 'e']));