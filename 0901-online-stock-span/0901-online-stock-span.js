
var StockSpanner = function() {
    this.stock = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let result = 1;
    for (let i = this.stock.length - 1; i >= 0; i--) {
        if (this.stock[i] > price) break;
        result++;
    }
    
    this.stock.push(price);
    
    return result;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */