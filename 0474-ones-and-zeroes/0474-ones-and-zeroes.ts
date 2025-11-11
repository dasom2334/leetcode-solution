function findMaxForm(strs: string[], m: number, n: number): number {
    const dp = Array.from({length: m + 1}, () => Array(n + 1).fill(0))

    for (const str of strs) {
        const [mm, nn] = getNumbers(str);

        for (let x = m; x >= mm; x--) {
            for (let y = n; y >= nn; y--) {
                dp[x][y] = Math.max(dp[x][y], dp[x - mm][y - nn] + 1);
            }
        }

    }
    return dp[m][n];
};

function getNumbers(str: string) {
    let m = 0;
    let n = 0;
    [...str].forEach(s => {
        if (s === '0') {
            m++;
        } else {
            n++;
        }
    })
    return [m, n];
}