/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var mirrorReflection = function(p, q) {
	const gcd = (a, b) => {
        if (b === 0) return a;
        return gcd(b, a%b);
    }
    const k = gcd(p, q);
    p = (p/k)%2;
    q = (q/k)%2;
    // console.log(p, q);
    return q && p ? 1 : (q? 2: 0);
};
var mirrorReflectionOld = function(p, q) {
	while (p%2==0 && q%2==0) {
		p = p / 2
		q = q / 2
	}
	
	if (p%2 == 0)
		return 2
	
	if (q%2 == 0)
		return 0
	
	return 1
};