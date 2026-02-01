function spiralOrder(matrix: number[][]): number[] {
    const [m, n] = [matrix.length, matrix[0].length];
    let temp = 0;
    const result = [];
    const visit = new Array(m * n);

    const offsets = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let oIndex =  0;

    let [mm, nn] = [0, 0];

    while (result.length < m * n) {
        result.push(matrix[mm][nn]);
        visit[mm * n + nn] = 1;

        let mmm = mm + offsets[oIndex][0];
        let nnn = nn + offsets[oIndex][1];

        if (
            visit[mmm * n + nnn] 
            || mmm < 0 || nnn < 0 
            || m < mmm + 1 || n < nnn  + 1
        ) {
            oIndex = oIndex >= 3 ? 0 : oIndex + 1;
            mmm = mm + offsets[oIndex][0];
            nnn = nn + offsets[oIndex][1];
        }
        mm = mmm;
        nn = nnn;
        // console.log(mm, nn, oIndex)
    }

    
    return result;
};