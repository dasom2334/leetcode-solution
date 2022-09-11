/**
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */
var maxPerformance = function(n, speed, efficiency, k) {
    const rank = efficiency.map((e, i) => i).sort((a, b) => efficiency[b] - efficiency[a]);
    
    let heap = new MinPriorityQueue();
    let speedSum = 0n;
    let result = 0n;
    
    for (let i = 0; i < n; i++) {
        heap.enqueue(speed[rank[i]]);
        speedSum = speedSum + BigInt(speed[rank[i]]);
        if (heap.size() > k) {
            speedSum = speedSum - BigInt(heap.dequeue().element);
        }
        let perf = speedSum * BigInt(efficiency[rank[i]])
        if (result < perf) result = perf;
    }
    
    return result % 1000000007n ;
    
};