/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const result = [];
    const map = new Map();

    for (let i = 0; i < strs.length; i++) {
        let str = strs[i].split('').sort().join('');
        // console.log(str);
    
        if (map.has(str)) {
            let mapResult = map.get(str);
            mapResult.push(strs[i]);
            map.set(str, mapResult);
        } else {
            map.set(str, [strs[i]]);
        }
    }

    map.forEach((val) => {
        result.push(val);
    });

    return result;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// console.log(groupAnagrams([""]));
// console.log(groupAnagrams(["a"]));