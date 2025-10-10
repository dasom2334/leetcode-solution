function maximumEnergy(energy: number[], k: number): number {
    let max = energy.at(-1);
    let step = k-1;
    const arr = Array.from(new Array(k)).fill(0);
    for (let i = energy.length - 1; i >= 0; i--) {
        if (0 > step) {
            step = k-1;
        }
        arr[step] += energy[i];
        max = Math.max(arr[step], max);
        step -= 1;
    }
    return max;
};