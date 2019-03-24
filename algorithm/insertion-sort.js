// 插入排序
// 最优 O(n), 最差 O(n^2)

class InsertionSort {

    constructor(array) {
        this.array = array || [];
    }

    sort() {
        let array = this.array;

        // 第一个循环表示开始抓牌，且已经在手里抓了1张，因此 i 从 1 开始
        for (let i = 1, len = array.length; i < len; i++) {
            // 抓了 1 张，先不进入牌堆，临时存放
            let tmp = array[i];

            let j = null;
            //  从最末尾的一张开始比较
            for (j = i; j > 0 && array[j - 1] > tmp; j--) {
                array[j] = array[j - 1];
            }

            // 找到合适位置，将抓的牌放下
            array[j] = tmp;
        }

        return array;
    }
}

module.exports = InsertionSort;
