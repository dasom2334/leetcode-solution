/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let result = "1";
    
    while (n > 1) {
        let temp = "";
        let count = 0;
        for (let i = 0; i < result.length; i++) {
            
            if (result[i] != result[i+1]) {
                temp += count + 1;
                temp += result[i];
                count = 0;
            } else {
                count++;
            }
        }
        
        result = temp;
        n--;
    }
    
    return result;
};