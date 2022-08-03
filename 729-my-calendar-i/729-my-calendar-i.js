
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
        // console.log([l, r, half, this.booked[half], start, c])
        
    }
    // console.log(l, start, this.booked[l], this.booked);
    if (l%2 == 1) {
      if (this.booked[l] <= start) {
          l++
      } else {
          return false;
      }  
    }
    if (!this.booked[l] || this.booked[l] >= end) {
        // console.log(this.booked[l + 1], start, end);
        this.booked.splice(l, 0, start, end);
        // console.log(this.booked);
        return true;
    }
//     let bool = false;
//     console.log('----------',[start, l, l%2, this.booked, this.booked[l], !this.booked[l + 1], this.booked[l + 1] >= end]);
//     if (this.booked.length == 0) {
//         console.log('hi1')
//         bool = true;
//     } else if (l%2 == 0 && (!this.booked[l] || this.booked[l] >= end)) {
//         console.log('hi2')
//         console.log(this.booked[l + 1], start, end);
//         bool = true;
//     } else if (this.booked[l] == start && (!this.booked[l + 1] || this.booked[l + 1] >= end)) {
//         console.log('hi3')
//         bool = true;
//     }
    
//     if (bool){
//         this.booked.splice(l, 0, start, end);
//         // console.log(this.booked);
//         return true;
//     }
    
    return false;
    
    
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */