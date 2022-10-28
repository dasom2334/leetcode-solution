/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const dict = {};
    
    for (const str of strs) {
        let s = str.split('');
        s.sort();
        s = s.join('');
        // console.log(s);
        if (!(s in dict)) dict[s] = [];
        dict[s].push(str);
    }
    
    return Object.values(dict);
};