/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let calcs = new Array(ratings.length).fill(1);
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i-1]) {
            calcs[i] = calcs[i-1]+1;

        }
    }
    for (let j = ratings.length - 1; j > 0; j--) {
        if (ratings[j] < ratings[j-1]) {
            calcs[j-1] = Math.max(calcs[j]+1, calcs[j-1]);
        }
    }
    // console.log(calcs);
    
    return calcs.reduce((p, c) => p + c, 0);
    
};