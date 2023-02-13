// 下面来看一道比较典型的问题，通过这个问题来对比几种异步编程方法：
// 红灯 3s 亮一次，绿灯 1s 亮一次，黄灯 2s 亮一次；如何让三个灯不断交替重复亮灯？

function red() {
    console.log('red');
}

function green() {
    console.log('green');
}

function yellow() {
    console.log('yellow');
}


const redTask = () => new Promise((resolve) => {
    setTimeout(() => {
        red();
        resolve();
    }, 3000);
});

const greenTask = () => new Promise((resolve) => {
    setTimeout(() => {
        green();
        resolve();
    }, 1000);
});

const yelloTask = () => new Promise((resolve) => {
    setTimeout(() => {
        yellow();
        resolve();
    }, 2000);
})

const task = () => {
    redTask().then(()=> {
        return greenTask().then(() => {
            return yelloTask().then(() => {
                task();
            });
        });
    });
};

task();