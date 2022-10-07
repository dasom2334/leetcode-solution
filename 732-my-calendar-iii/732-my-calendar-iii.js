
var MyCalendarThree = function() {
    this.map = {};
                                  
    
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function(start, end) {
    
    let max = 0;
    let cur = 0;
    if (!(start in this.map)) this.map[start] = 0;
    if (!(end in this.map)) this.map[end] = 0;
    
    this.map[start]++; this.map[end]--;
    
    for (let k in this.map) {
      cur += this.map[k];
      max = Math.max(max, cur);
    }
    return max;
};

/** 
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */