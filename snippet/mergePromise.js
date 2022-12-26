
// const mergePromise = (pArray) => {
//     let data = [];

//     async function run() {
//         for (let p of pArray) {
//             let res = await p();
//             data.push(res);
//         }

//         return data;
//     }

//     return run();
// };

function mergePromise2(ajaxArray) {
    let p = Promise.resolve();
    let arr = [];
    ajaxArray.forEach(promise => {
      p = p.then(promise).then((data) => {
          arr.push(data);
          return arr;
      });
    });
    return p;
}

const p1 = () => new Promise((resolve) => {
    setTimeout(() => {
        console.log(1);
        resolve(1);
    }, 2000);
});

const p2 = () => new Promise((resolve) => {
    setTimeout(() => {
        console.log(2);
        resolve(2);
    }, 1000);
});

const p3 = () => new Promise((resolve) => {
    setTimeout(() => {
        console.log(3);
        resolve(3);
    }, 3000);
});

// mergePromise([p1, p2, p3]).then((data) => {
//     console.log(data);
// });

mergePromise2([p1, p2, p3]).then((data) => {
    console.log(data);
});