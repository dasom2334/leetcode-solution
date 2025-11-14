function rangeAddQueries(n: number, queries: number[][]): number[][] {
    const mat = Array.from({length: n}, () => Array(n).fill(0));
    for (const query of queries) {
        for (let i = query[0]; i <= query[2]; i++) {
            mat[i][query[1]] += 1;
            if (query[3] + 1 < n) {
                mat[i][query[3] + 1] -= 1;
            }
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            mat[i][j] = mat[i][j] + (mat[i][j - 1] ?? 0);
        }
    }
    return mat;
};