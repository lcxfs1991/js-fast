// 选择排序
// 最优 O(n^2), 最差 O(n^2)

class SelectionSort {

    constructor(array) {
        this.array = array || [];
    }

    sort() {
        let array = this.array;

        for (let i = 0, len = array.length; i < len; i++) {
            for (let j = i + 1; j < len; j++) {
                if (array[i] > array[j]) {
                    this.swap(array, i, j);
                }
            }
        }

        return array;
    }

    swap(array, i, j) {
        let tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }
}

module.exports = SelectionSort;
