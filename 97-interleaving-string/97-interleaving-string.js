/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) return false;
    let visited = [];
    let toVisit = [[0,0]];
    
    while(toVisit.length > 0) {
        const c = toVisit.pop();
        const cs = c.join();
        if (!visited.includes(cs)) {
            // console.log(c);
            const pointer = c[0] + c[1];
            if (pointer == s3.length) {
                return true;
            } 
            if (s3[pointer] == s1[c[0]]) {
                toVisit.push([c[0]+1, c[1]])
            }
            if (s3[pointer] == s2[c[1]]) {
                toVisit.push([c[0], c[1]+1])
            }
            visited.push(cs);
        }
        // console.log(visited, toVisit);
    }
    return false;
};
