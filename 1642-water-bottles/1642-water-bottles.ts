function numWaterBottles(numBottles: number, numExchange: number): number {
    let totalBottles = numBottles
    let currentBottles = numBottles
    do {
        const lefted = currentBottles % numExchange;
        const changed = Math.floor(currentBottles / numExchange);
        totalBottles += changed;
        currentBottles = lefted + changed;
    } while (currentBottles >= numExchange)
    return totalBottles;
};
