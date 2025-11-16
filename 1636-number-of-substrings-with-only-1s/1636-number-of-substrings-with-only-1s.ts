function numSub(s: string): number {
    const modulo = (10 ** 9) + 7;
    let result = 0;

    let cnt = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            cnt += 1;
            result += cnt;
        } 
        if (s[i] === '0' && cnt !== 0) {
            cnt = 0;
        }
    }
    return result % modulo;
};