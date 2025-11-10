function minOperations(nums: number[]): number {
    let count = 0;
    const queue = [];
    nums.forEach((num, index) => {
        while (queue.length > 0 && queue.at(-1) > num) {
            queue.pop();
        }
        if (num === 0) {
            return;
        }
        const minNum = queue.at(-1) ?? 0;
        if (minNum < num) {
            queue.push(num);
            count += 1;
        }
    });
    return count;
};