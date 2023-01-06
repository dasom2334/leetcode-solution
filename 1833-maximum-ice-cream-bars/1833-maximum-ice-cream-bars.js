/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    let result = 0;
    costs.sort((a, b) => a - b);
    
    for (const cost of costs) {
        if (cost > coins) {
            break;
        }
        result += 1;
        coins -= cost;
    }
    return result;
};