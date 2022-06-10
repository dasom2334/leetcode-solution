/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const symbols = {
        'I': 1,
        'IV': 4,
        'V': 5,
        'IX': 9,
        'X': 10,
        'XL': 40,
        'L': 50,
        'XC': 90,
        'C': 100,
        'CD': 400,
        'D': 500,
        'CM': 900,
        'M': 1000
    };
    const calc = Object.entries(symbols);
    calc.sort((a, b) => b[1] - a[1]);
    
    let n = num;
    let result = '';
    while(n > 0) {
        for (const [k, v] of calc) {
            if (v <= n) {
                result += k;
                n -= v;
                break;
            }
        }
    }
    
    return result;
};