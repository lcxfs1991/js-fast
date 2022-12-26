/**
 * 小孩报数问题
 * 有30个小孩儿，编号从1-30，围成一圈依此报数，1、2、3 数到 3 的小孩儿退出这个圈， 然后下一个小孩 重新报数 1、2、3，问最后剩下的那个小孩儿的编号是多少?
 */

const reportNumber = (max) => {
    let arr = new Array(30);
    arr.fill(0);
    arr = arr.map((item, index) => {
        return item + index + 1;
    });
    // console.log(arr.toString());

    let count = 1;
    let index = 0;

    while (arr.length > 1) {
        if (count === 3) {
            arr.splice(index, 1);
            count = 0;
        }

        ++count;
        ++index;
        index = (index > arr.length - 1) ? 0 : index;
    }

    return arr[0];
};


console.log(reportNumber(30));