/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    if (palindrome.length <= 1) return "";
    let p = palindrome.split('');
    for (let i = 0; i < Math.floor(palindrome.length / 2); i++ ) {
        if (palindrome[i] !== 'a' ) {
            p[i] = 'a';
            return p.join('');
        }
    }
    p[p.length - 1] = 'b';
    return p.join('')
};
