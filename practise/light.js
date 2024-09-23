/**
 * 1. 循环打印红黄绿
 * 下面来看一道比较典型的问题，通过这个问题来对比几种异步编程方法：红灯 3s 亮一次，绿灯 1s 亮一次，黄灯 2s 亮一次；如何让三个灯不断交替重复亮灯？
 */

function red() {
    console.log('red');
}

function green() {
    console.log('green');
}

function yellow() {
    console.log('yellow');
}

async function light(cb, delay) {
    await new Promise((resolve) => {
        setTimeout(() => {
            cb();
            resolve();
        }, delay);
    });
}

async function task() {
    await light(red, 3000);
    await light(yellow, 2000);
    await light(green, 1000);
    task();
}

task();