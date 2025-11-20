function intersectionSizeTwo(intervals: number[][]): number {
    intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
    // intervals.sort((a, b) => b.length - a.length);
    let result = 0;
    const mat = Array.from({length: intervals.length}, () => 2);

    for (let index = intervals.length - 1; index >= 0; index--) {
        const interval = intervals[index];
        const [start, end] = interval;
        const m = mat[index];
        for (let i = start; i < start + m; ++i) {
            for (let j = 0; j <= index; ++j) {
                if (m > 0 && i <= intervals[j][1]) {
                    mat[j] -= 1;
                }
            }
            // console.log(mat);
            result += 1;
        }
    }

    return result;
};
