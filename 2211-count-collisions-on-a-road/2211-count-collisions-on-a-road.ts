function countCollisions(directions: string): number {
    let result = 0;
    const road = [];

    for (const d of directions) {
        road.push(d);
        // console.log(d, '??', road)
        while (road.length) {
            const last = road.pop();
            const before = road.at(-1);
            if (
            (['S', 'L'].includes(before) && last === 'S') 
            || last === 'R'
            || (!['R', 'S'].includes(before) && last === 'L')
            ) {
                road.push(last);
                break;
            }
            // console.log(last, before)
            if (
                (last === 'S' && before === 'R')
                || (last === 'L' && before === 'S')
            ) {
                result += 1;
                road.pop();
                road.push('S');
            } else if (last === 'L' && before === 'R') {
                result += 2;
                road.pop();
                road.push('S');
            } else {
                road.push(last);
                break;
            }
            // console.log(road, last, before);
        }

    }
    return result;
};