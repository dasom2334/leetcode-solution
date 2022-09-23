/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function (n) {
    let str = 1;
    let len = 4;
    for (let i = 2; i <= n; i++) {
        if (i === len) {
            len = len * 2
        }
        str = (str * len + i) % 1000000007
        // console.log(str, str.toString(2))
    }
    return str;
}
var concatenatedBinaryMine = function(n) {
    const mod = 1000000007;
    const binary = [...Array(n)].map((_, i) => (i+1).toString(2)).join('');
    let result = 0;
    let current = 1;
    
    for (let i = binary.length - 1; i >= 0; i--) {
        if (binary[i] == 1) {
            result = (result + current) % 1000000007;
        }
        
        current = (current * 2) % 1000000007;
    }
    return result;
};
var concatenatedBinaryOld = function(n) {
    let binary = '';
    for (let i = 1; i <= n; i++) {
        binary += i.toString(2);
    }
    
    return (BigInt('0b' + binary) % 1000000007n);
};