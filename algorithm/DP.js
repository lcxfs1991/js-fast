/**
 * 动态规划
 */
// function fibo (n) {
//     if (n <= 0)  {
//         return 0;
//     }
//     if (n === 1) {
//         return 1;
//     }
    
//     let result =  fibo(n - 1) + fibo(n - 2);
//     return result;
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(fibo(i));
// }

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let arr1 = [5,4,-1,7,8];
let arr2 = [-3, 1, 3, -1, 2, -4, 2];

const maxSubArray = function(nums) {
    let max = Number.MIN_SAFE_INTEGER;
    let dp = [];
    // base case
    dp[0] = nums[0];
    if (dp[0] > max) {
        max = dp[0];
    }

    for (let i = 1, len = nums.length; i < len; i++) {
        dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);

        if (dp[i] > max) {
            max = dp[i];
        }
    }

    return max;
};

console.log(maxSubArray(arr));
console.log(maxSubArray(arr1));
console.log(maxSubArray(arr2));