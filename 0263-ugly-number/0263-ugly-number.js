/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if (n < 1) return false;
    const limited = [2, 3, 5];
    
    while (n > 1) {
        let isFactorize = false;
        for (const p of limited) {
            if ((n/p) % 1 === 0) {
                n /= p;
                isFactorize = true;
                break;
            }    
        }
        if (!isFactorize) {
            return false;
        }
        
    }
    
    
    return true;
};