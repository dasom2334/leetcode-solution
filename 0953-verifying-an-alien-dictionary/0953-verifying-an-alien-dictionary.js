/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    const map = new Map();
    order.split('').forEach((e, i) => map.set(e, i))
    const orders = words.map(word => word.split('').map(w => map.get(w)))
    for (let i = 1; i < orders.length; i++) {
        for (let j = 0; j < orders[i-1].length; j++) {
            if (orders[i][j] === undefined || orders[i-1][j] > orders[i][j]) return false
            if (orders[i-1][j] < orders[i][j]) break
        }
    }
    return true
};