// 实现每隔一秒打印 1,2,3,4

for (let i = 1; i <= 4; i++) {
    (function(j) {
        setTimeout(() => {
            console.log(j);
        }, j * 1000);
    })(i)
}