// 请实现函数 fun，使每次调用，默认情况下都能在上一次的返回结果上+1

const fun = (
    () => {
        let count = 0;
        return (t = 1) => {
            return count += t;
        };
    }
)();
  
console.log(fun());
// > 1
console.log(fun());
// > 2
console.log(fun(2));
// > 4
console.log(fun(-5));
// > -1
console.log(fun());
// > 0
console.log(fun());
// > 1
  