// 冒泡排序
// 最优 O(n), 最差 O(n^2)

class BubbleSort {

    constructor(array) {
        this.array = array || [];
    }

    sort() {
        let array = this.array;

        // 排完第一次之后，最后一个数肯定是最大的，因此可以不用排最后一个，以此类推
        for (let len = array.length, i = len - 1; i > 0; i--) {
            let flag = 0; // 优化：如果一直都没有进行交换，则直接退出循环
            for (let j = 0; j < len - 1; j++) {
                if (array[j] > array[j + 1]) {
                    this.swap(array, j, j + 1);
                    flag = 1;
                }
            }

            if (flag === 0) {
                break;
            }
        }

        return this.array;
    }

    swap(array, i, j) {
        let tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }
}

module.exports = BubbleSort;
