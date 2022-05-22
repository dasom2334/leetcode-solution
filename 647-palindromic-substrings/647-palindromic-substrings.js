/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let result = 0;
    for (const i in s) {
        let continued = 0;
        for (let i2 = s.length - 1; i2 >= i; i2--) {
            let isPelindrome = true;
            
            let rightIndex = i2;
            let leftIndex = i;
            while(rightIndex >= i) {
                if(s[rightIndex] != s[leftIndex]) {
                    
                    isPelindrome = false;
                    break;
                  }
                leftIndex++;
                rightIndex--;
            } 
            if (isPelindrome) {
                result ++;
                // console.log(i, i2);
            }
        }
    }
    return result;
};