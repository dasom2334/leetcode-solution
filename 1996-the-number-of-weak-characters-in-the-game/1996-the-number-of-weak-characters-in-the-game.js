/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function(properties) {
    
    let result = 0;
    properties.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
    // console.log(properties);
    let temp = properties[0][1];
    for (let i = 1; i < properties.length; i++) {
        if (temp > properties[i][1]) {
            result++;
        } else {
            temp = properties[i][1];   
        }
    }
    return result;
};