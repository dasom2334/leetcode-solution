/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
    const ns = n.toString();
    const l = ns.length;
    // console.log(l);
    let target = 1;
    let tl = target.toString().length;
    const nss = ns.split('').sort().join('');
    // console.log(nset);
    while (tl <= l) {
        if (tl == l) {
            const tss = target.toString().split('').sort().join('');
            if (nss == tss) return true;
        }
        
        target *= 2;
        tl = target.toString().length;
    }
    return false;
};