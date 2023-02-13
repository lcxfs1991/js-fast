/**
 * 实现每隔一秒打印 1,2,3,4
 */

/**
 * 块级作用域
 */
for (let i = 1, len = 4; i <= len; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000 * i)
}

/**
 * 闭包
 */
for (let i = 1, len = 4; i <= len; i++) {
    (function(index) {
        setTimeout(() => {
            console.log(index);
        }, 1000 * index)
    }(i));
}