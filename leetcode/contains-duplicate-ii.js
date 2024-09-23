/**
 * @title 219. 存在重复元素 II
 * @url https://leetcode.cn/problems/contains-duplicate-ii/description/?envType=study-plan-v2&envId=top-interview-150
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map();
    let isContain = false;

    for (let i = 0; i < nums.length; i++) {
        if (!map.get(nums[i])) {
            map.set(nums[i], [i]);
        } else {
            let indexArr = map.get(nums[i]);
            for (let j = 0; j < indexArr.length; j++) {
                if (Math.abs(indexArr[j] - i) <= k) {
                    isContain = true;
                    break;
                }
            }

            indexArr.push(i);
            map.set(nums[i], indexArr);
        }
    }

    return isContain;
};

console.log(containsNearbyDuplicate([1,2,3,1], 3));
console.log(containsNearbyDuplicate([1,0,1,1], 1));
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2));