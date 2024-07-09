const _ = require('lodash');

console.log(_);

function curry(fn, ...args) {
  return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
}

const log = (date = Date.now(), className = '', funcName = '', msg = '') => {
  console.log(`${date}-${className}-${funcName}-${msg}`);
};

// log(Date.now(), 'Person', 'getName', 'error');
console.log(_.curry(log)(Date.now())('Person'));
