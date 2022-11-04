/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = /[a|e|i|o|u]/i;
    let r = s.length - 1;
    const result = s.split('');
    for (let l = 0; l < r; l++) {
        if (vowels.test(s[l])) {
            while (!vowels.test(s[r])) {
                r--;
            }
            let temp = s[l];
            result[l] = s[r];
            result[r] = temp;
            r--;
        }
    }    
    return result.join('');
};