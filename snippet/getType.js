

const getType = (obj) => {
  return Object.prototype.toString.call(obj).slice(8, -1)
};

console.log(getType(1));
console.log(getType('1'));
console.log(getType({}));
console.log(getType(new Date()));
console.log(getType(Symbol.for('1')));
