/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
    let memo = [...Array(n+1)].map(() => Array(target+1).fill(0));
    
    function run(dice, left) {
        if(left < dice || left > dice*k) return 0;
        if(dice === 1) {
            memo[dice][left] = left <= k ? 1:0;
            return left <= k;  
        } 
        if(memo[dice][left]) return memo[dice][left];
        
        let total = 0;
        
        for(let i = 1; i <= k; i++) {
            total += run(dice-1, left-i);
            total %= (10**9 + 7);
        }
        memo[dice][left] = total;
        // console.log(memo);
        return total;
    }
    let result = run(n, target);
        // console.log(memo);
    return result;
};

