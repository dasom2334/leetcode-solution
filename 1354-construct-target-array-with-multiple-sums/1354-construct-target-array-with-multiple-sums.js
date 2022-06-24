/**
 * @param {number[]} target
 * @return {boolean}
 */
var isPossible = function(target) {
    let ot = target.slice().sort((a, b) => a - b);
    
    let x = ot.reduce((p, c) => p + c);
    let l = 0;
    let before = 0;
    
    while(x > target.length) {
        const max = ot[ot.length - 1];
        x -= max;
        if (max < x) break;
        before = max % x;
        
        let i = ot.length - 1;
        ot[i] = before || x;
        while(ot[i-1] > ot[i]) {
            [ot[i-1], ot[i]] = [ot[i], ot[i-1]];
            i--;
        }
        console.log(ot, x, max, before);
        x += before;
    }
    
    const result = ot.filter(e => e == 1).length == target.length;
    return result;
};