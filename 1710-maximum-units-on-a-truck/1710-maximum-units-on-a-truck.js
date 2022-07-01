/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    const ob = boxTypes.slice().sort((a, b) => b[1] - a[1]);
    
    let ts = truckSize;
    let max = 0;
    for (const box of ob) {
        // console.log(ts, max);
        if (ts > box[0]) {
            ts -= box[0];
            max += box[0]*box[1];
        } else {
            max += ts*box[1];
            break;
        } 
    }
    return max;
};