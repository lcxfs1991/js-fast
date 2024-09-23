// # 展开数组（一）
// 请实现函数expand，使其按如下规则展开二维数组
const arr1 = [
    [ 1,  2,  3,  4,  5,  6,  7,  8], 
    [ 9, 10, 11, 12, 13, 14, 15, 16],
    [17, 18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 31, 32]
  ];
  
  function expand1(array) {
    const result = [];
    for (let i = 0, len = array[0].length; i < len; i++) {
        result.push(array[0][i]);

        let row = 0;
        let col = i;
        while (true) {
            ++row;
            --col;
            
            if (row > array.length - 1 || col < 0) {
                break;
            }

            result.push(array[row][col]);
        }
    }
  
    return result;
  }
//   console.log(expand1(arr1));
  // > 1, 2, 9, 3, 10, 17, 4, 11, 18, 25, 5, 12, 19, 26, 6, 13, 20, 27 ...

// # 展开数组（二）
// 请实现函数expand，使其按如下规则展开二维数组
const arr2 = [
    [ 1,  2,  3,  4,  5,  6,  7,  8], 
    [ 9, 10, 11, 12, 13, 14, 15, 16],
    [17, 18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 31, 32]
  ];

  const isEven = (num) => {
    return num % 2 === 0;
  }
  
  function expand2(array) {
    const result = [];
    let row = 0;
    let col = 0;
    const limit = array[0].length - 1;
    // console.log(limit, array.length);

    while (true) {
        result.push(array[row][col]);

        // row 的增减与 col 的奇偶相关
        if ((isEven(col))) {
            ++row;
        } else {
            --row;
        }

        // 如果 row 增减到了尽头，col + 1
        if (row < 0 || row > array.length - 1) {
            ++col;

            if (isEven(col)) {
                row = 0;
            } else {
                row = array.length - 1;
            }
        }

        // 如果 col > limit，迭代到了尽头
        if (col > limit) {
            break;
        }
        
    }
  
    return result;
  }
  console.log(expand2(arr2));
  // > 1, 9, 17, 25, 26, 18, 10, 2, 3, 11, 19, 27, 28, 20, 12, 4, 5, 13 ...

// 展开数组（三）
// 您有一个n x m的数组，如下所示，请实现expand函数，使二位数组的值按如下方式返回
function expand3(arr) {
  const result = [];
  // TODO
    
  return result;
}

const a = [
  [ 1,  2,  3,  4,  5,  6],
  [18, 19, 20, 21, 22,  7],
  [17, 28, 29, 30, 23,  8],
  [16, 27, 26, 25, 24,  9],
  [15, 14, 13, 12, 11, 10],
];

console.log(expand3(a));
// > 1, 2, 3, 4, 5, 6, 7, 8, 9, ....30

const b = [
  [4, 2, 5, 7],
  [1, 9, 3, 8],
  [0, 6, 11, 10]
];
console.log(expand3(b));
// > 4, 2, 5, 7, 8, 10, 11, 6, 0, 1, 9, 3
  