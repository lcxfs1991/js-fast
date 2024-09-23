/**
 * @title 128. 最长连续序列
 * @url https://leetcode.cn/problems/longest-consecutive-sequence/description/?envType=study-plan-v2&envId=top-interview-150
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let maxLength = 0;
    let array = [];
    let sortedNums = Array.from(new Set(nums)).sort((a, b) => a - b);
    // console.log(sortedNums);

    for (let i = 0; i < sortedNums.length; i++) {
        if (!array.length) {
            array.push(sortedNums[i]);
        } else {
            // console.log(sortedNums[i], array[array.length - 1]);
            if (sortedNums[i] - array[array.length - 1] === 1) {
                array.push(sortedNums[i]);
            } else {
                // console.log(array.length, maxLength);
                if (array.length > maxLength) {
                    maxLength = array.length;
                }
                array = [];
                array.push(sortedNums[i]);
            }
        }
    }

    // console.log(array);
    if (array.length && array.length > maxLength) {
        maxLength = array.length;
    } 

    return maxLength;
};

console.log(longestConsecutive([100,4,200,1,3,2]));
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));
console.log(longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6]));