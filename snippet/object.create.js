/**
 * Object.create
 * @param {*} obj
 */

const create = (obj, props) => {
    function F() {}
    F.prototype = obj;

    for (prop in props) {
      Object.defineProperty(F.prototype, prop, props[prop]);
    }

    return new F();
};

const instanceObj = {
    a: 123,
    b: 'abc',
};

const obj = create(instanceObj, {
    c: {
        get() {
          return 456;
        }
    },
    d: {
        value: 'def'
    }
});

console.log(obj.a, obj.b, obj.c, obj.d);
