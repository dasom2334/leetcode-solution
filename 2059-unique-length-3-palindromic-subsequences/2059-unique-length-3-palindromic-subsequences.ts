function countPalindromicSubsequence(s: string): number {
    const map = new Map<string, boolean>();
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (map.has(char)) {
            continue;
        }

        for (let j = s.length - 1; j > i; j--) {
            if (s[j] === char) {
                result += (new Set([...s.slice(i + 1, j)])).size;
                map.set(char, true);
                break;
            }
        }
    }

    return result;
};