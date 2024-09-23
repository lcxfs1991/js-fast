/**
 * @title 383. 赎金信
 * @url https://leetcode.cn/problems/ransom-note/description/?envType=study-plan-v2&envId=top-interview-150
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (magazine.length < ransomNote.length) {
        return false;
    }

    let canMake = true;

    const ransomNoteMap = new Map();
    const magazineMap = new Map();

    for (let i = 0; i < ransomNote.length; i++) {
        if (ransomNoteMap.get(ransomNote[i])) {
            let count = ransomNoteMap.get(ransomNote[i]);
            ++count;
            ransomNoteMap.set(ransomNote[i], count);
        } else {
            ransomNoteMap.set(ransomNote[i], 1);
        }
    }

    for (let i = 0; i < magazine.length; i++) {
        if (magazineMap.get(magazine[i])) {
            let count = magazineMap.get(magazine[i]);
            ++count;
            magazineMap.set(magazine[i], count);
        } else {
            magazineMap.set(magazine[i], 1);
        }
    }

    ransomNoteMap.forEach((val, key) => {
        let mzVal = magazineMap.get(key) || 0;
        if (mzVal < val) {
            canMake = false;
        }
    });

    return canMake;
};


console.log(canConstruct('a', 'b'));
console.log(canConstruct('aa', 'ab'));
console.log(canConstruct('aa', 'aab'));