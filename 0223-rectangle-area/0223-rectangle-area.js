/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    const aa = (ax2 - ax1) * (ay2 - ay1);
    const ba = (bx2 - bx1) * (by2 - by1);
    let overlap = 0;
    
    const r = Math.min(ax2, bx2);
    const l = Math.max(ax1, bx1);
    
    const t = Math.min(ay2, by2);
    const b = Math.max(ay1, by1);
    
    const temp = (r - l) * (t - b);
    if (r - l > 0 && t - b > 0) overlap = temp;
    
    return aa + ba - overlap;
};