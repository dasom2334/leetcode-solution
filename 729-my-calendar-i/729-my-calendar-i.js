
var MyCalendar = function() {
    this.booked = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    let l = 0;
    let r = this.booked.length - 1;
    
    while (l < r) {
        const half = ~~((r - l)/2) + l;
        let c = 0;
        if(this.booked[half] <= start) {
            l = half+1;
            c = 1;
        } else if (this.booked[half] > start) {
            r = half;
            c = 2;
        }
    }

    if (l%2 == 1) {
      if (this.booked[l] <= start) {
          l++;
      } else {
          return false;
      }  
    }
    if (!this.booked[l] || this.booked[l] >= end) {
        this.booked.splice(l, 0, start, end);
        return true;
    }
    
    return false;
    
    
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */