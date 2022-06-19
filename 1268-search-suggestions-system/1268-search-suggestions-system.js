/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    let ops = products.sort();
    let result = [];
    
    
    for (let i = 1; i <= searchWord.length; i++) {
        const prefix = searchWord.slice(0, i);
        // console.log(prefix);
        ops = ops.filter(e => e.slice(0, i) == prefix);
        // console.log(ops);
        result.push(ops.slice(0, 3));
    }
    // console.log(result);
    return result;
};