/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    const qs = (l, r) => {
        // console.log(l,r)
        if (l[0] < r[0] && l[1] < r[1]) {
            const i = qsp(l, r);
            qs(l, [i[0] - 1, i[1] - 1]);
            qs([i[0] + 1, i[1] + 1], r);
        }
    }
    const qsp = (l, r) => {
        let i = l.slice();
        let j = r.slice();
        let pivot = mat[l[0]][l[1]];
        
        while (i[0] < j[0] && i[1] < j[1]) {
            while (mat[j[0]][j[1]] > pivot) {
                j[0]--;
                j[1]--;
            }
            
            while (i[0] < j[0] && i[1] < j[1] && mat[i[0]][i[1]] <= pivot) {
                i[0]++;
                i[1]++;
            }
            let temp = mat[i[0]][i[1]];
            mat[i[0]][i[1]] = mat[j[0]][j[1]];
            mat[j[0]][j[1]] = temp;
            
        }
        mat[l[0]][l[1]] = mat[j[0]][j[1]];
        mat[j[0]][j[1]] = pivot;
        return j;
        
    }
    
    const min = Math.min(mat.length - 1, mat[0].length - 1);
    qs([0,0], new Array(2).fill(min));
    let fix = 0;
    let l = mat[0].length - 1;
    for (let i = 1; i < mat[0].length; i++) {
        if (min + i > l) {
            fix = min + i - l;
        } else {
            fix = 0;
        }
        console.log(min - fix , min + i - fix, fix);
        qs([0,i], [min - fix , min + i - fix]);
    }
    l = mat.length - 1;
    for (let i = 1; i < mat.length; i++) {
        // console.log(([i, 0], [mat.length - 1, mat[0].length - 1 - i]))

        if (min + i > l) {
            fix = min + i - l;
        } else {
            fix = 0;
        }
        console.log(min + i - fix, min - fix, fix);
        qs([i, 0], [min + i - fix, min - fix]);
    }
    
    // console.log('----------')
    // console.log(mat);
    return mat;
};