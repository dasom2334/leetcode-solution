function specialTriplets(nums: number[]): number {
    let result = 0;
    const mod = (10 ** 9) + 7
    const right = new Map<number, number>();
    const left = new Map<number, number>();

    nums.forEach(num => right.set(num, (right.get(num) ?? 0) + 1))
    nums.forEach(num => {
        right.set(num, right.get(num) - 1);
        const j2 = num * 2;
        const lCnt = (left.get(j2) ?? 0) % mod;
        const rCnt = (right.get(j2) ?? 0) % mod;
        result += (lCnt * rCnt) % mod;
        result %= mod;

        left.set(num, (left.get(num) ?? 0) + 1);
    })

    return result;
};