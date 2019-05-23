// 归并排序
// 平均 O(n)

class MergeSort {

    constructor(array) {
        this.array = array || [];
        this.newArray = [];
    }

    sort(type = 'recursion') {
        let array = this.array;

        if (type === 'recursion') {
            this.divide(0, array.length - 1);
        }
        else if (type === 'iteration') {
            let len = array.length;
            let step = 1;
            let i = 0;
            let j = 0;

            while (step < len) {
                for (i = 0; i <  - 2 * step; i += 2 * step) {
                    this.merge(i, i + step, i + 2 * step - 1);
                }

                if (i + step < len) {
                    this.merge(i, i + step, len - 1);
                }

                step *= 2;
           }

           console.log(array);
        }

        return array;
    }

    // 递归算法
    divide(left, right) {
        if (left < right) {
            let mid = Math.floor((left + right) / 2);
            this.divide(left, mid); //左边归并排序，使得左子序列有序
            this.divide(mid + 1, right); //右边归并排序，使得右子序列有序
            this.merge(left, mid, right); //将两个有序子数组合并操作
        }
    }

    merge(left, mid, right) {
        let array = this.array;
        let tmpArr = [];
        let i = left; //左序列指针
        let j = mid + 1; //右序列指针
        let t = 0; //临时数组指针

        // 分别比较两组数据，小的塞入临时数组
        while (i <= mid && j <= right) {
            if(array[i] <= array[j]){
                tmpArr[t++] = array[i++];
            }
            else {
                tmpArr[t++] = array[j++];
            }
        }

        //将左边剩余元素填充进temp中
        while (i <= mid) {
            tmpArr[t++] = array[i++];
        }

        //将右序列剩余元素填充进temp中
        while(j <= right){
            tmpArr[t++] = array[j++];
        }

        t = 0;

        //将temp中的元素全部拷贝到原数组中
        while(left <= right){
            array[left++] = tmpArr[t++];
        }
    }

    // 迭代算法
    merge_pass() {

    }

}

module.exports = MergeSort;
