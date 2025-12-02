function countTrapezoids(points: number[][]): number {
    const map: Record<number, number> = {};
    const mod: bigint = BigInt((10 ** 9) + 7);
    let answer: bigint = BigInt(0);
    let cnt: bigint = BigInt(0);
    points.forEach(([x, y]) => {
        if (!map[y]) {
            map[y] = 0;
        }
        map[y] += 1;
    });
    const yEntries = Object.entries(map);
    yEntries.forEach(([y, yCnt]) => {
        const lineCnt = BigInt((yCnt * (yCnt - 1)) / 2) % mod;
        
        answer = ((cnt * lineCnt + answer) % mod);
        cnt = ((cnt + lineCnt) % mod);
    });

    return Number(answer)
};