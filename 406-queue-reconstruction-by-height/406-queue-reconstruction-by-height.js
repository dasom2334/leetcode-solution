/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    const op = people.slice().sort((a, b) => a[1] - b[1] || a[0] - b[0]);
    // console.log(op);
    let q = [];
    
    for (const p of op) {
        let i = 0;
        let taller = 0;
        while(i < q.length) {
            if (q[i][0] >= p[0]) {
                taller++;
                // console.log(q[i], i, p, taller)
            }
            if (taller > p[1]) {
                // console.log(i, taller, p[1]);
                // i--;
                break;
            }
            i++;
        }
        q.splice(i, 0, p);
        // console.log(q, i);

    }
    
    return q;
};