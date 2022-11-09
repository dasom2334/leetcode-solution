
var StockSpanner = function() {
    this.stock = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let span = 1;
    while (this.stock.length > 0) {
        if (this.stock.at(-1)[0] > price) break;
        const last = this.stock.pop();
        span += last[1];
    }
    
    this.stock.push([price, span]);
    
    return span;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */