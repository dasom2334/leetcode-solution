/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    function gcd(num1, num2){
        if(num2 == 0) return num1;
        else return gcd(num2, num1 % num2);
    }
    const max = gcd(str1.length, str2.length);
    const str = str1.slice(0, max);
    console.log(str)
    let i = max;
    while (i <= str1.length) {
        if (str !== str1.slice(i - max, i)) return "";
        i += max
    }
    i = max;
    while (i <= str2.length) {
        if (str !== str2.slice(i - max, i)) return "";
        i += max
    }
    
    
    return str
};