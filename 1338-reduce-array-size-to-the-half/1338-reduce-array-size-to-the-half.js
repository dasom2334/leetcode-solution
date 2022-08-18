/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    let dict = {};
    for (const v of arr) {
        if (v in dict) {
            dict[v] += 1;
        } else {
            dict[v] = 1;
        }
    }
    // console.log(dict);
    const vs = Object.values(dict).sort((a, b) => b - a);
    // console.log(vs);
    
    let result = 0;
    let sums = 0;
    
    for (const c of vs) {
        sums += c;
        result ++;
        if (sums >= arr.length / 2) {
            break;
        }
    }
    
    return result;
};