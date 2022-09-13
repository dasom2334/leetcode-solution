/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
    let result = false;
    
    let nob = 0;
    
    for (const d of data) {
        const bin = toBinary(d)
        if (nob == 0) {
            for (const bit of bin) {
                if (bit == 1) {
                    nob++;
                } else {
                    break;
                }
            }
            
            if (nob == 0) continue;
            else if (nob == 1 || nob > 4) return false;
            else nob--;
            
        } else {
            if (bin[0]+bin[1] != '10') return false;
            nob--;
        }
        
        
    }
    
    return nob == 0;
};

function toBinary(number) {
    return (parseInt(number) >> 0).toString(2).padStart(8, '0');
}