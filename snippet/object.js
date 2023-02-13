const Utils = {
    isType(obj, type) {
        return Object.prototype.toString.call(obj).slice(8 ,-1).toLowerCase() === type;
    },
    newObject(func, ...args) {
        // 新建空对象
        let object = {};
        // __proto__ 指向 fun.prototype 原型链
        object.__proto__ = func.prototype;
        // 将 fun 的 this 绑定到 object
        let result = func.apply(object, args);
        return typeof result === 'object' ? result : object;
    },
    extends(child, parent) {
        // 用第三个函数，承接 parent.prototype
        // ?? Person 里面的 this 没有被继续到
        function F() {};
        F.prototype = parent.prototype;
        let f = new F();

        f.constructor = child;
        child.prototype = f;
    }
};

console.log(Utils.isType({}, 'object'));
console.log(Utils.isType([], 'array'));
console.log(Utils.isType(new Map(), 'map'));
console.log(Utils.isType(new Set(), 'set'));
console.log(Utils.isType('abc', 'string'));

function Person(name, age) {
    this.name = name || 'Tom';
    this.age = age || 20;
}

console.log('old object 1: ', new Person());
console.log('old object 2: ', new Person('May', 18));
console.log('new object: ', Utils.newObject(Person, 'Marry', 25));

function Tom() {
    this.nationality = 'UK';
}

Utils.extends(Tom, Person);
console.log(new Tom('Tom', 20));


module.exports = {

};
