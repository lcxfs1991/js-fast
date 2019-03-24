// 希尔排序
// 最优 O(n), 最差 O(n^2)

class ShellSort {

    constructor(array) {
        this.array = array || [];
    }

    sort() {
        let array = this.array;
        let len = array.length;

        for (let d = Math.floor(len / 2); d > 0; d = Math.floor(d / 2)) {
            // 第一个循环表示开始抓牌，且已经在手里抓了1张，因此 i 从 1 开始
            for (let i = d; i < len; i++) {
                // 抓了 1 张，先不进入牌堆，临时存放
                let tmp = array[i];

                let j = null;
                //  从最末尾的一张开始比较
                for (j = i; j >= d && array[j - d] > tmp; j -= d) {
                    array[j] = array[j - d];
                }

                // 找到合适位置，将抓的牌放下
                array[j] = tmp;
            }
        }

        return array;
    }
}

module.exports = ShellSort;
