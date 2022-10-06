
var TimeMap = function() {
    this.map = new Map();
    
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.map.has(key)) this.map.set(key, []);
    const dict = this.map.get(key);
    dict.push([timestamp, value]);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!this.map.has(key)) return "";
    return getClosestTuple(this.map.get(key), timestamp);
};

function getClosestTuple (arr, target) {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        const mid = ~~((l + r) / 2);
        if (target > arr[mid][0]) {
            l = mid+1;
        }
        if (target <= arr[mid][0]) {
            r = mid;
        }
    }
    if (arr[l][0] > target) l--;
    return (l >= 0)? arr[l][1]: "";
}

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */