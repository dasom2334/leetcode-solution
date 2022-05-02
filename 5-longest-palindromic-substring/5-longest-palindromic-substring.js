/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let arr = [];
    
    
    let l = s.length + 1;
    
    while(l--) {
        for (let i = 0; i <= s.length - l; i++) {
            const str = s.slice(i, i+l);
            let isPalindrome = true;
            for (let j = 0; j < str.length/2; j++) {
                if (str[j] !== str[str.length - 1 -j]) {
                    isPalindrome = false;
                    break;
                }
            }
            if (isPalindrome) return str;
        }
    }
    
    
    return "";
};