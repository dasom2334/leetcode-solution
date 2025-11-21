function intersectionSizeTwo(intervals: number[][]): number {
    intervals.sort((a, b) => a[1] - b[1] || b[0] - a[0]);
    let result = 0;
    const prev = [-1, -1];
    for (const interval of intervals) {
        const [s, e] = interval;
        if (e <= prev[0]) {
            continue;
        } else if (prev[1] < s) {
            result += 2;
            prev[0] = e - 1;
            prev[1] = e;
        } else if (prev[0] < s) {
            result += 1;
            prev[0] = prev[1];
            prev[1] = e;
        }
    }

    return result;
}
