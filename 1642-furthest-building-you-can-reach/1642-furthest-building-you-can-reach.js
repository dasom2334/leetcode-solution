/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
    let buildings = heights.map((e, i) => i > 0 ? (heights[i] - heights[i-1]):0);
    let sum = buildings.filter(e => e > 0).reduce((p, c) => p + c, 0);
    let ob = buildings
            .slice()
            // .filter(e => e > 0)
            .sort((a, b) => a - b);
    let ls = ob
            .splice(ob.length - ladders)
            .map(e => (e <= 0 ? 0 : e));
    ob = ob.filter(e => e > 0);
    // console.log(ladders, ls.length);
    let lsum = ls.reduce((a, b) => a + b, 0);
    let last = 0;
    let next = 0;
    let isLadderOut = -1;
    while(buildings.length > 0) {
        if (sum - lsum <= bricks) break;
        
        const olast = buildings.pop();
        
        last = (olast > 0)? olast:0;
        sum -= last;
        isLadderOut = ls.indexOf(olast);
        if (isLadderOut != -1) {
            if (ob.length > 0) {
                next = ob.pop()
            } else {
                next = 0;
            }
            // console.log(next);
            ls[isLadderOut] = next;
            lsum = lsum + next - last;
        } else {
            const i = ob.indexOf(olast);
            if (i != -1) ob.splice(i, 1);
        }
    }
    return buildings.length - 1;
};