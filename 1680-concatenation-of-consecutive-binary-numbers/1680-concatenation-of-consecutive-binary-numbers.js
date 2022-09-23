/**
 * @param {number} n
 * @return {number}
 */
var getPowerOfTwoModedInt = function () {
    
}
var concatenatedBinary = function(n) {
    const mod = 1000000007;
    const binary = [...Array(n)].map((_, i) => (i+1).toString(2)).join('').split('');
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