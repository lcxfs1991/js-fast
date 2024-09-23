let p1 = new Promise((resolve, reject) => {
    resolve(1);
});

p1.then((res) => {
    console.log('p1 res: ', res);
});

let p2 = new Promise((resolve, reject) => {
    resolve(Promise.resolve(2));
});

p2.then((res) => {
    console.log('p2 res: ', res);
});
