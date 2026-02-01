function subarraySum(nums: number[], k: number): number {
    let result = 0;

    let [l, r] = [0, nums.length - 1];
    let rCur = nums.reduce((a, b) => a + b, 0);

    for (let i = r; i >= 0; i--) {
        let lCur = 0
        for (let j = 0; j <= i; j++) {
            if (rCur - lCur === k) {
                result += 1;
            }
            lCur += nums[j];
        }

        rCur -= nums[i];
    }
    // while (l < nums.length) {
    //     if (k === cur) {
    //         result += 1;
    //     }

    //     const right = cur + nums[r + 1];
    //     const left = cur - nums[l];
    //     const isNear = Math.abs(k - right) < Math.abs(k + left)
    //     if (isNear && r < nums.length) {
    //         r += 1;
    //         cur += nums[r];
    //     } else {
    //         cur -= nums[l];
    //         l += 1;
    //     }
    //     // console.log(k, cur, l, r)
    // }

    return result;
};