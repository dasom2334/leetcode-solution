
var MedianFinder = function() {
    this.nums = [];
    this.l = -1;
    this.r = 0;
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.nums.length == 0) {
        this.nums.push(num);
    } else {
        let i = 0;
        for (; i < this.nums.length; i++){
            if (this.nums[i] > num) break;
        }
        this.nums.splice(i, 0, num);
    }
    
    
    if (this.nums.length % 2 == 1) {
        this.l += 1;
    } else {
        this.r += 1;
    }
    // console.log(this.nums);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    return (this.nums[this.l] + this.nums[this.r]) / 2;
};


/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */