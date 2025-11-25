function smallestRepunitDivByK(k: number): number {
    const queue: string[] = [];
    let lastExtra = 1 % k;
    let cnt = 1;
    while (lastExtra > 0) {
        cnt += 1;
        lastExtra = ((lastExtra * 10) + 1) % k;
        // console.log(k, lastExtra, lastN.length, n, n % k);
        // console.log(queue.join(',').match('99'));
        // console.log(queue.slice(-4))
        const reg = new RegExp(queue.slice(-4).join(','));
        // console.log(reg, reg.test(queue.join(',')), queue.join(','))
        if (queue.length > 5 && reg.test(queue.slice(0, -4).join(','))) {
            return -1;
        }
        queue.push(lastExtra.toString());
    }

    return cnt;
};