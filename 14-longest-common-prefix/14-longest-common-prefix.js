/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const maxLength = Math.max(...strs.map(e => e.length));
    let result = strs[0].split('');
    for (const str of strs) {
        let temp = new Array(result.length).fill(false);
        for (const i in temp) {
            temp[i] = (i == 0 || (str[i - 1] == result[i - 1] && temp [i - 1] )) && str[i] == result[i];
        }
        result = result.filter((e, i) => temp[i]);
    }
    console.log(result);
    return result.join('');
};