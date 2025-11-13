function maxOperations(s: string): number {
    let count = 0;
    let currentChunk = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            currentChunk += 1;
        }
        if (s[i] === '0' && s[i - 1] === '1') {
            count += currentChunk;
        }
    }
    return count;
};