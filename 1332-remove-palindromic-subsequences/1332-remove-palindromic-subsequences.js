/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    
    let string = s.split('');
    let result = 0;
    let isPelindrome = true;
    // let isPelindedInt = i;
    let r = string.length - 1;
    let l = 0;

    while (l <= (string.length -1)/2) {
        if(string[l] != string[r]) {
            isPelindrome = false;
            break;
        }

        r--;
        l++;
    }

    
    return (isPelindrome)?1:2;
};