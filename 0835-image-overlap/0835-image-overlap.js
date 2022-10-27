/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(img1, img2) {
    let result = 0;
    
    const i1 = [];
    const i2 = [];
    
    const map = new Map();
    
    for (let i = 0; i < img1.length; i++) {
        for (let j = 0; j < img1.length; j++) {
            if (img1[i][j] == 1) i1.push([i, j]);
            if (img2[i][j] == 1) {
                i2.push([i, j]);  
                map.set(i + "," + j, 1);
            } 
        }
    }
    if (i1.length == 0) return 0;
    
    for (let i = 0; i < i1.length; i++) 
        for (let j = 0; j < i2.length; j++) {{
            const fy = i2[j][0] - i1[i][0];
            const fx = i2[j][1] - i1[i][1];
            const fixKey = 'fix'+fy+','+fx;
            if (map.has(fixKey)) continue;
            map.set(fixKey, 1);
            let count = 0;
            for (let k = 0; k < i1.length; k++) {
                const [y, x] = [i1[k][0] + fy, i1[k][1] + fx];
                if (map.has(y + "," + x)) {
                    count++;
                }
            }
            result = Math.max(count, result);
        }
    }
    
    // console.log(i1, i2);
    
    return result;
};



// [[1,1,1],
//  [0,1,0],
//  [0,1,0]]
// [[0,1,0],
//  [1,1,1],
//  [0,0,1]]

// 11 12 22

// 00 01 11 21