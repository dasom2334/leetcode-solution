/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    
    let temp = [triangle[0][0]];
    
    
    for (let k1 = 1; k1 < triangle.length; k1++) {
        let temp2 = [];
        for (const k2 in triangle[k1]) {
            let temp3 = []
            if (k2 - 1 >= 0) {
                temp3 = [...temp3, temp[k2-1]];
            }
            // console.log(temp, k2);
            if (k2 < temp.length) {
                temp3 = [...temp3, temp[k2]];
            }
            // console.log(temp, temp3);
            temp3 = temp3.map(e => parseInt(e) + parseInt(triangle[k1][k2]));
            temp2.push(Math.min(...temp3));
            
        }
        temp = temp2;
    }
    // console.log(temp);
    return Math.min(...temp);
};