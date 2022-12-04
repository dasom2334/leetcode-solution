/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function(nums) {
    let result = 0;
    const l = [0, 0, 0];
    const r = [nums.reduce((a, b) => a + b, 0), nums.length, 0];
    let min = Infinity;
    r[2] = r[0]/r[1];
    
    for (let i = 0; i < nums.length; i++) {
        l[0] += nums[i];
        r[0] -= nums[i];
        l[1]++;
        r[1]--;
        l[2] = (l[1]) ? ~~(l[0]/l[1]) : 0;
        r[2] = (r[1]) ? ~~(r[0]/r[1]) : 0;
        const avDiff = Math.abs((l[2]) - r[2]);
        // console.log(l, r, avDiff, min, result)
        if (min > avDiff) {
            result = i;
            min = avDiff;
        }
    }
    
    return result;
}
var minimumAverageDifferenceNope = function(nums) {
    if (nums.length == 1) return 0;
    let l = 0;
    let r = nums.length - 1;
    let m = Math.ceil((l + r) / 2);
    const lArr = [nums.slice(0, m).reduce((a, b) => a + b, 0), m];
    const rArr = [nums.slice(m).reduce((a, b) => a + b, 0), nums.length - (m)];
    // console.log(lArr, rArr);
    let min = Math.abs((lArr[0]/lArr[1]) - (rArr[0]/rArr[1]));
    
    
    // console.log(min, lArr, rArr);
    while (l + 1 < r) {
        m = Math.ceil((l + r) / 2);
        const left = lArr[0]/lArr[1];
        const right = rArr[0]/rArr[1];
        // console.log(left, right, l, r, m);
        if (left < right) {
            l = m;
            const newM = Math.ceil((l + r) / 2);
            for (let i = m; i < newM; i++) {
                console.log(i, 'i')
                lArr[0] += nums[i];
                rArr[0] -= nums[i];
                lArr[1] += 1;
                rArr[1] -= 1;
            }
            
        } else if (left >= right) {
            r = m;
            const newM = Math.ceil((l + r) / 2);
            for (let i = m; i > newM; i--) {
                rArr[0] += nums[i];
                lArr[0] -= nums[i];
                rArr[1] += 1;
                lArr[1] -= 1;
            }
        }
        const avDiff = Math.abs((lArr[0]/lArr[1]) - (rArr[0]/rArr[1]));
        // console.log(avDiff, 'avdff', (lArr[0]/lArr[1]), (rArr[0]/rArr[1]), lArr[0], lArr[1], rArr[0], rArr[1])
        // console.log(l, r, 'l, r')
        if (avDiff > min) break;
        min = avDiff;
        // console.log(l, r, m, 'l, r, m')
    }
    // console.log(m)
    return m - 1;
};