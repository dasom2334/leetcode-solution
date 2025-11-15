function numberOfSubstrings(s: string): number {
    const prevZero = new Array<number>(s.length + 1);
    prevZero[0] = -1;
    for (let i = 0; i < s.length; i++) {
        if (i === 0 ||  (i > 0 && s[i - 1] === '0')) { 
            prevZero[i + 1] = i;
        } else {
            prevZero[i + 1] = prevZero[i];
        }
    }

    let count = 0;
    for (let i = 0; i <= s.length; i++) {
        let zero = s[i - 1] === '0' ? 1 : 0;
        let j = i;
        while (j > 0 && zero * zero <= s.length) {
            const one = i - prevZero[j] - zero;
            if (zero * zero <= one) {
                count += Math.min(j - prevZero[j], one - zero * zero + 1);
            }
            j = prevZero[j];
            zero++;
        }
    }
    return count;
};