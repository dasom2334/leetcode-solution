/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    if (guess(n) === 0) return n;
    let l = 1;
    let r = n;
    while (l < r) {
        const g = Math.floor((l + r)/2);
        switch (guess(g)) {
            case -1 :
                r = g;
                break;
            case 1 :
                l = g;
                break;
            case 0 :
                return g;
                break;
        }
    }
    
    return l;
};