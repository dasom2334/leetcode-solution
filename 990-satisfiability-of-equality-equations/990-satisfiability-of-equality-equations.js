/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
    const equals = equations.filter(e => e[1] == '=');
    const notEquals = equations.filter(e => e[1] == '!');
    
    const map = new Map();
    const dict = {};
    
    equals.forEach(e => {
        let k = e[0];
        if (map.has(e[0]) && map.has(e[3])) {
            const a = map.get(e[0]);
            const b = map.get(e[3]);
            if (a == b) return;
            [...(dict[b])].forEach(c => {
                dict[a].add(c);
                map.set(c, a);
            });
            
            delete dict[b];
        } else {
            k = map.has(e[0]) ? map.get(e[0]) : (map.has(e[3]) ? map.get(e[3]) : e[0]);

            map.set(e[0], k);
            map.set(e[3], k);
            if (!(k in dict)) dict[k] = new Set();
            dict[k].add(e[0]);
            dict[k].add(e[3]);
        }
    })
    
    for (const ne of notEquals) {
        const a = ne[0];
        const b = ne[3];
        if (map.has(a) && map.has(b)) {
            if (map.get(a) == map.get(b)) return false;
        } else if (a == b) return false;
    }
    return true;
    
    
};