function countCoveredBuildings(n: number, buildings: number[][]): number {
    const xMap = new Map<number, [number, number]>();
    const yMap = new Map<number, [number, number]>();
    let result = 0;
    buildings.forEach(([x, y]) => {
        const xRange = xMap.get(y) ?? [n - 1, 0];
        const yRange = yMap.get(x) ?? [n - 1, 0];
        xMap.set(y, [Math.min(xRange[0], x), Math.max(xRange[1], x)]);
        yMap.set(x, [Math.min(yRange[0], y), Math.max(yRange[1], y)]);
    });
    // console.log(xMap, yMap);
    buildings.forEach(([x, y]) => {
        const [xMin, xMax] = xMap.get(y) ?? [n - 1, 0];
        const [yMin, yMax] = yMap.get(x) ?? [n - 1, 0];
        const xCovered = xMin < x && x < xMax;
        const yCovered = yMin < y && y < yMax;
        // console.log([x, y], xMin, xMax, xCovered, yMin, yMax, yCovered);
        if (xCovered && yCovered) {
            result += 1;
        }
    });

    return result;
};