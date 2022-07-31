/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = [...(new Array(nums.length)), ...nums];
    for (let i = nums.length - 1; i >= 0; i--) {
        this.nums[i] = this.nums[i * 2] + this.nums[i*2 +1];
        
    }
    // console.log(this.nums);
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    let i = index + (this.nums.length/2);
    this.nums[i] = val;
    
    while (i > 0) {
        let l = i;
        let r = i;
        if(i % 2 == 0) {
            r = i + 1;
        } else {
            l = i - 1;
        }
        
        i = Math.floor(i/2);
        this.nums[i] = this.nums[l] + this.nums[r];
    }
    // console.log(this.nums);
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    let n = this.nums.length/2;
    let l = left + n;
    let r = right + n;
    let sum = 0;
    while (l <= r) {
        if (l % 2 === 1) {
          sum += this.nums[l];
          l++;
        }
        if (r % 2 === 0) {
          sum += this.nums[r];
          r--;
        }
        l = Math.floor(l / 2);
        r = Math.floor(r / 2);
        // console.log(l, r);
    }   
    return sum; 
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */