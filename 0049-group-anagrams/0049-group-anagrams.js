/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const dict = {};
    
    for (const str of strs) {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            count += str.charCodeAt(i) ** 4;
        }
        count *= str.length;
        if (!(count in dict)) dict[count] = [];
        dict[count].push(str);
    }
    
    
//     for (const str of strs) {
//         let s = str.split('');
//         s.sort();
//         s = s.join('');
//         // console.log(s);
//         if (!(s in dict)) dict[s] = [];
//         dict[s].push(str);
//     }
    
    return Object.values(dict);
};