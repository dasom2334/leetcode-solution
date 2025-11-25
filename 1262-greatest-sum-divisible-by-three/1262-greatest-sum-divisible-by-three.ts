function maxSumDivThree(nums: number[]): number {
    let sumAll = nums.reduce((a, b) => a + b, 0);
    nums.sort((a, b) => a - b);
    const threeExtra = sumAll % 3;
    
    if (threeExtra === 0) {
        return sumAll;
    }

    let searchDoneExtraEqual = false;
    let searchDoneExtraNoEqual = false;
    const extraNoEqual = [];
    let current = sumAll;
    for (const num of nums) {
        if (!searchDoneExtraEqual && threeExtra === num % 3) {
            current = Math.min(current, num);
            // console.log('equal', current, num, num % 3,threeExtra);
            searchDoneExtraEqual = true;
        } else if (!searchDoneExtraNoEqual && 0 !== num % 3) {
            extraNoEqual.push(num);
            if (extraNoEqual.length === 2) {
                current = Math.min(current, extraNoEqual[0] + extraNoEqual[1]);
                
                // console.log('noEqual', current)
                searchDoneExtraNoEqual = true;
            }
        }

        if (searchDoneExtraEqual && searchDoneExtraEqual) {
            break;
        }
    }
    // console.log(sumAll, threeExtra, current, extraNoEqual);
    return sumAll - current;
};